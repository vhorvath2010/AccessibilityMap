import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import firebase from './firebase';

function App() {
  const [vendors, setVendors] = useState([]);

  const ref = firebase.firestore().collection('vendors');
  console.log(ref);

  function getVendors() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach(element => {
        items.push(element.data());
      });
      setVendors(items);
    })
  }
  useEffect(() => {
    getVendors();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vendors</h1>
        {vendors.map((vendor) => (
          <div key={vendor.id}>
            <h2>{vendor.name}</h2>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
