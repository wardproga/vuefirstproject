// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBqJNwZUZ63XrfInfs6PVP7c6jvL64qYT8",

  authDomain: "myprojectvuejs-26c7a.firebaseapp.com",

  databaseURL: "https://myprojectvuejs-26c7a-default-rtdb.firebaseio.com",

  projectId: "myprojectvuejs-26c7a",

  storageBucket: "myprojectvuejs-26c7a.appspot.com",

  messagingSenderId: "650361944288",

  appId: "1:650361944288:web:fe3f96631ba5c68e3df885",

  measurementId: "G-CEX0DW3CQW"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default Firebase;