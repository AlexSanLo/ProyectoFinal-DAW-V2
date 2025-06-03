import express from "express";
import admin from "firebase-admin";
import { readFileSync } from "fs";

// Carga la clave privada de Firebase desde una variable de entorno o archivo
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || readFileSync("./serviceAccountKey.json", "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint para trigger manual o por cron-job.org
app.get("/send-reminders", async (req, res) => {
  try {
    const now = Date.now();
    const snapshot = await db.collection('reminders')
      .where('timestamp', '<=', now)
      .where('sent', '==', false)
      .get();

    if (snapshot.empty) {
      return res.send("No hay recordatorios pendientes.");
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

      // Marcar como "processing" antes de enviar
      promises.push(
        doc.ref.update({ processing: true }).then(() => {
          return admin.messaging().send(message)
            .then(() => doc.ref.delete())
            .catch((err) => {
              console.error('Error enviando notificación FCM:', err);
              // Si falla el envío, puedes volver a poner processing: false o loguear el error
              return doc.ref.update({ processing: false });
            });
        })
      );
    });

    await Promise.all(promises);
    res.send("Recordatorios enviados.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error enviando recordatorios.");
  }
});

app.get("/", (req, res) => {
  res.send("Reminder backend funcionando.");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
