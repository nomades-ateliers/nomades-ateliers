import firebaseDefault from 'firebase';

// define extended interface
interface INomadeFirebase {
  app: firebaseDefault.app.App;
  auth: () => firebaseDefault.auth.Auth;
  database: () => firebaseDefault.database.Database;
  initializeApp: (params: any) => firebaseDefault.app.App; 
  licence: string;
}

const nomadesFirebase = <T>(lib: T & Partial<INomadeFirebase>): INomadeFirebase => {
  // extract data function
  const {app = null, database = null, auth = null} = lib || {};
  // create global propreties
  const user =  null;
  const project = 'default';
  const displayError = (message: string) => {
    return console.log(message);
  }
  // handle missing script import
  if (!app) return this.displayError(`La librairie Firebase.app n'est pas disponible.`);
  if (!auth) return this.displayError(`Le module Firebase.auth n'est pas disponible.`);
  if (!database) return this.displayError(`Le module Firebase.database n'est pas disponible.`);
  // define firebase Nomades config
  const firebaseConfig = {
    apiKey: "AIzaSyA68e6iQ1abizYOglsGXYQD1N4K9jfZen8",
    authDomain: "students-fb75b.firebaseapp.com",
    databaseURL: "https://students-fb75b.firebaseio.com",
    projectId: "students-fb75b",
    storageBucket: "",
    messagingSenderId: "122422675990",
    appId: "1:122422675990:web:082edf96bf9738b5"
  };
  // define Nomade Firebase Wrapper
  const nFirebase: INomadeFirebase = {
    app,
    auth,
    // extend database fonctionality
    database: () => (<firebaseDefault.database.Database>{
      ...database,
      ref: (scoop) => {
        return (scoop) ? database().ref('students').child(this.user).child(this.project).child(scoop) : database().ref('students').child(this.user).child(this.project)
      },
    }),
    initializeApp: (params: {user: string, project: string}) => {
      lib.initializeApp(firebaseConfig);
      this.user = params.user;
      if (params.project)
        this.project = params.project;
      return lib.app;
    },
    licence: 'Firebase: Nomades Advenced Technologie',
  };
  // return extended lib
  if(!window) console.log('[INFO]: ', nFirebase.licence, ' (node version)');
  return nFirebase;
}

/**
 * Browser version:
 * auto extend firebase lib with Nomade wrapper
 */
if (window && firebase) {
  // create wrapped lib
  var nFirebase: INomadeFirebase = nomadesFirebase({...firebase});
  // overide window.firebase
  window['firebase'] = nFirebase;
  // overide global variable
  var firebase = nFirebase
  // print licence
  console.log('[INFO]: ', firebase.licence, ' (browser version)');
}
// Handle unsexisting firebase lib
if(!firebase) {
  console.error(`Error: La librairie Firbase n'est pas disponible`)
}