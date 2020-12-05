import React from 'react';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" component={ Login }/>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
