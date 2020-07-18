import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqDbydYsxhLyF3RNlpyiKP-iw55oKP9aY",
    authDomain: "crown-db-a81d6.firebaseapp.com",
    databaseURL: "https://crown-db-a81d6.firebaseio.com",
    projectId: "crown-db-a81d6",
    storageBucket: "crown-db-a81d6.appspot.com",
    messagingSenderId: "589202307983",
    appId: "1:589202307983:web:89c13f6bc0476c6ea069fa",
    measurementId: "G-DHX6WV5BRK"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot =  await userRef.get();

    if(!snapShot.exists) {

      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }

    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;