import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container fluid style={{paddingLeft: '50px'}}>
        <Navbar.Brand href="/" title="Home">OnlineChartMaker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
