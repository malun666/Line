import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact render={ (props) => <Redirect to="/app"></Redirect> }></Route>
            <Route path="/app" component={ Home }></Route>
            <Route path="/login" component={ Login }></Route>
            <Route component={ PageNotFound }></Route>
          </Switch>       
        </Router>
      </div>
    );
  }
}

export default App;
