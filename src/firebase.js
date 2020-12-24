import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZTnOcONAOmzPSepQtsaRJsfTj3tVwEoo",
    authDomain: "clone-9ddae.firebaseapp.com",
    projectId: "clone-9ddae",
    storageBucket: "clone-9ddae.appspot.com",
    messagingSenderId: "666638328311",
    appId: "1:666638328311:web:5b624ee513dd15228f8ef2",
    measurementId: "G-DV59HVWQ38"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };