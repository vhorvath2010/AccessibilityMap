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

import { getVendors } from './services/getVendors';



function App() {
  const [vendors, setVendors] = useState();
  const [center, setCenter] = useState();
  const [locationText, setLocationText] = useState();

  const ref = firebase.firestore().collection('vendors');

  useEffect(() => {
    if (center != null) {
      // Placeholder values
      const radius = 100000000;
      getVendors(center, radius).then(vendors => {
        setVendors(vendors);
        console.log(vendors); 
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

  return (
    <Router>
      <Switch>
        <Route path="/test">
          <ResultsPage vendors={vendors} updateCenterCallback={updateCenterCallback} updateLocationCallback={updateLocationCallback}/>
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
