import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBF-JAfn0tdWGG6jwghYCwAysQyV0lBDTI",
    authDomain: "note-management.firebaseapp.com",
    databaseURL: "https://note-management.firebaseio.com",
    projectId: "note-management",
    storageBucket: "note-management.appspot.com",
    messagingSenderId: "112504310129",
    appId: "1:112504310129:web:675664f28baef38f"
  };  

  firebase.initializeApp(firebaseConfig);

  export const noteData = firebase.database().ref('NoteOnline');