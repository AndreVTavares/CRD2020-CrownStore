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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;