import { ref } from 'vue';
import { obtenerTokenFCM } from "./firebaseMessaging";

const notificationPermission = ref(Notification.permission);
export const requestNotifications = ref(localStorage.getItem("requestNotifications") === "true");

export function solicitarPermiso() {
  Notification.requestPermission().then((permission) => {
    notificationPermission.value = permission;
    console.log("Permiso de notificaciones:", permission);
    if (permission === "granted") {
      localStorage.removeItem("requestNotifications");
      requestNotifications.value = false;
      obtenerTokenFCM();
    }
  });
}