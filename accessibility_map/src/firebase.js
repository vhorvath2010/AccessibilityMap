import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDS1qBUb0lD0Oh_c5S7r9H0lovndr_MQ3Q",
    authDomain: "accessibilitymap-7e71b.firebaseapp.com",
    projectId: "accessibilitymap-7e71b",
    storageBucket: "accessibilitymap-7e71b.appspot.com",
    messagingSenderId: "281075792467",
    appId: "1:281075792467:web:2229748e431e16fceda4a6",
    measurementId: "G-39QRL73LZF"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase;