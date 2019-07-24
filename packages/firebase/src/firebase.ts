// import * as firebaseDefault from 'firebase';

// define extended interface
declare var process: any;
interface INomadeFirebase {
  app: any;
  auth: () => any;
  database: () => any;
  initializeApp: (params: any) => any; 
  licence: string;
}
const nFbUtils = {
  displayError: (message: string) => {
    return console.log(message);
  },
  user: 'nomade-default',
  project: 'default'
};

const nomadesFirebase = <T>(lib: T & INomadeFirebase): T | void => {
  // extract data function
  const {app = null, database = null, auth = null} = lib || {};
  // create global propreties
  const fb = nFbUtils;
  // handle missing script import
  if (!app) return fb.displayError(`La librairie Firebase.app n'est pas disponible.`);
  if (!auth) return fb.displayError(`Le module Firebase.auth n'est pas disponible.`);
  if (!database) return fb.displayError(`Le module Firebase.database n'est pas disponible.`);
  if (!lib || lib === undefined) return fb.displayError(`La library Firebase n'est pas disponible.`);
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
  const nFirebase = {
    app,
    auth,
    // extend database fonctionality
    database: () => ({
      ...database,
      ref: (scoop: string) => {
        return (scoop)
          ? database().ref('students').child(fb.user).child(fb.project).child(scoop)
          : database().ref('students').child(fb.user).child(fb.project)
      },
    }),
    initializeApp: (params: {user: string, project: string}) => {
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
  if(typeof process === 'object' && process + '' === '[object process]'){
    console.log('[INFO]: ', (nFirebase && nFirebase.licence) ? nFirebase.licence : '', ' (node version)');
  }
  return (nFirebase as unknown as T);
}

/**
 * Browser version:
 * auto extend firebase lib with Nomade wrapper
 */
if (window && firebase) {
  // create wrapped lib
  var nFirebase: any = nomadesFirebase({...firebase});
  // overide window.firebase
  (window as any)['firebase'] = nFirebase;
  // overide global variable
  var firebase = nFirebase
  // print licence
  console.log('[INFO]:', firebase.licence, ' (browser version)');
}
// Handle unsexisting firebase lib
if(!firebase) {
  console.error(`Error: La librairie Firbase n'est pas disponible`)
}