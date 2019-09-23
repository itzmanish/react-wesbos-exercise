import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: ''
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// defaull export
export default base;
