import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = (props) => (
  <Navbar>
    <Navbar.Header>
      <LinkContainer to="/" style={{ cursor: 'pointer' }}>
        <Navbar.Brand>React Music Browser</Navbar.Brand>
      </LinkContainer>
    </Navbar.Header>
    <Nav pullRight>
      <LinkContainer to="/artists"><NavItem>Artists</NavItem></LinkContainer>
      <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
    </Nav>
  </Navbar>
);

export default Navigation;
