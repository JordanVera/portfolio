
import { Container, Row, Col, Card, CardTitle, CardImg, CardImgOverlay, Button } from 'reactstrap';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import '../../styles/css/Projects.css';

export default function Projects() {
  return (
    <div className="projects">
        <Container>
          <Slide top>
            <h2>My Recent Projects</h2>
          </Slide>
          <Row>
            <Col xs={12} md={6} lg={4}>
                <Fade left cascade>
                    <a href="https://pixelforest.herokuapp.com/#" target="_blank">
                        <Card inverse className="projectCard">
                            <CardImg className="cardImg" height="100%" src={require('../../media/images/analog-camera-hipster-8542.jpg')} alt="Card image cap" />
                            <CardImgOverlay>
                                <CardTitle>Pixel Forest</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </a>
                </Fade>
            </Col>

            <Col xs={12} md={6} lg={4}>
                <Fade bottom cascade>
                  <a href="https://coinfolio-demo.herokuapp.com/" target="_blank">
                    <Card inverse className="projectCard">
                        <CardImg className="cardImg" height="100%" src={require('../../media/images/shutterstock_795136543.jpg')} alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle>Coinfolio</CardTitle>
                        </CardImgOverlay>
                    </Card>
                  </a>
                </Fade>
              </Col>

            <Col xs={12} md={6} lg={4}>
                <Fade right cascade>
                    <Card inverse className="projectCard">
                        <CardImg className="cardImg" height="100%" src={require('../../media/images/newspaper.jpg')} alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle>Coinfolio</CardTitle>
                        </CardImgOverlay>
                     </Card>
                </Fade>
              </Col>
              
          </Row>
          <div className="github">
            <a href="https://github.com/JordanVera" target="_blank"><Button outline className="githubLink" size="lg"><FaGithub /> &nbsp; See My Github</Button></a>
          </div>
        </Container>
    </div>
  )
}
