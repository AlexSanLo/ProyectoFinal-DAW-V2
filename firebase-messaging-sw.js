// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA8EmogduR2W8d9ht3q4VyM4J-JUTvwBd8",
  authDomain: "noteeasy-7080d.firebaseapp.com",
  projectId: "noteeasy-7080d",
  storageBucket: "noteeasy-7080d.firebaseapp.com",
  messagingSenderId: "982678504604",
  appId: "1:982678504604:web:efbc601021106951319959",
  measurementId: "G-4FHPK9T92Y"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Mensaje recibido en segundo plano:", payload);
});
