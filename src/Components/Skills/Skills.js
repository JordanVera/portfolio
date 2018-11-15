import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { IconContext } from "react-icons";
import { FaPaintBrush, FaSass, FaNodeJs } from 'react-icons/fa';
import '../../styles/css/Skills.css';


export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <Container>
            <Row noGutters className="skillsCardsRow text-center">
                <Col xs={12} md={4}>
                    <Card className="skillCard frontEndDev">
                        <CardBody>
                            <CardTitle>
                                <IconContext.Provider value={{ color: "#FD5F00", size: "3.6rem", className: "skillCardLogo" }}>
                                    <div>
                                        <FaSass />
                                    </div>
                                </IconContext.Provider>
                            </CardTitle>
                            <h4>Front-end Developer</h4>
                            <p className="mb-32px">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                            <hr />
                            <p className="neonOrangeText">Languages I Speak:</p>
                            <p className="mb-32px">HTML, React, CSS, SASS, Javascript</p>
                            <hr />
                            <p className="neonOrangeText">Dev Tools:</p>
                            <ul>
                                <li>VS Code</li>
                                <li>Bootstrap</li>
                                <li>Git</li>
                                <li>Github</li>
                                <li>Heroku</li>
                                <li>Terminal</li>
                                <li>jQuery</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs={12} md={4}>
                    <Card className="skillCard backEndDev">
                        <CardBody>
                            <CardTitle>
                                <IconContext.Provider value={{ color: "#FD5F00", size: "3.6rem", className: "skillCardLogo" }}>
                                    <div>
                                        <FaNodeJs />
                                    </div>
                                </IconContext.Provider>
                            </CardTitle>
                            <h4>Back-end Developer</h4>
                            <p className="mb-32px">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                            <hr />
                            <p className="neonOrangeText">Languages I Speak:</p>
                            <p className="mb-32px">Node.js, MongoDb/Mongoose, Express, mySQL  </p>
                            <hr />
                            <p className="neonOrangeText">Dev Tools:</p>
                            <ul>
                                <li>Terminal</li>
                                <li>Api Design</li>
                                <li>Api implementation</li>
                                <li>Database maintenance</li>
                                <li>Database Deployment</li>
                                <li>Heroku</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs={12} md={4}>
                    <Card className="skillCard UiUx">
                        <CardBody>
                            <CardTitle>
                                <IconContext.Provider value={{ color: "#FD5F00", size: "3.6rem", className: "skillCardLogo" }}>
                                    <div>
                                        <FaPaintBrush />
                                    </div>
                                </IconContext.Provider>
                            </CardTitle>
                            <h4>UI / UX Designer</h4>
                            <p className="mb-32px">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                            <hr />
                            <p className="neonOrangeText">Languages I Speak:</p>
                            <p className="mb-32px">HTML, React, CSS, SASS, Javascript</p>
                            <hr />
                            <p className="neonOrangeText">Dev Tools:</p>
                            <ul>
                                <li>Terminal</li>
                                <li>Api Design</li>
                                <li>Api implementation</li>
                                <li>Database Maintenance</li>
                                <li>Database Deployment</li>
                                <li>Heroku</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
  }
}


