"use strict";
exports.__esModule = true;
var firebase = require("firebase/app");
// Add the Firebase services that you want to use
require("firebase/auth");
require("firebase/firestore");
// Nomades Atelier Firebase Wrapper
require("../lib/firebase");
// set firebase config object
firebase.initializeApp({
    user: '<student-username>',
    project: '<project-name>'
});
// using firebase database()
var db = firebase.database();
// store new data to specific ref()
db.ref('test').push({ name: 'toto', datetime: Date.now() });
