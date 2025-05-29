import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { messaging } from "./firebase";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ProyectoFinal-DAW-V2/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registrado:', registration);
    })
    .catch((error) => {
      console.error('Error al registrar el Service Worker:', error);
    });
}

createApp(App).mount('#app');
