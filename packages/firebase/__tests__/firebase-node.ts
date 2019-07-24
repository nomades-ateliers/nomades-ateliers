// import Firebase
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/database';
// Nomades Ateliers Firebase Wrapper
import { nomadesFirebase } from '../src/firebase-module';

// init Firebase lib:
(firebase as any) = <firebase.app.App>nomadesFirebase((firebase as any));
// set firebase config object
firebase.initializeApp({
  user: '<student-username>',
  project: '<project-name>'
});
// using firebase auth()
const auth: firebase.auth.Auth = firebase.auth();
// log current user
console.log('[INFO]: Firebase current user: ', auth.currentUser);
// using firebase database()
const db: firebase.database.Database = firebase.database();
// store new data to specific ref()
db.ref('test').push({name: 'toto', datetime: Date.now()})