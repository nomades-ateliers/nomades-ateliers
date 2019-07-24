import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
// Nomades Atelier Firebase Wrapper
import '@nomades-ateliers/firebase';

// set firebase config object
firebase.initializeApp({
  user: '<student-username>',
  project: '<project-name>'
})
// using firebase database()
const db = firebase.database();
// store new data to specific ref()
db.ref('test').push({name: 'toto', datetime: Date.now()})