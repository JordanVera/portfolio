import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Row } from 'reactstrap';
import Navigation from './Navbar/Navbar';
import '../../styles/css/Contact.css';


export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Navigation />
        <Form className="contactForm">
        <h1 className="contactFormGreeting">Thanks for taking the time to reach out. What can I do for you today?</h1>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className="label" for="name">Name</Label>
                <Input type="text" name="name" id="name" />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label className="label" for="email">Email</Label>
                <Input type="email" name="email" id="email" />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <FormGroup>
                <Label className="label" for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </Col>
          </Row>
          <Button outline className="button">Submit</Button>
        </Form> 
      </div>
    )
  }
}
