import React, { Component } from 'react';
import '../../styles/css/Header.css';
import { Container } from 'reactstrap';
import Navigation from './Navbar/Navbar';
import Particles from 'react-particles-js';

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
        <Particles
          params={{
            "particles": {
                "number": {
                    "value": 220,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true
                },
                "move": {
                    "direction": "bottom",
                    "out_mode": "out"
                },
                "line_linked": {
                    "enable": false
                },
                "color": {
                 "value": "#FD5F00" 
                }
              }
          }}
          height="100vh"
          width="100vw"  />
      </div>
    );
  }
}

export default Header;
