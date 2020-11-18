import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCKOFIP0FJQ4w6ap8uol_-WJTGAZZ7y7DQ",
  authDomain: "caraseed-b871a.firebaseapp.com",
  databaseURL: "https://caraseed-b871a.firebaseio.com",
  projectId: "caraseed-b871a",
  storageBucket: "caraseed-b871a.appspot.com",
  messagingSenderId: "523815581637",
  appId: "1:523815581637:web:4600f01a4a4b84b8ca7dac",
  measurementId: "G-62TD5XFCZE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db,auth};
export default firebaseApp;