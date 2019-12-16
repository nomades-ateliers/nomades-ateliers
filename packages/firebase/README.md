# `@nomades/firebase`

> Libraire utilisée pour les formations et workshop Nomades Ateliers.

## Usage

### Basic HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Firebase Database Student</title>
  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.3.0/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/6.3.0/firebase-database.js"></script>
  <!-- import Nomades Atelier Firebase Wrapper -->
  <script src="https://rawcdn.githack.com/nomades-ateliers/nomades-ateliers/048024775b0dd571a3152a470964cd7e85b1e49d/packages/firebase/lib/firebase.js"></script>
</head>
<body>
  <app></app>
  <script>
      // set firebase config object
      firebase.initializeApp({
        user: '<student-username>',
        project: '<project-name>'
      })
      // using firebase database()
      const db = firebase.database();
      // store new data to specific ref()
      db.ref('test').push({name: 'toto', datetime: Date.now()})
  </script>
</body>
</html>
```

### ES6
```sh
$ npm install --save firebase @nomades-ateliers/firebase
```

```js
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/database';
// import Nomades Atelier Firebase Wrapper
import { nomadesFirebase } from '@nomades-ateliers/firebase-module';
// wrap default Firebase lib with Nomades Ateliers Firebase lib:
firebase = nomadesFirebase(firebase);

// set firebase config object
firebase.initializeApp({
  user: '<student-username>',
  project: '<project-name>'
})
// using firebase auth()
const auth = firebase.auth();
// log current user
console.log('[INFO]: Firebase current user: ', auth.currentUser);
// using firebase database()
const db: firebase.database.Database = firebase.database();
// store new data to specific ref()
db.ref('test').push({name: 'toto', datetime: Date.now()})

```


### Typescript
```sh
$ npm install --save firebase @nomades-ateliers/firebase
```

```ts
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/database';
// import Nomades Atelier Firebase Wrapper
import { nomadesFirebase } from '@nomades-ateliers/firebase-module';
// wrap default Firebase lib with Nomades Ateliers Firebase lib:
(firebase as any) = <firebase.app.App>nomadesFirebase((firebase as any));

// set firebase config object
firebase.initializeApp({
  user: '<student-username>',
  project: '<project-name>'
})
// using firebase auth()
const auth: firebase.auth.Auth = firebase.auth();
// log current user
console.log('[INFO]: Firebase current user: ', auth.currentUser);
// using firebase database()
const db: firebase.database.Database = firebase.database();
// store new data to specific ref()
db.ref('test').push({name: 'toto', datetime: Date.now()})

```
