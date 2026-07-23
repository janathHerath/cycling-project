importScripts('https://www.gstatic.com/firebasejs/10.x.x/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.x.x/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: '...',
  authDomain: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
  appId: '...',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background message:', payload);
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title, { body });
});