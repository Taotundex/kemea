import React, { useState } from 'react';
import './HomeContent.css';
import Container from 'react-bootstrap/Container';
import { IoFilterOutline, IoSearchOutline } from 'react-icons/io5';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import $ from 'jquery';
import FilterModal from '../MODAL/FilterModal';
import AlertModal from '../MODAL/AlertModal';


<FilterModal />
function HomeContent() {
<AlertModal />
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);

  

  return (
    <div className="homepage">
      <Container>
        <div className="py-4">
          <h2>Find the right property, right away</h2>
          <p>Kemea supports your property research in Israel at every stage</p>
        </div>
        <div>
          <div className="d-flex justify-content-between lists py-3 bg-white">
            <div className="firstList">
              <div className="d-flex gap-3 listing">
                <form className="d-flex align-items-center border-1 border-black rounded-5 form">
                  <IoSearchOutline className="custom-icon" />
                  <input type="text" name="search" id="search" placeholder="In what city?" />
                </form>
                <div className="d-flex buy">
                  <Link to="/" className="text-decoration-none">
                    <button className="rounded-start-5 bg-dark text-white">Buy</button>
                  </Link>
                  <Link to="/rent-home" className="text-decoration-none">
                    <button className="rounded-end-5">Rent</button>
                  </Link>
                </div>
                <div class="dropdown-center" style={{width:'150px !important'}}>
                  <button class="btn btn-secondary dropdown-toggle myselect d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Home type
                  </button>
                  <ul class="dropdown-menu px-3 py-2" style={{width:'150px !important'}}>
                    <li>
                      <label htmlFor="" className="d-flex gap-2">
                        <input type="checkbox" name="apartment" id="" />Apartment
                      </label>
                    </li>
                    <li>
                      <label htmlFor="" className="d-flex gap-2">
                        <input type="checkbox" name="apartment" id="" />Apartment
                      </label>
                    </li>
                    <li>
                      <label htmlFor="" className="d-flex gap-2">
                        <input type="checkbox" name="apartment" id="" />Apartment
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="dropdown-center" style={{width:'150px !important'}}>
                  <button class="btn btn-secondary dropdown-toggle myselect d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Price range
                  </button>
                  <ul class="dropdown-menu px-3 py-2" style={{width:'150px !important'}}>
                    <li>Price range</li>
                  </ul>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2 myfilter rounded-5" onClick={() => setModalShow(true)}>
                  <IoFilterOutline className="custom-icon" />All filter
                </div>
                <div className="searchBtn">
                  <button className="btn btn-primary rounded-5 d-flex align-items-center justify-content-center gap-2" variant="btn">
                    <IoSearchOutline className="custom-icon" />
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="secondList">
              <div className="d-flex gap-3">
                <button className="btn text-white bg-dark border-dark rounded-5 d-flex d-flex align-items-center justify-content-center gap-2" onClick={() => setModalShow1(true)}>
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
        </div>
        <div className="btm d-flex align-items-center justify-content-between py-3">
          <p>
            <span>1 - 8</span> out of <span>2000</span>
          </p>
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
      <AlertModal show={modalShow1} onHide={() => setModalShow1(false)} />
    </div>
  );
}

export default HomeContent;
