import React from "react";
import { Outlet } from "react-router-dom";
import img1 from "../Assetes/Images/Logo.png";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NBar = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={img1}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="The Grapich Sky"
            />
            The Grapich Sky
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav className="me-auto">
            <Button variant="primary">Login</Button>
          </Nav>
          <Nav className="me-auto">
            <Button variant="outline-secondary">Sign-Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default NBar;
