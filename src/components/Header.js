import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
import logo from '../images/cs.png';
import react, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Button, ButtonGroup, Modal, Form, FormControl } from 'react-bootstrap/';


const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="success" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src={logo}
            className="d-inline-block align-middle mar"
          />{' '}
          <strong>CaraSeed</strong>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
          </Nav>

          <Nav className='mr-2'>
          <Form inline>
              <FormControl type="text" placeholder="Search here" className="mr-sm-3" />
              <Button variant="danger" className="mr-5">Search</Button>
            </Form>
            <Nav.Link className="text-white mx-3" href="/home"><strong>Home</strong></Nav.Link>
            <Nav.Link className="text-white mx-3" href="/products"><strong>Market</strong></Nav.Link>
            <Nav.Link className="text-white mx-3" href="/About"><strong>AboutUs</strong></Nav.Link>
            <div className="mx-2 my-1">
              <Button variant='warning' onClick={handleShow}>Login</Button>
              {/* <Button className='mx-2' variant='warning' onClick={handleShow}>SignUp</Button> */}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      {/* <Modal Starts Here></Modal> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login To Caraseed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
      </Button>
            <Button variant="primary" className='float-right' type="submit">
              Creat Account
      </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
           </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Header;
