import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { isCompositeComponent } from 'react-dom/test-utils';
import { Link, NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
return  (<Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
  <NavLink to="/">
    <Navbar.Brand>Kisan's Amazing Bookstore</Navbar.Brand>
  </NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to="/references">
        <Nav.Link>References</Nav.Link>
      </LinkContainer>
      <NavDropdown title="Fiction" id="collasible-nav-dropdown">
        <LinkContainer to="/fiction/action">
          <NavDropdown.Item>Action</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to="/fiction/fantasy">
          <NavDropdown.Item>Fantasy</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to="/fiction/romantic">
          <NavDropdown.Item>Romantic</NavDropdown.Item>
        </LinkContainer>
        <NavDropdown.Divider />
        <LinkContainer to="/fiction/all">
          <NavDropdown.Item>All</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}

export default Header;