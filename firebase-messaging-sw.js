// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA8EmogduR2W8d9ht3q4VyM4J-JUTvwBd8",
  authDomain: "noteeasy-7080d.firebaseapp.com",
  projectId: "noteeasy-7080d",
  storageBucket: "noteeasy-7080d.firebaseapp.com",
  messagingSenderId: "982678504604",
  appId: "1:982678504604:web:efbc6010211069513S19959",
  measurementId: "G-4FHPK9T92Y"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  alert('[backgroundMessage] Recibida notificación en segundo plano: ' + JSON.stringify(payload));
  console.log('[backgroundMessage] Recibida notificación en segundo plano:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
