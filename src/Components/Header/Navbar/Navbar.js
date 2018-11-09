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
                    <Button outline className="button">Say Hello</Button>
                </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}