var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _this = this;
var nomadesFirebase = function (lib) {
    var _a = lib || {}, _b = _a.app, app = _b === void 0 ? null : _b, _c = _a.database, database = _c === void 0 ? null : _c, _d = _a.auth, auth = _d === void 0 ? null : _d;
    var user = null;
    var project = 'default';
    var displayError = function (message) {
        console.log(message);
        return {
            app: app,
            auth: function () { return auth; },
            database: function () { return (__assign({}, database, { ref: function (scoop) {
                    return (scoop) ? database().ref('students').child(_this.user).child(_this.project).child(scoop) : database().ref('students').child(_this.user).child(_this.project);
                } })); },
            initializeApp: function (params) {
                lib.initializeApp(firebaseConfig);
                _this.user = params.user;
                if (params.project)
                    _this.project = params.project;
            },
            licence: 'Firebase: Nomades Advenced Technologie'
        };
    };
    // define config
    var firebaseConfig = {
        apiKey: "AIzaSyA68e6iQ1abizYOglsGXYQD1N4K9jfZen8",
        authDomain: "students-fb75b.firebaseapp.com",
        databaseURL: "https://students-fb75b.firebaseio.com",
        projectId: "students-fb75b",
        storageBucket: "",
        messagingSenderId: "122422675990",
        appId: "1:122422675990:web:082edf96bf9738b5"
    };
    // handle missing script import
    if (!app)
        return _this.displayError("La librairie Firebase.app n'est pas disponible.");
    if (!auth)
        return _this.displayError("Le module Firebase.auth n'est pas disponible.");
    if (!database)
        return _this.displayError("Le module Firebase.database n'est pas disponible.");
    var nFirebase = {
        app: app,
        auth: function () { return auth; },
        database: function () { return (__assign({}, database, { ref: function (scoop) {
                return (scoop) ? database().ref('students').child(_this.user).child(_this.project).child(scoop) : database().ref('students').child(_this.user).child(_this.project);
            } })); },
        initializeApp: function (params) {
            lib.initializeApp(firebaseConfig);
            _this.user = params.user;
            if (params.project)
                _this.project = params.project;
        },
        licence: 'Firebase: Nomades Advenced Technologie',
    };
    window['firebase'] = nFirebase;
    return nFirebase;
};
if (firebase) {
    var firebase = nomadesFirebase(__assign({}, firebase));
    console.log(firebase.licence);
}
else {
    console.error("Error: La librairie Firbase n'est pas disponible");
}
//# sourceMappingURL=firebase.js.map