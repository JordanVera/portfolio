import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button } from 'reactstrap';
import { IconContext } from "react-icons";
import { MdComputer } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">
          <IconContext.Provider value={{ className: "MdComputer", size: "3rem" }}>
            <div>
                <MdComputer />
            </div>
          </IconContext.Provider>
          </NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link to="/contact">
                      <Button outline className="button">Say Hello</Button>
                    </Link>
                </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}