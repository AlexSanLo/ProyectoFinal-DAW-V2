import { ref } from 'vue';

const notificationPermission = ref(Notification.Permission);
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