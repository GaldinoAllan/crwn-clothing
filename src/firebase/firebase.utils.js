import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const REACT_APP_API_KEY = "AIzaSyBEiH36LDfBrI-FgQ9EF7eNYHoUYgjYHyU";
const REACT_APP_AUTH_DOMAIN = "crwn-clothing-data-base.firebaseapp.com";
const REACT_APP_DATABASE_URL = "https://crwn-clothing-data-base.firebaseio.com";
const REACT_APP_PROJECT_ID = "crwn-clothing-data-base";
const REACT_APP_STORAGE_BUCKET = "crwn-clothing-data-base.appspot.com";
const REACT_APP_MESSAGING_SENDER_ID = "979213854379";
const REACT_APP_APP_ID = "1:979213854379:web:e838886b7a7137430d79ee";
const REACT_APP_MEASUREMENT_ID = "G-EDTZHNGJH5";

const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID
};

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
      })
    } catch (error) {
      console.log('Error creating user', error.message);
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