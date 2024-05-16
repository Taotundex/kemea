import React, { useEffect, useState } from 'react';
import './HomeContent.css';
import Container from 'react-bootstrap/Container';
import { IoFilterOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import FilterModal from '../MODAL/FilterModal';
import AlertModal from '../MODAL/AlertModal';


<FilterModal />

function NewProject() {
  <AlertModal />
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);


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
    <div className='homepage'>
      <Container>
        <div className="py-4">
          <h2>New Projects</h2>
        </div>
        <div className='d-flex align-items-center justify-content-between gap-5 lists sticky-top py-3 bg-white'>
          <div className='firstList'>
            <div className='d-flex gap-3'>
              <form className='d-flex align-items-center border-1 border-black rounded-5 form'>
                <IoSearchOutline className="custom-icon" />
                <input type='text' name='search' id='search' placeholder='In what city?' />
              </form>
              <form className='select'>
                <select className='select2'>
                  <option value='apartment1'>Apartment 1</option>
                </select>
              </form>
              <div className='select'>
                <select className='select2'>
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
            </div>
          </div>
          <div className='secondList'>
            <div className='d-flex gap-3'>
              <button className="btn border-dark bg-black rounded-5 d-flex align-items-center justify-content-center gap-2" onClick={() => setModalShow1(true)}>
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
          <form className='select'>
            <select className="select2 rounded-5" style={{border:'1px solid #E9ECEF !important'}}>
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

export default NewProject;
