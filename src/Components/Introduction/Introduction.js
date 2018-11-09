import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import Skills from '../Skills/Skills';
import '../../styles/css/Introduction.css';

export default class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <Container>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <h3>Hi, I'm Jordan.  Nice to meet you.</h3>
                <p>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually improving my chops.</p>
            </Col>
        </Container>
        <Skills />
      </div>
    )
  }
}
