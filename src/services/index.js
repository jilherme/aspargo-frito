import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZwDyanZQhridqxT4QpnIoug67M__qeE0",
  authDomain: "aspargo-frito.firebaseapp.com",
  projectId: "aspargo-frito",
  storageBucket: "aspargo-frito.appspot.com",
  messagingSenderId: "1030667409041",
  appId: "1:1030667409041:web:eb2428bd3f31ea39b7d130",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export { app };
