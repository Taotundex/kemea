import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoFilterOutline, IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import FilterModal from '../MODAL/FilterModal';
import AlertModal from '../MODAL/AlertModal';


<FilterModal />

function BuyExceptionalProperties() {
    <AlertModal />
      const [modalShow, setModalShow] = useState(false);
      const [modalShow1, setModalShow1] = useState(false);
  return (
    <div className='homepage'>
        <Container>
            <div className="py-4">
                <h2>Exceptional Properties</h2>
            </div>
            <div className='d-flex gap-5 lists sticky-top py-3 bg-white'>
                <dive className='firstList'>
                    <dive className='d-flex gap-3'>
                        <form className='d-flex align-items-center border-1 border-black rounded-5 form' >
                            <IoSearchOutline className="custom-icon" />
                            <input type='text' name='search' id='search' placeholder='In what city?' />
                        </form>
                        <div className='d-flex buy'>
                            <Link to='/buy-exceptional-properties' className='text-decoration-none text-light'><button className='rounded-start-5 bg-dark text-light'>Buy</button></Link>
                            <Link to='/rent-exceptional-properties' className='text-decoration-none text-light'><button className='rounded-end-5'>Rent</button></Link>
                        </div>
                        <form className='select'>
                            <select className='select'>
                                <option value='select'>
                                    <label htmlFor="apartment1" className='d-flex'>
                                        <input type="checkbox" id="apartment1" name="apartment1" value="apartment1" />
                                        Apartment 1
                                    </label>
                                </option>
                            </select>
                        </form>
                        <div className='select'>
                            <select name='select' id='select'>
                                <option value='select'>Price Range</option>
                            </select>
                        </div>
                        <div className='d-flex align-items-center justify-content-center gap-2 myfilter rounded-5' onClick={() => setModalShow(true)}>
                            <IoFilterOutline className="custom-icon" />All filter
                        </div>
                        <div className='searchBtn'>
                            <button className='btn btn-primary rounded-5 d-flex align-items-center justify-content-center gap-2' variant="btn">
                                <IoSearchOutline className="custom-icon" />
                                Search
                            </button>
                        </div>
                    </dive>
                </dive>
                <div className='secondList'>
                    <div className='d-flex gap-3'>
                        <button className="btn border-dark bg-dark text-white rounded-5 d-flex d-flex align-items-center justify-content-center gap-2" onClick={() => setModalShow1(true)}>
                            <IoMdNotificationsOutline className="custom-icon" />Add an alert
                        </button>
                        <div className="d-flex align-items-center justify-content-center gap-2">
                        <Link to="" className="text-dark text-decoration-none">
                            List
                        </Link>
                        <div className="vr"></div>
                        <Link to="" className="text-dark text-decoration-none">
                            Map
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='btm d-flex align-items-center justify-content-between py-2'>
                <p><span>1 - 8</span> out of <span>2000</span></p>
                <form>
                    <select className='rounded-5'>
                        <option value="Default order">Default order</option>
                        <option value="Date">Date</option>
                        <option value="Ascending Price">Ascending Price</option>
                        <option value="Descending Price">Descending Price</option>
                    </select>
                </form>
            </div>
        </Container>
        
      <FilterModal show={modalShow} onHide={() => setModalShow(false)} />
      <AlertModal show={modalShow1} onHide={() => setModalShow1(false)} />
    </div>
  )
}

export default BuyExceptionalProperties