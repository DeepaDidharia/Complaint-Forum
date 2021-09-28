import firebase from 'firebase'
require("@firebase/firestore")


 //Add configuration here
 const firebaseConfig = {
  apiKey: "AIzaSyALEYy26F4gJ6l5HP_bTPBhvkPD3oHPRfc",
  authDomain: "pro-71-complaint-form.firebaseapp.com",
  projectId: "pro-71-complaint-form",
  storageBucket: "pro-71-complaint-form.appspot.com",
  messagingSenderId: "539075042835",
  appId: "1:539075042835:web:de1f9331153ee83bffa9e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

