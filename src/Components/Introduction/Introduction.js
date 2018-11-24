import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import Skills from '../Skills/Skills';
import Bounce from 'react-reveal/Bounce';
import '../../styles/css/Introduction.css';

export default class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <Container>
          <Bounce left>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <h3>Hi, I'm Jordan.  Nice to meet you.</h3>
                <p>I am an aspiring full-stack web developer.  Since beginning my journey as a javascript developer nearly three years ago, I have worked for non-profits, worked with medium size businesses, and even have a couple of applications of my own!</p>
            </Col>
          </Bounce>
        </Container>
        <Skills />
      </div>
    )
  }
}
