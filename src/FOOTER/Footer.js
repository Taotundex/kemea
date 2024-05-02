import React from 'react' 
import { Link } from 'react-router-dom'
import icon from '../images/icon.png'
import './Footer.css'
import { BsArrowRightShort } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='kermeaFooter'>
        <div className="container">
            <div className="row py-5 g-4">
                <div className="col col-lg-6 col-md-12 col-12">
                    <div className="subscribe">
                        <form action="subscribe" className='mb-5'>
                            <h4 className='fs-6 fw-semibold mb-3'>Subscribe to our newsletter</h4>
                            <div className="d-flex align-items-center">
                                <input type="text" name="subscribe" id="subscribe" placeholder='Your email' />
                                <button>
                                    <BsArrowRightShort className='arrow' />
                                </button>
                            </div>
                        </form>
                        <div className="mt-lg-5 mt-md-4 mt-2 d-flex align-items-center gap-2">
                            <LiaLinkedinIn className='icon fs-4' />
                            <GrFacebookOption className='icon fs-4' />
                            <FaInstagram className='icon fs-4' />
                        </div>
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-6">
                    <div className="services">
                        <h4 className='fs-6 fw-semibold mb-3'>Services</h4>
                        <ul>
                            <li><Link className='links' to='/home'>Buy</Link></li>
                            <li><Link className='links' to='/home'>Rent</Link></li>
                            <li><Link className='links' to='/home'>Sell</Link></li>
                            <li><Link className='links' to='/my-kermea'>My Kermea</Link></li>
                            <li><Link className='links' to='/kermea-pro'>Kermea Pro</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-6">
                    <div className="legal">
                        <h4 className='fs-6 fw-semibold mb-3'>Legal</h4>
                        <ul>
                            <li><Link className='links' to='/terms-of-service'>Terms of Service</Link></li>
                            <li><Link className='links' to='/privacy-policy'>Privacy Policy</Link></li>
                            <li><Link className='links' to='/cookies-policy'>Cookies Policy</Link></li>
                            <li><Link className='links' to='/legal-notice'>Legal Notice</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright py-lg-4 py-3 d-flex align-items-center gap-2 fs-5">
                <img src={icon} width='100%' alt="" />
                &copy; kemea 2023
            </div>
        </div>
    </div>
  )
}

export default Footer