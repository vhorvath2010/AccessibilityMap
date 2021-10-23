import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDS1qBUb0lD0Oh_c5S7r9H0lovndr_MQ3Q",
  authDomain: "accessibilitymap-7e71b.firebaseapp.com",
  projectId: "accessibilitymap-7e71b",
  storageBucket: "accessibilitymap-7e71b.appspot.com",
  messagingSenderId: "281075792467",
  appId: "1:281075792467:web:2229748e431e16fceda4a6",
  measurementId: "G-39QRL73LZF"
})

const firestore = firebase.fiestore()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

let id = ""
const docRef = doc(db, "vendors", id);
const docSnap = await getDoc(docRef);
function getStore() {
  
}

export default App;
