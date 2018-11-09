
import { Container, Row, Col, Card, CardTitle, CardImg, CardImgOverlay, Button } from 'reactstrap';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../../styles/css/Projects.css';

export default function Projects() {
  return (
    <div className="projects">
        <Container>
          <h2>My Recent Projects</h2>
          <Row>
            <Col xs={12} md={6} lg={4}>
                <a href="https://pixelforest.herokuapp.com/#" target="_blank">
                    <Card inverse className="projectCard">
                        <CardImg className="cardImg" height="100%" src={require('../../media/images/analog-camera-hipster-8542.jpg')} alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle>Pixel Forest</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </a>
            </Col>

            <Col xs={12} md={6} lg={4}>
                  <a href="https://coinfolio-demo.herokuapp.com/" target="_blank">
                    <Card inverse className="projectCard">
                        <CardImg className="cardImg" height="100%" src={require('../../media/images/shutterstock_795136543.jpg')} alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle>Coinfolio</CardTitle>
                        </CardImgOverlay>
                    </Card>
                  </a>
              </Col>

            <Col xs={12} md={6} lg={4}>
              <Card inverse className="projectCard">
                    <CardImg className="cardImg" height="100%" src={require('../../media/images/newspaper.jpg')} alt="Card image cap" />
                    <CardImgOverlay>
                        <CardTitle>Coinfolio</CardTitle>
                    </CardImgOverlay>
                </Card>
              </Col>
          </Row>
          <div className="github">
            <a href="https://github.com/JordanVera" target="_blank"><Button outline className="githubLink" size="lg"><FaGithub /> &nbsp; See My Github</Button></a>
          </div>
        </Container>
    </div>
  )
}
