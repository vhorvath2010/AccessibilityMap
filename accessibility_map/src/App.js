import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import firebase from './firebase';

import resultsPage from './pages/resultsPage';


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
    <Router>
      <Switch>
        <Route path="/resultsPage">
          <resultsPage />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
