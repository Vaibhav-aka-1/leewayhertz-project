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

  export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;
    const userRef =  firestore.doc(`users/${userAuth.uid}`);  
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,  
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user');
      }
    }
  
    return userRef;

  }


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  

  /*

  import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = { 
  apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
  authDomain: 'crwn-db.firebaseapp.com',
  databaseURL: 'https://crwn-db.firebaseio.com',
  projectId: 'crwn-db',
  storageBucket: 'crwn-db.appspot.com',
  messagingSenderId: '850995411664',
  appId: '1:850995411664:web:7ddc01d597846f65'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


  */