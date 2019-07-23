import * as tslib_1 from "tslib";
var nFbUtils = {
    displayError: function (message) {
        return console.log(message);
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
        return fb.displayError("La librairie Firebase.app n'est pas disponible.");
    if (!auth)
        return fb.displayError("Le module Firebase.auth n'est pas disponible.");
    if (!database)
        return fb.displayError("Le module Firebase.database n'est pas disponible.");
    if (!lib || lib === undefined)
        return fb.displayError("La library Firebase n'est pas disponible.");
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
        licence: 'Firebase: Nomades Advenced Technologie',
    };
    // return extended lib
    if (!window)
        console.log('[INFO]: ', (nFirebase && nFirebase.licence) ? nFirebase.licence : '', ' (node version)');
    return nFirebase;
};
/**
 * Browser version:
 * auto extend firebase lib with Nomade wrapper
 */
if (window && firebase) {
    // create wrapped lib
    var nFirebase = nomadesFirebase(tslib_1.__assign({}, firebase));
    // overide window.firebase
    window['firebase'] = nFirebase;
    // overide global variable
    var firebase = nFirebase;
    // print licence
    console.log('[INFO]: ', firebase.licence, ' (browser version)');
}
// Handle unsexisting firebase lib
if (!firebase) {
    console.error("Error: La librairie Firbase n'est pas disponible");
}
//# sourceMappingURL=firebase.js.map