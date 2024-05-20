import React, { useState } from 'react';
import './HomeContent.css';
import Container from 'react-bootstrap/Container';
import { IoFilterOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
// import $ from 'jquery';
import FilterModal from '../MODAL/FilterModal';


<FilterModal />


function ShortTermRent() {
  const [modalShow, setModalShow] = useState(false);


  return (
    <div className='homepage'>
      <Container>
        <div className="py-4">
          <h2>Short Term Properties</h2>
        </div>
        <div className='d-flex justify-content-between align-items-center lists py-3 bg-white'>
          <div className='firstList'>
            <div className='d-flex gap-3'>
              <form className='d-flex align-items-center border-1 border-black rounded-5 gap-1 form'>
                <IoSearchOutline className="custom-icon" />
                <input type='text' name='search' id='search' placeholder='In what city?' />
              </form>
              <div class="dropdown-center" style={{width:'150px !important'}}>
                            <button class="btn btn-secondary dropdown-toggle myselect d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Home type
                            </button>
                            <ul class="dropdown-menu px-3 py-2" style={{zIndex: '10000000 !important',width:'150px !important'}}>
                                <li>
                                    <label htmlFor="" className="d-flex gap-2">
                                        <input type="checkbox" name="apartment" id="" />Apartment
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="" className="d-flex gap-2">
                                        <input type="checkbox" name="apartment" id="" />Penthouse
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="" className="d-flex gap-2">
                                        <input type="checkbox" name="apartment" id="" />Private house
                                    </label>
                                </li>
                            </ul>
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
            </div>
          </div>
          <div className='secondList'>
            <div className='d-flex gap-3'>
              <div className="d-flex align-items-center gap-2">
                <Link className='text-dark text-decoration-none link' to='/'>
                  List
                </Link>
                <div className="vr"></div>
                <Link className='text-dark text-decoration-none link' to='/'>
                  Map
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='btm d-flex align-items-center justify-content-between py-3'>
          <p><span>1 - 8</span> out of <span>2000</span></p>
          <div class="dropdown-center" style={{width:'150px !important'}}>
              <button class="btn dropdown-toggle myselect d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Default order
              </button>
              <ul class="dropdown-menu px-3 py-2" style={{width:'150px !important'}}>
                  <li>Date</li>
                  <li>Ascending Price</li>
                  <li>Descending Price</li>
              </ul>
          </div>
        </div>
      </Container>
      <FilterModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default ShortTermRent;
