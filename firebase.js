import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCYqv4BEPkTSGp9ZmSWQeAgOMwEBJhs574",
    authDomain: "blood-bank-app-7ecec.firebaseapp.com",
    projectId: "blood-bank-app-7ecec",
    storageBucket: "blood-bank-app-7ecec.appspot.com",
    messagingSenderId: "679888982682",
    appId: "1:679888982682:web:5ea1f2972dc6e7a4bb4523"
  };

let app;
if(firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export {db,auth, storage};