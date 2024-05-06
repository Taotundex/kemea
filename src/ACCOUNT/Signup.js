import React, { useState } from 'react'
import { ReactCountryFlag } from 'react-country-flag';
import { Link } from 'react-router-dom'
import './Account.css'
import signupImg from '../images/signup-img.png'

function Signup() {
    const [countryCode, setCountryCode] = useState('');

  const handleCountryChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <div className='account'>
        <div className="row g-0">
            <div className="col col-lg-7 col-md-6 col-12 left">
                <img src={signupImg} width="100%" alt="" />
            </div>
            <div className="col col-lg-5 col-md-6 col-12">
                <div className="right">
                    <div className="mylogin">
                        <div className="head d-flex align-items-center gap-2 mt-4 ms-auto" style={{width: 'fit-content'}}>
                            <form action="">
                                <select name="language" id="language">
                                    <option value="EN">EN</option>
                                </select>
                            </form>
                            <Link to="/pro-login"><button>Log in</button></Link>
                        </div>
                        <div className="login" style={{marginTop: '75px'}}>
                            <div className='top text-center'>
                                <h2>Registration</h2>
                            </div>
                            <form action="">
                                <div className="row gx-lg-4 gx-md-3 gx-0">
                                    <div className="col col-lg-6 col md-12 col-12">
                                        <div className="input">
                                            <label htmlFor="companyname">Company Name</label>
                                            <input type="text" name="companyname" id="companyname" placeholder='Remax' />
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col md-12 col-12">
                                        <div className="input">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" id="name" placeholder='John Doe' />
                                        </div>
                                    </div>
                                </div>
                                <div className="input">
                                    <label htmlFor="licenseNumber">License Number</label>
                                    <input type="text" name="licenseNumber" id="licenseNumber" placeholder='xxx - xxx - xxx' />
                                </div>
                                <div className="input">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name="email" id="email" placeholder='Ex: david.doe@mail.com' />
                                </div>
                                <div className="input">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder='............' />
                                </div>
                                <div className="input">
                                    <label htmlFor="number">Phone Number</label>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center myflag">
                                            <div className="flag">
                                                {countryCode && (
                                                    <div>
                                                    <ReactCountryFlag countryCode={countryCode} size="50px" />
                                                    </div>
                                                )}
                                            </div>
                                            <select onChange={handleCountryChange}>
                                                <option > ----- </option>
                                                <option value="US">+1</option>
                                                <option value="CA">+1</option>
                                                <option value="GB">+44</option>
                                            </select>
                                        </div>
                                        <input type="tel" name="number" id="number" />
                                    </div>
                                </div>
                                <div className="py-2">
                                    <div className="inputs d-flex gap-2">
                                        <input type="checkbox" name="receiveCommunication" id="receiveCommunication" />
                                        <p>Receive Kemea communications</p>
                                    </div>
                                    <div className="inputs d-flex gap-2">
                                        <input type="checkbox" name="terms" id="terms" />
                                        <p>I accept the <Link to='/'>Terms of Service</Link> and the <Link to='/'>Kemea Privacy Policy.</Link></p>
                                    </div>
                                </div>
                                <Link to='/home'><button type='submit' className='my-3'>Sign up</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup