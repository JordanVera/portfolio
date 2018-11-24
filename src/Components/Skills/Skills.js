import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { IconContext } from "react-icons";
import { FaFunnelDollar, FaSass, FaNodeJs } from 'react-icons/fa';
import Bounce from 'react-reveal/Bounce';
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
                            <Bounce>
                                <h4>Front-end Developer</h4>
                            </Bounce>
                            <p className="mb-32px">I tend to code things from scratch, with a few exceptions.  Finding the right tools for the job is always the first step!</p>
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
                            <Bounce>
                                <h4>Back-end Developer</h4>
                            </Bounce>
                            <p className="mb-32px">I value simple api design, clean design patterns, and thoughtful database structures.</p>
                            <hr />
                            <p className="neonOrangeText">Languages I Speak:</p>
                            <p className="mb-32px">Node.js, MongoDb/Mongoose, Express, mySQL  </p>
                            <hr />
                            <p className="neonOrangeText">Dev Tools:</p>
                            <ul>
                                <li>Terminal</li>
                                <li>Routing</li>
                                <li>Mongoose</li>
                                <li>Schema design</li>
                                <li>Design Patterns</li>
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
                                        <FaFunnelDollar />
                                    </div>
                                </IconContext.Provider>
                            </CardTitle>
                            <Bounce>
                                <h4>Digital Marketer</h4>
                            </Bounce>
                            <p className="mb-32px">A website that doesn't convert is useless.  By understanding your users, you can convert them into paying customers!</p>
                            <hr />
                            <p className="neonOrangeText">Skills:</p>
                            <p className="mb-32px">SEO, SEM, Social Media Marketing, Marketing Funnels, etc.</p>
                            <hr />
                            <p className="neonOrangeText">Marketing Tools:</p>
                            <ul>
                                <li>Google Adwords</li>
                                <li>Google Analytics</li>
                                <li>Google Keywords</li>
                                <li>Moz</li>
                                <li>Hotjar</li>
                                <li>Screaming Frog</li>
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


