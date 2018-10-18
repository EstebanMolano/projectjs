import firebase from 'firebase/app';
import 'firebase/firestore';



const config = {
    apiKey: "AIzaSyB6w9Kx9FGomkGnFyzR-XUsUyfCcQ3T2vQ",
    authDomain: "todo-13259.firebaseapp.com",
    databaseURL: "https://todo-13259.firebaseio.com",
    projectId: "todo-13259",
    storageBucket: "todo-13259.appspot.com",
    messagingSenderId: "674917828578"
  };
  firebase.initializeApp(config);
  export default firebase;

