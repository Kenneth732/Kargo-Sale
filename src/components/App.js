import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from "./NavBar";
import Contact from "./Contact";
import SignUp from "./SignUp";
import Home from "./Home";

function App() {
  return (
    <div >
      <NavBar />
      <Switch>
        <Route path="/contact">
          <Contact  />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
