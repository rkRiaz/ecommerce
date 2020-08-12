import * as firebase from 'firebase/app'
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBlfObrTX55lcHsqgiAgxVbLv1ZU9rRBgI",
    authDomain: "personal-project-ecc9c.firebaseapp.com",
    databaseURL: "https://personal-project-ecc9c.firebaseio.com",
    projectId: "personal-project-ecc9c",
    storageBucket: "personal-project-ecc9c.appspot.com",
    messagingSenderId: "817283913441",
    appId: "1:817283913441:web:634b057bdbdf4ea9f0c9a0",
    measurementId: "G-GD1DGD2VXV"
  };

  firebase.initializeApp(firebaseConfig)

 const storage = firebase.storage()
 
 export const storageRef = storage.ref()




