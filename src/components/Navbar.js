import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import {Link} from "react-router-dom"


function Navbar() {
    return(
        <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='fixed-top'>
        <ReactBootStrap.Navbar.Brand href="#home">StreamingFlix</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features">TV Shows</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Movies</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="My List" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.Form inline>
      <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootStrap.Button variant="outline-light">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link> <Link to="/Login">Login</Link></ ReactBootStrap.Nav.Link>
            {/* <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
              Dank memes
            </ReactBootStrap.Nav.Link> */}
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
 );
}

export default Navbar;