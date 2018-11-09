import React, { Component } from 'react';
import '../../styles/css/Header.css';
import Navigation from './Navbar/Navbar';
import { Container } from 'reactstrap';
// import Particles from 'react-particles-js';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Navigation />
        <Container className='vertAlignCenter'>
            <h1>Full-stack Web Developer</h1>
            <h3>
            I design and code beautifully simple things, and I love what I do.
            </h3>
        </Container>
        {/* <Particles /> */}
      </div>
    );
  }
}

export default Header;
