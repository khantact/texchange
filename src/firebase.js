// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/app";
import "firebase/compat/auth";

import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBczvJgiqCWDyERGXEnoBdlxofPtxvFGXY",
  authDomain: "texchange-70636.firebaseapp.com",
  projectId: "texchange-70636",
  storageBucket: "texchange-70636.appspot.com",
  messagingSenderId: "191772748536",
  appId: "1:191772748536:web:2e4d7b16bd37e0914ce90d",
  measurementId: "G-E9NF1CZ19T"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth(app);


export function signUp(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export function signIn(email, password){
    
}