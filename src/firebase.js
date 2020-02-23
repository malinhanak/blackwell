import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyCAtiKHrJNFWkucSSL0RHDKaZHg3xD_t9U',
  authDomain: 'horse-galore.firebaseapp.com',
  databaseURL: 'https://horse-galore.firebaseio.com',
  projectId: 'horse-galore',
  storageBucket: 'horse-galore.appspot.com',
  messagingSenderId: '999118012215',
  appId: '1:999118012215:web:b0fb454c9502e702e524b2',
  measurementId: 'G-2XGFWKE8XY',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
