import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase_init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
   
      <>
       <div className="container-full">
       <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
               <img src={logo} height="30" alt=""></img>
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="">Pricing</Nav.Link>
              {/* <Nav.Link href="/login">Log In</Nav.Link> */}
              {/* <Nav.Link href="/signup">Sign Up</Nav.Link> */}
              {
                user ?
                 <button onClick={logout}>Log out</button>: 
                 <>
                    <Nav.Link href="/login">Log In</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                 </>
              }
            </Nav>
          </Container>
        </Navbar>
       </div>

       
      </>

  );
};

export default Header;
