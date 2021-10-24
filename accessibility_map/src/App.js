import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import firebase from './firebase';

import ResultsPage from './pages/resultsPage/resultsPage';
import HomePage from './pages/home/home';
import AddVendorPopup from './components/addVendorPopup';
import VendorPopup from './components/vendorPopup';

import { getVendors } from './services/getVendors';
import { getVendorFromID } from './services/getVendorFromID';

import { textToCoord } from './services/textToCoord';



function App() {
  const [vendors, setVendors] = useState();
  const [center, setCenter] = useState();
  const [locationText, setLocationText] = useState();
  const [currentID, setCurrentID] = useState();
  const [currentVendor, setCurrentVendor] = useState();

  const ref = firebase.firestore().collection('vendors');

  const [addVendorOpen, setAddVendorOpen] = useState(false);

  useEffect(() => {
    if (center != null) {
      // Placeholder values
      const radius = 100000;
      getVendors(center, radius).then(vendors => {
        setVendors(vendors);
      });
    }
  }, [center]);

  function updateCenterCallback(center) {
    console.log("app page received center");
    setCenter(center);
  }

  function updateLocationCallback(location) {
    console.log("app received updated location");
    setLocationText(location);
    textToCoord(location).then(latlng => {
      setCenter(latlng)
    });
  }
  
  function handleAddVendorClickCallback() {
    setAddVendorOpen(true);
  }

  function handleAddVendorCloseCallback() {
    setAddVendorOpen(false);
  }

  function vendorClickCallback(id) {
    console.log("app received vendor id");
    setCurrentID(id);
    getVendorFromID(id).then(vendors => {
      setCurrentVendor(vendors);
    });
  }

  function handleVendorCloseCallback() {
    setCurrentID(null);
    setCurrentVendor(null);
  }

  return (
    <Router>
      <Switch>
        <Route path="/test">
          <ResultsPage vendors={vendors} center={center} handleAddVendorClickCallback={handleAddVendorClickCallback} updateCenterCallback={updateCenterCallback} updateLocationCallback={updateLocationCallback} vendorClickCallback={vendorClickCallback}/>
          <AddVendorPopup open={addVendorOpen} handleAddVendorCloseCallback={handleAddVendorCloseCallback}/>
          <VendorPopup id={currentID} vendor={currentVendor} handleVendorCloseCallback={handleVendorCloseCallback}/>
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <HomePage updateCenterCallback={updateCenterCallback}/>
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
