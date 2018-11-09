import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Introduction from './Components/Introduction/Introduction';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="blackbackground">
        <Header />
        <Introduction />
        <Projects /> 
        <Resume />
      </div>
    );
  }
}

export default App;
