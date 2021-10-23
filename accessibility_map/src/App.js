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
import { getVendors } from './services/getVendors';
import resultsPage from './pages/resultsPage';
import HomePage from './pages/home/home';

function App() {
  const [vendors, setVendors] = useState([]);

  const ref = firebase.firestore().collection('vendors');

  useEffect(() => {
    // Placeholder values
    const center = { lat: 1.0, long: 10};
    const radius = 100000000;
    setVendors(getVendors(center, radius));
    console.log(vendors['restaurant'][0]);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/resultsPage">
          <resultsPage />
        </Route>
        <Route path="/users">
          <Users />
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
