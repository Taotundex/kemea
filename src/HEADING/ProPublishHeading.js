import React from 'react'
import Prologo from '../images/kemea-pro-logo.png'
import '../HEADING/Heading.css'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProPublishHeading() {
  return (
    <div>
        <Navbar expand="lg" className="py-3 nav text-center">
            <Container>
                <Navbar.Brand as={Link} to="/pro/home" className='me-lg-5 me-0'><img src={Prologo} alt='Logo' /></Navbar.Brand>
                <button className='bg-transparent text-dark save'>
                    Save & Exit
                </button>
            </Container>
        </Navbar>
    </div>
  )
}

export default ProPublishHeading