import React, { useState } from 'react'
import { ReactCountryFlag } from 'react-country-flag';
import { Link } from 'react-router-dom'
import './Account.css'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';


function UserSignup() {
    const [countryCode, setCountryCode] = useState('');

  const handleCountryChange = (event) => {
    setCountryCode(event.target.value);
  };
  return (
    <div className='account'>
        <div className="row g-0">
            <div className="col col-lg-6 col-md-6 col-12 left">
                <div className="to-know">
                    <div className="know">
                        <h1>By entering in your Kemea account...</h1>
                        <div className="py-4 d-flex align-items-center gap-2">
                            <RiNumber1 className='fs-3' />Our hunters take care of everything for you.
                        </div>
                        <div className="py-4 d-flex align-items-center gap-2">
                            <RiNumber2 className='fs-3' />The consultation is free and without obligation.
                        </div>
                        <div className="py-4 d-flex align-items-center gap-2">
                            <RiNumber3 className='fs-3' />We accompany you until the signing of the deed
                        </div>
                        <div className="py-4 d-flex align-items-center gap-2">
                            <RiNumber4 className='fs-3' />We give you access to the Off Market.
                        </div>
                    </div>
                </div>
            </div>
            <div className="col col-lg-6 col-md-6 col-12">
                <div className="right">
                    <div className="mylogin">
                        <div className="head d-flex align-items-center gap-2 mt-4 ms-auto" style={{width: 'fit-content'}}>
                            <form action="">
                                <select name="language" id="language">
                                    <option value="EN">EN</option>
                                </select>
                            </form>
                            <Link to="/user-login"><button>Log in</button></Link>
                        </div>
                        <div className="login" style={{marginTop: '75px'}}>
                            <div className='top text-center'>
                                <h2>Registration</h2>
                            </div>
                            <form action="">
                                <div className="input">
                                    <label htmlFor="firstname">First name</label>
                                    <input type="text" name="firstname" id="firstname" placeholder='Juliette' />
                                </div>
                                <div className="input">
                                    <label htmlFor="lastname">Last name</label>
                                    <input type="text" name="lastname" id="lastname" placeholder='Dupont' />
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

export default UserSignup