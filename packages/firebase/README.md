# `@nomades/firebase`

> Libraire utilisée pour les formations et workshop Nomades Ateliers.

## Usage

### ES6
```sh
$ npm install --save firebase firebase/auth firebase/database @nomades-ateliers/firebase
```

```js
// !!!!!!!!!!!!!!!!!!!!!!!
// ONLY import Nomades Atelier Wrapper for Firebase. 
// !!!!!!!!!!!!!!!!!!!!!!! 
import { firebase } from '@nomades-ateliers/firebase';
// set firebase config object
firebase.initializeApp({
  user: '<student-username>', // your student username
  project: '<project-name>' // your current project name
})
// using firebase auth()
const auth = firebase.auth();
// log current user
console.log('[INFO]: Firebase current user: ', auth.currentUser);
// using firebase database()
const db = firebase.database();
// store new data to specific ref()
db.ref('test').push({name: 'toto', datetime: Date.now()})

```


### Typescript
```sh
$ npm install --save firebase @nomades-ateliers/firebase
```

```ts
// !!!!!!!!!!!!!!!!!!!!!!!
// ONLY import Nomades Atelier Wrapper for Firebase. 
// !!!!!!!!!!!!!!!!!!!!!!! 
import { firebase } from '@nomades-ateliers/firebase';
// set firebase config object
firebase.initializeApp({
  user: '<student-username>', // your student username
  project: '<project-name>' // your current project name
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
