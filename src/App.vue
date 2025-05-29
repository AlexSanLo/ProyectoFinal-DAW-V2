<script setup>
import { onMounted } from "vue"
import { onMessage } from "firebase/messaging"
import Header from "./components/Layout/Header.vue"
import Footer from "./components/Layout/Footer.vue"
import NotesBody from "./components/Layout/NotesBody.vue"
import { messaging } from "./firebase"

onMounted(() => {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        console.log("Permiso de notificaciones otorgado.")
      } else {
        console.log("Permiso de notificaciones denegado.")
      }
    })
  }
  onMessage(messaging, (payload) => {
    console.log("Mensaje recibido en primer plano: ", payload)
  })
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 flex flex-col">
      <NotesBody />
    </main>
    <Footer />
  </div>
</template>
