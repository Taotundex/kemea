import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import './RequestTourModal.css'; // Import the custom CSS
import ReqImage from '../images/reqModalImg.png'
import ConfirmImg from '../images/Img.png'
import { IoBulbOutline } from 'react-icons/io5';
import { FaCirclePlus } from 'react-icons/fa6';

const ReqestTourModal = ({ show, handleClose }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  // const prevStep = () => setStep(step - 1);

  const handleSave = () => {
    // Handle save logic here
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {step === 1 ? 'Request a tour' : 'Confirm your tour'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {step === 1 && (
          <div className="step-content">
            <div className="head d-flex gap-3 align-items-center">
              <img src={ReqImage} alt="Property" className="property-image" />
              <div className="det">
                <h5>Eliezer Yaffe St. </h5>
                  <p>Ra'anana, Israel</p>
                <p className="property-details">3,024 sqft | 2 bd | 3 ba</p>
              </div>
            </div>
            <p className="tip py-3">
            <IoBulbOutline className='fs-1 text-primary mx-3' />Tip: Selecting multiple times helps schedule your tour faster
            </p>
            <p>Select up to 3 times</p>
            <Row className="mb-3">
              <Col>
                <Button className="w-100 date-button">WED Apr 10</Button>
              </Col>
              <Col>
                <Button className="w-100 date-button">THU Apr 11</Button>
              </Col>
              <Col>
                <Button className="w-100 date-button">FRI Apr 12</Button>
              </Col>
            </Row>
            <Form.Group controlId="timeSelect" className="mb-3">
              <Form.Label>Select Time</Form.Label>
              <Form.Control as="select" className="custom-select">
                <option>5:30 pm</option>
                <option>6:00 pm</option>
                <option>6:30 pm</option>
              </Form.Control>
            </Form.Group>
            <Button variant="link" className="mb-3 add-time-link text-primary text-decoration-none d-flex gap-2 fw-bold"><FaCirclePlus className='fs-5' /> Add a time</Button>
          </div>
        )}
        {step === 2 && (
            <Form>
              <div className="d-flex align-items-center gap-3">
              <h5>How can we reach out to confirm the tour?</h5>
                <img src={ConfirmImg} width='80px' height='80px' alt="" />
              </div>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name <span style={{color: '#A3000B'}}>*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter your name" className="custom-input"/>
              </Form.Group>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email <span style={{color: '#A3000B'}}>*</span></Form.Label>
                <Form.Control type="email" placeholder="Enter your email" className="custom-input"/>
              </Form.Group>
              <Form.Group controlId="phone" className="mb-3">
                <Form.Label>Phone <span style={{color: '#A3000B'}}>*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" className="custom-input"/>
              </Form.Group>
              <Form.Group controlId="message" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} defaultValue="I am interested in the Cottage on Eliezer Yaffe St. Ra'anana, Israel" className="custom-input"/>
              </Form.Group>
              <Form.Check
                type="checkbox"
                id="financing"
                label="I want financing information"
                className="mb-3 custom-check"
              />
              <small style={{fontSize: '12px'}}>By pressing Request tour, you agree that Kemea Group and its affiliates, and real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don’t need to consent as a condition of buying any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use. Kemea does not endorse any real estate professionals. We may share information about your recent and future site activity with your agent to help them understand what you’re looking for in a home.</small>
            </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        {/* {step > 1 && (
          <Button variant="secondary" onClick={prevStep} className="footer-button">
            Previous
          </Button>
        )} */}
        {step < 2 ? (
          <Button variant="primary" onClick={nextStep} className="footer-button py-2 rounded-5">
            Next
          </Button>
        ) : (
          <Button variant="primary" onClick={handleSave} className="footer-button py-2 rounded-5">
            Request tour
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ReqestTourModal;