import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGGAnxt7K7M6veKv1NwSpiWcvNaKtepSg",
    authDomain: "firechat-573dd.firebaseapp.com",
    projectId: "firechat-573dd",
    storageBucket: "firechat-573dd.appspot.com",
    messagingSenderId: "1001828762594",
    appId: "1:1001828762594:web:4de46c43251452b99f6fbb",
    measurementId: "G-VEM8BM94KN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}