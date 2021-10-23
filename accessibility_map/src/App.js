import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import { handleNewVendor } from './services/handleNewVendor';

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
  // useEffect(() => {
  //   getVendors();
  // }, []);

  const inputs = {
    addr: "24 Sussex Drive, Ottawa, ON",
    animal: false,
    asl: false,
    braille: false,
    curb: false,
    mob: false,
    name: "John",
    park: false,
    type: "restaurants"
  };
  
  useEffect(() => {
    handleNewVendor(inputs);}
  , []);

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
