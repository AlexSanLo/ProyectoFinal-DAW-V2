<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div v-if="fcmToken" class="p-4 bg-yellow-100 text-black rounded mb-4">
      <strong>Token FCM:</strong>
      <div style="word-break: break-all;">{{ fcmToken }}</div>
    </div>
    <main class="flex-1 flex flex-col">
      <NotesBody />
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
import { obtenerTokenFCM } from "./composables/firebaseMessaging";

const requestNotifications = ref(localStorage.getItem("requestNotifications") === "true");
const fcmToken = ref("");

onMounted(() => {
  console.log("Estado inicial de requestNotifications:", localStorage.getItem("requestNotifications"));
});

onMounted(async () => {
  fcmToken.value = await obtenerTokenFCM() || "No disponible";
});

</script>