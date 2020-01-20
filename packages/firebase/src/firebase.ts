// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebaseDefault from "firebase/app";
// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// define extended interface
// declare var process: any;
interface INomadeFirebase {
  app: any;
  auth: () => firebaseDefault.auth.Auth;
  database: () => firebaseDefault.database.Database;
  initializeApp: (params: any) => void; 
  licence: string;
}
const nFbUtils = {
  displayError: (message: string) => {
    return (console.log(message), null);
  },
  user: 'nomade-default',
  project: 'default'
};

const nomadesFirebase = <T>(lib: Partial<T & INomadeFirebase>) => {
  // extract data function
  const {app = null, database = null, auth = null} = lib || {};
  // create global propreties
  const fb = nFbUtils;
  // handle missing script import
  if (!app) throw fb.displayError(`La librairie Firebase.app n'est pas disponible.`);
  if (!auth) throw fb.displayError(`Le module Firebase.auth n'est pas disponible.`);
  if (!database) throw fb.displayError(`Le module Firebase.database n'est pas disponible.`);
  if (!lib || lib === undefined) throw fb.displayError(`La library Firebase n'est pas disponible.`);
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
    database: () => <any>({
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
  // if(typeof process === 'object' && process + '' === '[object process]'){
  //   console.log('[INFO]: ', (nFirebase && nFirebase.licence) ? nFirebase.licence : '', ' (node version)');
  // }
  return (nFirebase as Partial<INomadeFirebase>);
}

// wrap default Firebase lib with Nomades Ateliers Firebase lib:
export const firebase = (() => {
  // Handle unsexisting firebase lib
  if(!firebaseDefault) {
    console.error(`Error: La librairie Firbase n'est pas disponible.`)
    console.error(`       Essayez : "$ npm i firebase --save" pour installer la librairie firebase dasn votre projet `)
    return;
  }
  // create wrapped lib
  const nFirebase = nomadesFirebase(firebaseDefault);
  if (!nFirebase) return console.log('Error: FIrebase implementation error...');
  // overide window.firebase
  if (window) (window as any)['firebase'] = nFirebase;
  // overide global variable
  var firebase = nFirebase
  // print licence
  console.log('[INFO]:', nFirebase.licence, ` (browser version)`);
  return firebase;
})();