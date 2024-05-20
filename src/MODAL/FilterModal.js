import React from 'react'
import './RequestTourModal.css';
import './Modal.css'
import { Button, Modal } from 'react-bootstrap';

function FilterModal(props) {
    return (
        <div className="filtermodal">
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className="modal-header-custom">
                    <Button variant="close" onClick={props.onHide} className="close">
                        <span aria-hidden="true">&times;</span>
                    </Button>
                    <Modal.Title id="contained-modal-title-vcenter" className='mx-auto'>
                        <h5>Filters</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body-custom px-4'>
                    <h5>More Characteristics</h5>
                    <form action="">
                        <div className="more py-4">
                            <div className="row gx-5 gy-4">
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="wifi" id="wifi" />Wifi
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="cuisine" id="cuisine" />Cuisine
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="cuisine" id="cuisine" />Cuisine
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="kitchen" id="kitchen" />Kosher Kitchen
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="secheLinge" id="secheLinge" />Seche-linge
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="secheLinge" id="secheLinge" />Seche-linge
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="climatisation" id="climatisation" />Climatisation
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="Chauffage" id="Chauffage" />Chauffage
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="Chauffage" id="Chauffage" />Chauffage
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="climatisation" id="climatisation" />Climatisation
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="climatisation" id="climatisation" />Climatisation
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="climatisation" id="climatisation" />Climatisation
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="climatisation" id="climatisation" />Climatisation
                                    </label>
                                </div>
                                <div className="col col-lg-4 col-md-6 col-12">
                                    <label htmlFor="" className="d-flex align-items-center gap-3">
                                        <input type="checkbox" name="climatisation" id="climatisation" />Climatisation
                                    </label>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="others">
                            <div className="row">
                                <div className="col col-lg-5 col-md-6 col-12">
                                    <div className="input">
                                        <label htmlFor="">Number of rooms</label>
                                        <div className="d-flex gap-3">
                                            <input type="text" name="roomsFrom" id="roomsFrom" placeholder='From' />
                                            <input type="text" name="roomsTo" id="roomsTo" placeholder='To' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-5 col-md-6 col-12">
                                    <div className="input">
                                        <label htmlFor="">Number of floor(s)</label>
                                        <div className="d-flex gap-3">
                                            <input type="text" name="floorFrom" id="floorFrom" placeholder='From' />
                                            <input type="text" name="floorTo" id="floorTo" placeholder='To' />
                                        </div>
                                        <label htmlFor="" className='d-flex align-items-center gap-2 mt-2 label'>
                                            <input type="checkbox" name="groundFloor" id="groundFloor" />Ground floor
                                        </label>
                                    </div>
                                </div>
                                <div className="col col-lg-5 col-md-6 col-12">
                                    <div className="input">
                                        <label htmlFor="">Surface (in m<sup>2</sup>)</label>
                                        <div className="d-flex gap-3">
                                            <input type="text" name="roomsFrom" id="roomsFrom" placeholder='From' />
                                            <input type="text" name="roomsTo" id="roomsTo" placeholder='To' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-7 col-md-6 col-12">
                                    <div className="input">
                                        <label htmlFor="">Entry date</label>
                                        <input type="date" name="date" id="date" />
                                        <div className="row mt-2 g-3">
                                            <div className="col col-lg-4 col-md-6 col-12">
                                                <label htmlFor='' className="d-flex align-items-center gap-2 label">
                                                    <input type="checkbox" name="immediately" id="immediately" />Immediately
                                                </label>
                                            </div>
                                            <div className="col col-lg-4 col-md-6 col-12">
                                                <label htmlFor='' className="d-flex align-items-center gap-2 label">
                                                    <input type="checkbox" name="flexible" id="flexible" />Flexible
                                                </label>
                                            </div>
                                            <div className="col col-lg-4 col-md-6 col-12">
                                                <label htmlFor='' className="d-flex align-items-center gap-2 label">
                                                    <input type="checkbox" name="longTerm" id="longTerm" />Long term
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button className='bg-transparent border-none border-white text-dark' onClick={props.onHide}>Delte everything</Button>
                    <Button variant="primary rounded-5 px-4 py-2" onClick={props.onHide}>Search</Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
}

export default FilterModal