import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyB51tbEV3tuMKj9RS7JB0hI-du2t2HENJc",
  authDomain: "sid-story-hub.firebaseapp.com",
  projectId: "sid-story-hub",
  storageBucket: "sid-story-hub.appspot.com",
  messagingSenderId: "367511702579",
  appId: "1:367511702579:web:a22ed205f7d9b04b586746"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()             