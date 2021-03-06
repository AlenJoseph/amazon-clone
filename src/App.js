import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <h1>checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
              );
}

export default App;
