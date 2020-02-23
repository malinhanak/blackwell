import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

const firebaseConfig = {...};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
