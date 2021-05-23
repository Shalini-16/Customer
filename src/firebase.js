


import  firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB1sp7wnNGYx28WTOX19lAHg-INkbMdbIc",
  authDomain: "database-1d5f9.firebaseapp.com",
  projectId: "database-1d5f9",
  storageBucket: "database-1d5f9.appspot.com",
  messagingSenderId: "749889947252",
  appId: "1:749889947252:web:25609a940146c0c07b3321"
};
// Initialize Firebase
 var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
