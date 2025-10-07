import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7V8jd6_MvsSunUoIfgtqnfXKXKQrnyDI",
  authDomain: "internloop.firebaseapp.com",
  databaseURL: "https://internloop-default-rtdb.firebaseio.com",
  projectId: "internloop",
  storageBucket: "internloop.appspot.com",
  messagingSenderId: "428972548771",
  appId: "1:428972548771:web:4c27cf96755a991b3bd516",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
