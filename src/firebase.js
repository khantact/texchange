// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"
import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBczvJgiqCWDyERGXEnoBdlxofPtxvFGXY",
  authDomain: "texchange-70636.firebaseapp.com",
  databaseURL:"https://texchange-70636-default-rtdb.firebaseio.com/",
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
const db = firebase.database();
export var loggedIn;

export function signUp(email, password,username){
  firebase.auth().createUserWithEmailAndPassword(email, password)
  
  firebase.auth().onAuthStateChanged( user =>{
    if (user){
      writeData(email, username, user.uid)
    }
  })
  
}

export function getUserId(){
  return firebase.auth().currentUser.uid;
}

export function writeData(email, username, userId){
  db.ref('users').child(userId).set({
        user: username, 
        email : email
  });
}

export function signIn(email, password){
  loggedIn = true;
  return firebase.auth().signInWithEmailAndPassword(email,password)

}

export function signOut(){
  firebase.auth().onAuthStateChanged( user =>{
    if (!user){
      loggedIn = false;
    }
  })
  return firebase.auth().signOut()
}