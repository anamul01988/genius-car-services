import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../../../images/logo.png';
const Header = () => {
  return (
   
      <>
       <div className="container-full">
       <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
               <img src={logo} height="30" alt=""></img>
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
       </div>

       
      </>

  );
};

export default Header;
