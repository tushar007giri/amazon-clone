import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";


function App() {
  return (
    <Router>
      <div className="app">
       <Switch>
        <Route path="/checkout" >
        <Header></Header>

          <Checkout></Checkout>
        </Route>
        <Route path="/login">
          <Login></Login>
o        </Route>
        <Route path="/">
         <Header></Header>
          <Home></Home>
        </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
