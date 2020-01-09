import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import goToRoute from '../helpers/linkTo';
import { withRouter } from 'react-router-dom';

const styles = {
  bar: {
    backgroundColor: "white",
    borderBottom: "0.5px solid #004772"
  },
  name: {
    marginLeft: "3px",
    color: "black"
  },
  links: {
    color: "black"
  },
  imgName: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
  toggle:{
    backgroundColor : "black"
  }
}

function Header(props) {

  return (
    <Navbar style={styles.bar} collapseOnSelect expand="lg" variant="dark" className="px-md-5" sticky="top">
      <Navbar.Brand style={styles.imgName} onClick={() => goToRoute('/', props)}>
        <img
          src="/logo.jpg"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <span style={styles.name}>Ocean Queens</span>
      </Navbar.Brand>
      <Navbar.Toggle style={styles.toggle} aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link style={styles.links} onClick={() => goToRoute('/', props)}>Home</Nav.Link>
          <Nav.Link style={styles.links} onClick={() => goToRoute('/about', props)}>About Us</Nav.Link>
          <Nav.Link style={styles.links} onClick={() => goToRoute('/services', props)}>Services</Nav.Link>
          <Nav.Link style={styles.links} onClick={() => goToRoute('/clients', props)}>Clients</Nav.Link>
          <Nav.Link style={styles.links} onClick={() => goToRoute('/contact', props)}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);