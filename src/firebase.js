import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyAZkA9l5-4oLfeCwIMLrHWeI-aaVrL7g3M',
  authDomain: 'dicetrax-85512.firebaseapp.com',
  databaseURL: 'https://dicetrax-85512.firebaseio.com',
  projectId: 'dicetrax-85512',
  storageBucket: 'dicetrax-85512.appspot.com',
  messagingSenderId: '940846095794',
  appId: '1:940846095794:web:20bbaef02d1972240198ab',
  measurementId: 'G-2NJ7VQKDCZ',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
