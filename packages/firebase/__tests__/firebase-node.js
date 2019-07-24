"use strict";
exports.__esModule = true;
// import Firebase
var firebase = require("firebase/app");
// Add the Firebase services that you want to use
require("firebase/auth");
require("firebase/database");
// Nomades Ateliers Firebase Wrapper
var firebase_module_1 = require("../src/firebase-module");
// init Firebase lib:
firebase = firebase_module_1.nomadesFirebase(firebase);
// set firebase config object
firebase.initializeApp({
    user: '<student-username>',
    project: '<project-name>'
});
// using firebase auth()
var auth = firebase.auth();
// log current user
console.log('[INFO]: Firebase current user: ', auth.currentUser);
// using firebase database()
var db = firebase.database();
// store new data to specific ref()
db.ref('test').push({ name: 'toto', datetime: Date.now() });
