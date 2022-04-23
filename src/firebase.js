import firebase from  'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "texchange-70636.firebaseapp.com",
    projectId: "texchange-70636",
    storageBucket: "texchange-70636.appspot.com",
    messagingSenderId: "191772748536",
    appId: "1:191772748536:web:2e4d7b16bd37e0914ce90d",
    measurementId: "G-E9NF1CZ19T"
})