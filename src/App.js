import React, { Component } from 'react';
import Main from './Components/Main/Main';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import './App.css';

class App extends Component {
  render() {
    return (
        <div className="blackbackground">
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/contact" component={Contact}/>
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
