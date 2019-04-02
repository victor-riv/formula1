import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCoOMjysS92-W0oiKJ7A5QxMjfV3vKyTIY",
  authDomain: "formula-one-ff3cd.firebaseapp.com",
  databaseURL: "https://formula-one-ff3cd.firebaseio.com",
  projectId: "formula-one-ff3cd",
  storageBucket: "formula-one-ff3cd.appspot.com",
  messagingSenderId: "382860693054"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const driversRef = databaseRef.child("drivers");
