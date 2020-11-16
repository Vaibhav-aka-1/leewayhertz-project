import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBxfPnCTzTbNEsZTKKcQ6QnM8emiMuI-Kc",
    authDomain: "crwn-db-764ef.firebaseapp.com",
    databaseURL: "https://crwn-db-764ef.firebaseio.com",
    projectId: "crwn-db-764ef",
    storageBucket: "crwn-db-764ef.appspot.com",
    messagingSenderId: "593931824225",
    appId: "1:593931824225:web:55336558d93822f2c60e20",
    measurementId: "G-4C2HTJ96RK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;