import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpL82D47dXdoXUPp6DhIoSQOi-JhK_dv4",
  authDomain: "clone-ea560.firebaseapp.com",
  projectId: "clone-ea560",
  storageBucket: "clone-ea560.appspot.com",
  messagingSenderId: "317214259772",
  appId: "1:317214259772:web:edf6c4ccdc4d5b89e86139",
  measurementId: "G-QJD2BV3R55"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase"

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBpL82D47dXdoXUPp6DhIoSQOi-JhK_dv4",
//   authDomain: "clone-ea560.firebaseapp.com",
//   projectId: "clone-ea560",
//   storageBucket: "clone-ea560.appspot.com",
//   messagingSenderId: "317214259772",
//   appId: "1:317214259772:web:edf6c4ccdc4d5b89e86139",
//   measurementId: "G-QJD2BV3R55"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firebasestore();
// const auth = firebase.auth();

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { db, auth };

