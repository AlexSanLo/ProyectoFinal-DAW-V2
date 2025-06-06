import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { messaging } from "./firebase";

const swPath = '/firebase-messaging-sw.js';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(swPath)
    .then(registration => {
      // Registro exitoso del service worker. No pedir permiso aquí.
    })
    .catch(error => {
      console.error('Error al registrar el servicio worker:', error);
    });
} else {
  console.log('Service worker no soportado en este navegador');
}

createApp(App).mount('#app');
