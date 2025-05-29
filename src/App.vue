<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 flex flex-col">
      <NotesBody />
      <div v-if="requestNotifications" class="text-center mt-4">
        <button @click="solicitarPermiso" class="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md">
          Activar Notificaciones
        </button>
      </div>
      <div v-else-if="notificationPermission === 'denied'" class="text-center mt-4 text-red-600">
        Las notificaciones están bloqueadas. Revisa la configuración de tu navegador.
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
import { obtenerTokenFCM } from "./composables/FirebaseMessaging";

const requestNotifications = ref(localStorage.getItem("requestNotifications") === "true");


onMounted(() => {
  console.log("Estado inicial de requestNotifications:", localStorage.getItem("requestNotifications"));
  // Listener para mensajes en primer plano de Firebase Messaging
  onMessage(messaging, (payload) => {
    console.log("Mensaje recibido en primer plano:", payload);
  });
});

</script>
