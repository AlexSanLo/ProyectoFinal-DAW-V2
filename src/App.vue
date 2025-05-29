<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 flex flex-col">
      <NotesBody />
      <!-- Mostrar el botón solo si se requiere solicitar el permiso -->
      <div v-if="requestNotifications && notificationPermission === 'default'" class="text-center mt-4">
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

const notificationPermission = ref(Notification.permission);
const requestNotifications = ref(localStorage.getItem("requestNotifications") === "true");

function solicitarPermiso() {
  Notification.requestPermission().then((permission) => {
    notificationPermission.value = permission;
    console.log("Permiso de notificaciones:", permission);
    localStorage.removeItem("requestNotifications");
    requestNotifications.value = false;
  });
}

onMounted(() => {
  onMessage(messaging, (payload) => {
    console.log("Mensaje recibido en primer plano:", payload);
  });
});
</script>
