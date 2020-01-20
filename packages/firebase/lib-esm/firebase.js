import * as tslib_1 from "tslib";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebaseDefault from "firebase/app";
// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
var nFbUtils = {
    displayError: function (message) {
        return (console.log(message), null);
    },
    user: 'nomade-default',
    project: 'default'
};
var nomadesFirebase = function (lib) {
    // extract data function
    var _a = lib || {}, _b = _a.app, app = _b === void 0 ? null : _b, _c = _a.database, database = _c === void 0 ? null : _c, _d = _a.auth, auth = _d === void 0 ? null : _d;
    // create global propreties
    var fb = nFbUtils;
    // handle missing script import
    if (!app)
        throw fb.displayError("La librairie Firebase.app n'est pas disponible.");
    if (!auth)
        throw fb.displayError("Le module Firebase.auth n'est pas disponible.");
    if (!database)
        throw fb.displayError("Le module Firebase.database n'est pas disponible.");
    if (!lib || lib === undefined)
        throw fb.displayError("La library Firebase n'est pas disponible.");
    // define firebase Nomades config
    var firebaseConfig = {
        apiKey: "AIzaSyA68e6iQ1abizYOglsGXYQD1N4K9jfZen8",
        authDomain: "students-fb75b.firebaseapp.com",
        databaseURL: "https://students-fb75b.firebaseio.com",
        projectId: "students-fb75b",
        storageBucket: "",
        messagingSenderId: "122422675990",
        appId: "1:122422675990:web:082edf96bf9738b5"
    };
    // define Nomade Firebase Wrapper
    var nFirebase = {
        app: app,
        auth: auth,
        // extend database fonctionality
        database: function () { return (tslib_1.__assign({}, database, { ref: function (scoop) {
                return (scoop)
                    ? database().ref('students').child(fb.user).child(fb.project).child(scoop)
                    : database().ref('students').child(fb.user).child(fb.project);
            } })); },
        initializeApp: function (params) {
            fb.user = params.user;
            if (params.project)
                fb.project = params.project;
            if (lib.initializeApp)
                return lib.initializeApp(firebaseConfig);
            return;
        },
        licence: 'Firebase lib extended for Nomades Advenced Technologie',
    };
    console.log('[INFO]: Extending default firebase lib ....');
    // return extended lib
    // if(typeof process === 'object' && process + '' === '[object process]'){
    //   console.log('[INFO]: ', (nFirebase && nFirebase.licence) ? nFirebase.licence : '', ' (node version)');
    // }
    return nFirebase;
};
// wrap default Firebase lib with Nomades Ateliers Firebase lib:
export var firebase = (function () {
    // Handle unsexisting firebase lib
    if (!firebaseDefault) {
        console.error("Error: La librairie Firbase n'est pas disponible.");
        console.error("       Essayez : \"$ npm i firebase --save\" pour installer la librairie firebase dasn votre projet ");
        return;
    }
    // create wrapped lib
    var nFirebase = nomadesFirebase(firebaseDefault);
    if (!nFirebase)
        return console.log('Error: FIrebase implementation error...');
    // overide window.firebase
    if (window)
        window['firebase'] = nFirebase;
    // overide global variable
    var firebase = nFirebase;
    // print licence
    console.log('[INFO]:', nFirebase.licence, ' (browser version)');
    return firebase;
})();
//# sourceMappingURL=firebase.js.map