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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
