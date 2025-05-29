import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { messaging } from "./firebase";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ProyectoFinal-DAW-V2/firebase-messaging-sw.js')
    .then(registration => {
      messaging.useServiceWorker(registration);
      Notification.requestPermission()
        .then(permission => {
          if (permission === 'granted') {
            console.log('Permiso concedido para mostrar notificaciones');
          } else {
            console.log('Permiso denegado para mostrar notificaciones');
          }
        });
    })
    .catch(error => {
      console.error('Error al registrar el servicio worker:', error);
    });
} else {
  console.log('Service worker no soportado en este navegador');
}

createApp(App).mount('#app');

