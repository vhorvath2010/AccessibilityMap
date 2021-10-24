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
import Vendor from './pages/Vendor/vendor'
import VendorPopup from './components/vendorPopup';
import GalleyPopup from './components/galleryPopup';

import { getVendors } from './services/getVendors';
import { getVendorFromID } from './services/getVendorFromID';



function App() {
  const [vendors, setVendors] = useState();
  const [center, setCenter] = useState();
  const [locationText, setLocationText] = useState();

  const ref = firebase.firestore().collection('vendors');

  const [addVendorOpen, setAddVendorOpen] = useState(false);

  useEffect(() => {
    if (center != null) {
      // Placeholder values
      const radius = 100000000;
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
  }
  
  function handleAddVendorClickCallback() {
    setAddVendorOpen(true);
  }

  function handleAddVendorCloseCallback() {
    setAddVendorOpen(false);
  }

  return (
    <Router>
      <Switch>
        <Route path="/test">
          <ResultsPage vendors={vendors} handleAddVendorClickCallback={handleAddVendorClickCallback} updateCenterCallback={updateCenterCallback} updateLocationCallback={updateLocationCallback}/>
          <VendorPopup open={addVendorOpen} handleAddVendorCloseCallback={handleAddVendorCloseCallback}/>
        </Route>
        <Route path="/gallery">
          <GalleyPopup id="w41RobVqDSDSelIqI7FG" />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/vendor">
          <Vendor />
        </Route>
        <Route path="/">
          <HomePage />
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
