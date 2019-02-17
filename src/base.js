import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAJYFTLfKPisPPzvWuyUy_7C5gnz3lsbyw',
  authDomain: 'prithvi-8baa0.firebaseapp.com',
  databaseURL: 'https://prithvi-8baa0.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// defaull export
export default base;
