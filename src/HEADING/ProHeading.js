import React from 'react';
import './Heading.css'
import { Link } from 'react-router-dom';
import Prologo from '../images/kemea-pro-logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaRegUser, FaUserCircle } from 'react-icons/fa';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

function ProHeading() {
  return (
    <div>
        <Navbar expand="lg" className="py-3 nav text-center fixed-top bg-white">
            <Container>
                <Navbar.Brand as={Link} to="/home" className='me-lg-5 me-0'><img src={Prologo} alt='Logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto my-2 my-lg-0">
                        <Nav.Link className='mx-3' as={Link} to="/pro-home">Home</Nav.Link>
                        <Nav.Link className='mx-3' as={Link} to="/plan">My Plan</Nav.Link>
                        <Nav.Link className='mx-3' as={Link} to="/profile">Profile Page</Nav.Link>
                    </Nav>
                    <div className="btn-group">
                        {/* <div className="d-flex align-items-center gap-4"> */}
                            <div className='d-flex align-items-center gap-2 me-4'>EN<IoIosArrowForward /></div>
                            <div className="d-flex align-items-center gap-2 hamburger-list" data-bs-toggle="dropdown" aria-expanded="false">
                                <RxHamburgerMenu className='hamburger' />
                                <FaUserCircle className='user' />
                            </div>
                        {/* </div> */}
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

export default ProHeading