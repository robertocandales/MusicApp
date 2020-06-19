import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3MAyt-lGjeEAUKozDQPEldIzZ90zkw5U",
  authDomain: "claromusica-b3d26.firebaseapp.com",
  databaseURL: "https://claromusica-b3d26.firebaseio.com",
  projectId: "claromusica-b3d26",
  storageBucket: "claromusica-b3d26.appspot.com",
  messagingSenderId: "472462280138",
  appId: "1:472462280138:web:b30be607f23fb132cf7b33",
  measurementId: "G-XQ58QZRPDS",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
