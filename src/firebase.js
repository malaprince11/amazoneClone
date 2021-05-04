import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA_Jc3OZtRhj6cAzQ7QysLm_g8zX5HL0xM",
    authDomain: "ecommerce-24d1f.firebaseapp.com",
    databaseURL:"https://ecommerce-24d1f.firebaseio.com",
    projectId: "ecommerce-24d1f",
    storageBucket: "ecommerce-24d1f.appspot.com",
    messagingSenderId: "369545857068",
    appId: "1:369545857068:web:fe35aba4a58f1c2e91a989",
    measurementId: "G-NGC2WX16FP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db, auth};