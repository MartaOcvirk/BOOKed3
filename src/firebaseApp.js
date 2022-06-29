import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCPPy5ngNc3Kv1aJDagCoG_oY6msaWVDfw",
    authDomain: "booked2-1869c.firebaseapp.com",
    projectId: "booked2-1869c",
    storageBucket: "booked2-1869c.appspot.com",
    messagingSenderId: "659200576513",
    appId: "1:659200576513:web:fda5c29a3f97b6cb90c400"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();