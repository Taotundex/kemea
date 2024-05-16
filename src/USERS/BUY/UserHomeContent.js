import React, { useEffect } from 'react';
import '../../HOME/HomeContent.css';
import Container from 'react-bootstrap/Container';
import { IoFilterOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function UserHomeContent() {
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
    <div className="homepage">
      <Container>
        <div className="py-4">
          <h2>Find the right property, right away</h2>
          <p>Kemea supports your property research in Israel at every stage</p>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-5 lists sticky-top py-3 bg-white">
          <div className="firstList">
            <div className="d-flex gap-3 listing">
              <form className="d-flex align-items-center border-1 border-black rounded-5 form">
                <IoSearchOutline className="custom-icon" />
                <input type="text" name="search" id="search" placeholder="In what city?" />
              </form>
              <div className="d-flex buy">
                <Link to="/user/buy-home" className="text-decoration-none">
                  <button className="rounded-start-5 bg-dark text-white">Buy</button>
                </Link>
                <Link to="/user/rent-home" className="text-decoration-none">
                  <button className="rounded-end-5">Rent</button>
                </Link>
              </div>
              <form className="select">
                <select className="select2" style={{ width: '150px', height: '100%' }}>
                  <option value="apartment1">Apartment 1</option>
                  <option value="apartment2">Apartment 2</option>
                  <option value="apartment3">Apartment 3</option>
                </select>
              </form>
              <form className="select">
                <select className="select2" style={{ width: '150px', height: '100%' }}>
                  <option value="select">Price Range</option>
                </select>
              </form>
              <div className="d-flex align-items-center justify-content-center gap-2 myfilter rounded-5">
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
              <button className="btn text-white bg-dark border-dark rounded-5 d-flex d-flex align-items-center justify-content-center gap-2">
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
        <div className="btm d-flex align-items-center justify-content-between py-3">
          <p>
            <span>1 - 8</span> out of <span>2000</span>
          </p>
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
    </div>
  );
}

export default UserHomeContent;
