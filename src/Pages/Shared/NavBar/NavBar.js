import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css'
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky= 'top' className='py-2 navigation'>
        <Container>
        {/* <Navbar.Brand className='logo text-warning' as={Link} to="/home"></Navbar.Brand> */}
        <Navbar.Toggle />
             <Navbar.Collapse className="justify-content-end menu">
                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
                 <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                 <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                 <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                 
                
            <Navbar.Text>
    
             </Navbar.Text>                       
             </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;