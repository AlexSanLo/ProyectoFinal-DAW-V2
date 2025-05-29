<template>
  <div class="min-h-screen flex flex-col">
    <Header />
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
import { obtenerTokenFCM } from "./composables/FirebaseMessaging";

const requestNotifications = ref(localStorage.getItem("requestNotifications") === "true");


onMounted(() => {
  console.log("Estado inicial de requestNotifications:", localStorage.getItem("requestNotifications"));
  onMessage(messaging, (payload) => {
    console.log("Mensaje recibido en primer plano:", payload);
  });
});

</script>
