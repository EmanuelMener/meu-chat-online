import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDKDxrMTiIcBkht4d1R_M6ZY_8yliomlO0",
    authDomain: "chat-app-14b9b.firebaseapp.com",
    projectId: "chat-app-14b9b",
    storageBucket: "chat-app-14b9b.appspot.com",
    messagingSenderId: "44798981443",
    appId: "1:44798981443:web:d5baf0cd5afcb06d99abf6"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider };