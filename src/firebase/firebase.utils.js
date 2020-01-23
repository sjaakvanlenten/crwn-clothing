import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB7Z6P_MpE8VVq5Bji4QB0xPABw98EGJtQ",
    authDomain: "crwn-db-9810f.firebaseapp.com",
    databaseURL: "https://crwn-db-9810f.firebaseio.com",
    projectId: "crwn-db-9810f",
    storageBucket: "crwn-db-9810f.appspot.com",
    messagingSenderId: "661480746641",
    appId: "1:661480746641:web:42bce7f42d2bf47ae5d930",
    measurementId: "G-13GSDVP39S"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
