import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
return  (<Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#">Kisan's Amazing Bookstore</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#references">References</Nav.Link>
      <NavDropdown title="Fiction" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#fiction/action">Action</NavDropdown.Item>
        <NavDropdown.Item href="#fiction/fantasy">Fantasy</NavDropdown.Item>
        <NavDropdown.Item href="#fiction/romantic">Romantic</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#fiction/all">All</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}

export default Header;