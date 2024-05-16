import React, { useEffect } from 'react'
import './Modal.css';
import { Button, Modal } from 'react-bootstrap';
import $ from 'jquery';


function AlertModal(props) {
    useEffect(() => {
        $('.select2').select2();
    
        return () => {
          $('.select2').each(function () {
            if ($(this).data('select2')) {
              $(this).select2('destroy');
            }
          });
        };
      }, []);
    return (
        <div className="filtermodal">
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className="modal-header-custom">
                    <Button variant="close" onClick={props.onHide} className="close">
                        <span aria-hidden="true">&times;</span>
                    </Button>
                    <Modal.Title id="contained-modal-title-vcenter" className='mx-auto'>
                        <h5>Add an alert</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body-custom px-4'>
                    <div className="search">
                        <h5>My search</h5>
                        <div className="d-flex align-items-center gap-3 buttons py-3">
                            <button>Tel Aviv, Israel</button>
                            <button>Buy</button>
                            <button>Apartment</button>
                            <button>From 3 000 000 ₪  to 4 000 000 ₪</button>
                            <button>Kosher Kitchen</button>
                            <button>From 3 to 4 rooms</button>
                        </div>
                    </div>
                    <div className="email">
                        <h5>My E-mail</h5>
                        <div className="input">
                            <input type="text" name="email" id="email" placeholder='Ex: juliette.dupont@mail.com' />
                        </div>
                        <div className="input">
                            <label htmlFor="" className='label fw-semi-bold mb-2'>I am creating this email alert because:</label>
                            <select name="select" id="select" className="select2">
                                <option value="">I want to follow the prices</option>
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary rounded-5 px-4 py-2" onClick={props.onHide}>Receive the latest ads</Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
}

export default AlertModal