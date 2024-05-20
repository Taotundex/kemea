import React from 'react'
import './Modal.css'
import { Modal, Button, Form } from 'react-bootstrap';
import './RequestTourModal.css';

function ContactModal(props) {
  return (
    <div className="contactmodal">
            <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className="modal-header-custom">
                    <Button variant="close" onClick={props.onHide} className="close">
                        <span aria-hidden="true">&times;</span>
                    </Button>
                    <Modal.Title id="contained-modal-title-vcenter" className='mx-auto'>
                        <h5>Contact</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body-custom px-4'>
                <Form>
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
                </Modal.Body>
                <Modal.Footer className='w-100'>
                    <Button variant="primary" className=' rounded-5 px-4 py-2 w-100' onClick={props.onHide}>Contact Us</Button>
                </Modal.Footer>
            </Modal>
        </div>
  )
}

export default ContactModal