import React from 'react'
import './HomeContent.css'
import Container from 'react-bootstrap/Container';
import { IoFilterOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import { IoMdNotificationsOutline } from "react-icons/io";

function ShortTermRent() {
  return (
    <div className='homepage'>
        <Container>
            <div className="py-4">
                <h2>Short Term Properties</h2>
            </div>
            <div className='d-flex justify-content-between align-items-center lists sticky-top py-3 bg-white'>
                <div className='firstList'>
                    <dive className='d-flex gap-3'>
                        <form className='d-flex align-items-center border-1 border-black rounded-5 gap-1 form' >
                            <IoSearchOutline className="custom-icon" />
                            <input type='text' name='search' id='search' placeholder='In what city?' />
                        </form>
                        <form className='select'>
                            <select name="select" id="select">
                                <option>Home type</option>
                                <option value='Apartment'>Apartment</option>
                                <option value='Penthouse'>Penthouse</option>
                                <option value='Private_houes'>Private house</option>
                            </select>
                        </form>
                        <div className='d-flex align-items-center justify-content-center gap-2 myfilter rounded-5'>
                            <IoFilterOutline className="custom-icon" />All filter
                        </div>
                        <div className='searchBtn'>
                            <button className='btn btn-primary rounded-5 d-flex align-items-center justify-content-center gap-2' variant="btn">
                                <IoSearchOutline className="custom-icon" />
                                Search
                            </button>
                        </div>
                    </dive>
                </div>
                <div className='secondList'>
                    <div className='d-flex gap-3'>
                        <div className="d-flex align-items-center gap-2">
                            <Link className='text-decoration-none link' to='/'>
                                List
                            </Link>
                            <div className="vr"></div>
                            <Link className='text-decoration-none link' to='/'>
                                Map
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='btm d-flex align-items-center justify-content-between'>
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
    </div>
  )
}

export default ShortTermRent