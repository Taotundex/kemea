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
        <Navbar expand="lg" className="py-3 nav text-center">
            <Container>
                <Navbar.Brand as={Link} to="/" className='me-lg-5 me-0'><img src={logo} alt='Logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">
                        <NavDropdown className='mx-3' title="Buy" id="navbarScrollingDropdown">
                            <NavDropdown.Item className='navdrop-items' as={Link} to="/">Homes for Sales</NavDropdown.Item>
                            <NavDropdown.Item className='navdrop-items' as={Link} to="/new-projects">New Projects</NavDropdown.Item>
                            <NavDropdown.Item className='navdrop-items' as={Link} to="/buy-exceptional-properties">Exceptional properties</NavDropdown.Item>
                            <NavDropdown.Item className='navdrop-items' as={Link} to="/my-kemea">My Kemea - assisted search services</NavDropdown.Item>
                            <NavDropdown.Item className='navdrop-items' as={Link} to="/affordability-calculator">Affordability calculator</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className='mx-3' title="Rent" id="navbarScrollingDropdown">
                            <NavDropdown.Item className='navdrop-items' as={Link} to="/rent-home">Homes for rent</NavDropdown.Item>
                            <NavDropdown.Item className='navdrop-items' as={Link} to="/short-term-rent">Short Term rent</NavDropdown.Item>
                            <NavDropdown.Item className='navdrop-items' as={Link} to="/rent-exceptional-properties">Exceptional properties</NavDropdown.Item>
                            <NavDropdown.Item className='navdrop-items' as={Link} to="/my-kemea">My Kemea - assisted search services</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='mx-3' as={Link} to="/my-kemea">My Kemea</Nav.Link>
                        <NavDropdown className='mx-3' title="Promote with us" id="navbarScrollingDropdown">
                            <div className="row" style={{width: '400px'}}>
                                <div className="col col-4">
                                    <div className="landlords">
                                        <h5>Landlords</h5>
                                        <NavDropdown.Item className='navdrop-items' as={Link} to="">Sell out</NavDropdown.Item>
                                        <NavDropdown.Item className='navdrop-items' as={Link} to="">Rent out</NavDropdown.Item>
                                    </div>
                                </div>
                                <div className="col col-8">
                                    <div className="landlords">
                                        <h5>Real Estate / Professionals</h5>
                                        <NavDropdown.Item className='navdrop-items' as={Link} to="/pro-signup">Create free account</NavDropdown.Item>
                                    </div>
                                </div>
                            </div>
                        </NavDropdown>                
                    </Nav>
                    <Form className="d-flex gap-3 account-btn">
                        <Link to='/login'><Button variant="btn" className='px-4 border-0'>Login</Button></Link>
                        <Link to='/signup'><Button className='rounded-5 px-4' variant="btn btn-primary">Signup</Button></Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Heading