import React from 'react';
import '../../HEADING/Heading.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaRegUser, FaUserCircle } from 'react-icons/fa';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

function UserHeading() {
  return (
    <div>
        <Navbar expand="lg" className="py-3 nav text-center">
            <Container>
                <Navbar.Brand as={Link} to="/home" className='me-lg-5 me-0'><img src={logo} alt='Logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">
                        <NavDropdown className='mx-4' title="Buy" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/user-home">Homes for Sales</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/user-new-projects">New Projects</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/user-exceptional-properties">Exceptional properties</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/user-my-kemea">My Kemea - assisted search services</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/user-affordability-calculator">Affordability calculator</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className='mx-4' title="Rent" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/user-home">Homes for rent</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/user-short-term-rent">Short Term rent</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/user-exceptional-properties">Exceptional properties</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/user-my-kemea">My Kemea - assisted search services</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='mx-4' as={Link} to="/user-my-kemea">My Kemea</Nav.Link>
                        <NavDropdown className='mx-4' title="Promote with us" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/sell-out">Sell out</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rent-out">Rent out</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/signup">Create free account</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='mx-4' as={Link} to="/study">To Study</Nav.Link>
                        <Nav.Link className='mx-4' as={Link} to="/favorites">Favorites</Nav.Link>
                    </Nav>
                    <div className="btn-group">
                        <Form className="d-flex align-items-center gap-2 hamburger-list" data-bs-toggle="dropdown" aria-expanded="false">
                            <RxHamburgerMenu className='hamburger' />
                            <FaUserCircle className='user' />
                        </Form>
                        <ul class="dropdown-menu dropdown-menu-lg-end">
                            <li>
                                <Link to='/notifications' className='text-decoration-none'>
                                    <button class="dropdown-item d-flex gap-2 align-items-center" type="button"><MdOutlineNotificationsActive />Notifications</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/profile' className='text-decoration-none'>
                                    <button class="dropdown-item d-flex gap-2 align-items-center" type="button"><FaRegUser />Profile</button>
                                </Link>
                            </li>
                            <li>
                                <Link to='/' className='text-decoration-none'>
                                    <button class="dropdown-item d-flex gap-2 align-items-center" type="button"><FiLogOut />Log out</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default UserHeading