<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 flex flex-col">
      <NotesBody />
      <!-- Se muestra el botón si se marcó la opción en el login -->
      <div v-if="requestNotifications" class="text-center mt-4">
        <button @click="solicitarPermiso" class="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md">
          Activar Notificaciones
        </button>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { onMessage } from "firebase/messaging";
import Header from "./components/Layout/Header.vue";
import Footer from "./components/Layout/Footer.vue";
import NotesBody from "./components/Layout/NotesBody.vue";
import { messaging } from "./firebase";

// Lee del localStorage la intención que se guardó en el login,
// es decir, si el usuario marcó la casilla para activar notificaciones.
const requestNotifications = ref(localStorage.getItem("requestNotifications") === "true");

// Guarda el estado actual del permiso de notificaciones (default, granted o denied)
const notificationPermission = ref(Notification.permission);

// Función para solicitar el permiso al hacer clic en el botón.
function solicitarPermiso() {
  Notification.requestPermission().then((permission) => {
    notificationPermission.value = permission;
    console.log("Permiso de notificaciones:", permission);
    // Si se concede el permiso, se limpia la bandera para que no se vuelva a mostrar el botón.
    if (permission === "granted") {
      localStorage.removeItem("requestNotifications");
      requestNotifications.value = false;
    }
  });
}

onMounted(() => {
  console.log("Estado inicial de requestNotifications:", localStorage.getItem("requestNotifications"));
  // Se configura el listener para recibir mensajes en primer plano de Firebase Messaging.
  onMessage(messaging, (payload) => {
    console.log("Mensaje recibido en primer plano:", payload);
  });
});
</script>
