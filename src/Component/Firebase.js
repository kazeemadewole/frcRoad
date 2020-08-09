 import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({  
  apiKey: "AIzaSyAErfswHrVC7wB2OuZ76IXwCmTHcaKwkAQ",
  authDomain: "frsc-nurtw.firebaseapp.com",
  databaseURL: "https://frsc-nurtw.firebaseio.com",
  projectId: "frsc-nurtw",
  storageBucket: "frsc-nurtw.appspot.com",
  messagingSenderId: "952842634616",
  appId: "1:952842634616:web:76e76e711fef1872f1748d",
  measurementId: "G-D9442XMLMM"
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth(); 
