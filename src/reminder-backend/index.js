import admin from "firebase-admin";
import fetch from "node-fetch";
import { readFileSync } from "fs";

// Carga tu archivo de credenciales de Firebase (descárgalo desde la consola de Firebase)
const serviceAccount = JSON.parse(readFileSync("./serviceAccountKey.json", "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function sendReminders() {
  const now = Date.now();
  const snapshot = await db.collection('reminders')
    .where('timestamp', '<=', now)
    .where('sent', '==', false)
    .get();

  if (snapshot.empty) {
    console.log("No hay recordatorios pendientes.");
    return;
  }

  const promises = [];

  snapshot.forEach(doc => {
    const reminder = doc.data();
    const message = {
      token: reminder.fcmToken,
      notification: {
        title: reminder.title || "Recordatorio de nota",
        body: reminder.description || "Tienes un recordatorio pendiente"
      }
    };

    promises.push(
      admin.messaging().send(message)
        .then(() => {
          console.log("Notificación enviada a", reminder.fcmToken);
          return doc.ref.update({ sent: true });
        })
        .catch(err => {
          console.error("Error enviando notificación:", err);
        })
    );
  });

  await Promise.all(promises);
  console.log("Proceso de recordatorios completado.");
}

// Ejecuta la función cada vez que corras el script
sendReminders();
