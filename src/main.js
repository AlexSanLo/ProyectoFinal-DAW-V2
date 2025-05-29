import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { getMessaging, getToken } from "firebase/messaging"; 
import { messaging } from "./firebase";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ProyectoFinal-DAW-V2/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registrado:', registration);

  
      getToken(messaging, { 
          vapidKey: 'BBaCgc9snIa4Ge2qMfubxh-EP-uwSOYPSM-Aqq91uZCoLH2LHJoNO3XRB5cGET2QC335dQdQpKBFMPC4Wql-kNI',
          serviceWorkerRegistration: registration 
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log('Token FCM obtenido:', currentToken);
          } else {
            console.log('No se pudo generar el token, solicita permisos de notificación.');
          }
        })
        .catch((err) => {
          console.error('Error al obtener el token FCM:', err);
        });
    })
    .catch((error) => {
      console.error('Error al registrar el Service Worker:', error);
    });
}

createApp(App).mount('#app')
