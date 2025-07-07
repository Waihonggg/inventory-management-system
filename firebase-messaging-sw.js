importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDo1-y0Vj4XTQeeEUQK_6Y2wqDs94TOAX0",
  authDomain: "inventory-c3bac.firebaseapp.com",
  projectId: "inventory-c3bac",
  storageBucket: "inventory-c3bac.firebasestorage.app",
  messagingSenderId: "261015083855",
  appId: "1:261015083855:web:e167f359928eb8ed8cc33a",
  measurementId: "G-V744486L78"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: '/icon.png'
    }
  );
});
