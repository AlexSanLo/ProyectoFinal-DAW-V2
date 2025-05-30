importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA8EmogduR2W8d9ht3q4VyM4J-JUTvwBd8",
  authDomain: "noteeasy-7080d.firebaseapp.com",
  projectId: "noteeasy-7080d",
  messagingSenderId: "982678504604",
  appId: "1:982678504604:web:efbc601021106951319959",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje recibido en background ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icono.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
