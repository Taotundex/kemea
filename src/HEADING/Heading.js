import React from 'react';
import './Heading.css'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Heading() {
  return (
    <div>
        <Navbar expand="lg" className="py-3 nav">
            <Container>
                <Navbar.Brand as={Link} to="/home"><img src={logo} alt='Logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">
                        <NavDropdown title="Buy" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/homes-for-sales">Homes for Sales</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/new-projects">New Projects</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/exceptional-properties">Exceptional properties</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/my-kemea">My Kemea - assisted search services</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/affordability-calculator">Affordability calculator</NavDropdown.Item>
                        </NavDropdown>
                            <NavDropdown title="Rent" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/homes-for-rent">Homes for rent</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/short-term-rent">Short Term rent</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/exceptional-properties-rent">Exceptional properties</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/my-kemea">My Kemea - assisted search services</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/my-kemea">My Kemea</Nav.Link>
                            <NavDropdown title="Promote with us" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/sell-out">Sell out</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rent-out">Rent out</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/create-free-account">Create free account</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Link to='/login'><Button variant="btn">Login</Button></Link>
                        <Link to='/signup'><Button className='rounded-5 px-4' variant="btn btn-primary">Signup</Button></Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Heading