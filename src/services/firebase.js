import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCzOZq-QuWxIWeuLTyC7GKQm457cmt3_fc",
  authDomain: "signal-clone-9b31c.firebaseapp.com",
  projectId: "signal-clone-9b31c",
  storageBucket: "signal-clone-9b31c.appspot.com",
  messagingSenderId: "812557027503",
  appId: "1:812557027503:web:9669cfec6d8cfc669d2c5a"
};

const fire = firebase.initializeApp(firebaseConfig)

const db = fire.firestore()
const auth = fire.auth()

export { db, auth }
export default firebase
