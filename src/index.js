import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAq4PPO0Xp-0U2Qa9lKKvAM5fU8oPrhynk",
  authDomain: "birthday-app-967ba.firebaseapp.com",
  databaseURL: "https://birthday-app-967ba.firebaseio.com",
  projectId: "birthday-app-967ba",
  storageBucket: "birthday-app-967ba.appspot.com",
  messagingSenderId: "514839011667",
  appId: "1:514839011667:web:f987ff7eada6ee7e7541a6",
  measurementId: "G-FYQ1P6S5J9"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
