import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAyP_7-TvfHs7F8S4uN-L__X_YyJ3HIUZo",
  authDomain: "event-planner-39956.firebaseapp.com",
  databaseURL: "https://event-planner-39956.firebaseio.com",
  projectId: "event-planner-39956",
  storageBucket: "event-planner-39956.appspot.com",
  messagingSenderId: "171952492672",
  appId: "1:171952492672:web:eec4bbeb4ea694642ad665",
  measurementId: "G-NKPJXT4PLS"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
