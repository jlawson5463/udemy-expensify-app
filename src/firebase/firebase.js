import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBuSkpjVW_9Pa1aRI5ZldYR9ymGlUhfEM4",
  authDomain: "expensify-52be9.firebaseapp.com",
  databaseURL: "https://expensify-52be9.firebaseio.com",
  projectId: "expensify-52be9",
  storageBucket: "expensify-52be9.appspot.com",
  messagingSenderId: "900522076511"
};
firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default }; 