const nomadesFirebase = (lib) => {
  const {app = null, database = null, auth = null} = lib || {};
  const user =  null;
  const project = 'default';
  const displayError = (message) => {
    console.log(message);
    return {
      app,
      auth: () => auth,
      database: () => ({
        ...database,
        ref: (scoop) => {
          return (scoop) ? database().ref('students').child(this.user).child(this.project).child(scoop) : database().ref('students').child(this.user).child(this.project)
        },
      }),
      initializeApp: (params) => {
        lib.initializeApp(firebaseConfig);
        this.user = params.user;
        if (params.project)
          this.project = params.project;
      },
      licence: 'Firebase: Nomades Advenced Technologie'
    }
  }
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
  if (!app) return this.displayError(`La librairie Firebase.app n'est pas disponible.`);
  if (!auth) return this.displayError(`Le module Firebase.auth n'est pas disponible.`);
  if (!database) return this.displayError(`Le module Firebase.database n'est pas disponible.`);

  const nFirebase = {
    app,
    auth: () => auth,
    database: () => ({
      ...database,
      ref: (scoop) => {
        return (scoop) ? database().ref('students').child(this.user).child(this.project).child(scoop) : database().ref('students').child(this.user).child(this.project)
      },
    }),
    initializeApp: (params) => {
      lib.initializeApp(firebaseConfig);
      this.user = params.user;
      if (params.project)
        this.project = params.project;
    },
    licence: 'Firebase: Nomades Advenced Technologie',
  };
  window['firebase'] = nFirebase;
  return nFirebase;
}

if (firebase) {
  var firebase = nomadesFirebase({...firebase});
  console.log(firebase.licence);
}
else {
  console.error(`Error: La librairie Firbase n'est pas disponible`)
}