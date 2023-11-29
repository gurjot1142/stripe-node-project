import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyDXlbTjezucqufFeX0yZ8SD_Oq0XTz2FWE",
    authDomain: "stripe-payment-project-d07bf.firebaseapp.com",
    projectId: "stripe-payment-project-d07bf",
    storageBucket: "stripe-payment-project-d07bf.appspot.com",
    messagingSenderId: "763244697273",
    appId: "1:763244697273:web:4ca37d395262be29c7ad68",
    measurementId: "G-MLVLRHVVQW"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase