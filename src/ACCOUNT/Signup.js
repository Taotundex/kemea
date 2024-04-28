import React from 'react'
import { Link } from 'react-router-dom'
import './Account.css'
import signupImg from '../images/signup-img.png'

function Signup() {
  return (
    <div className='account'>
        <div className="row g-0">
            <div className="col col-lg-7 col-md-6 col-12 left">
                <img src={signupImg} width="100%" alt="" />
            </div>
            <div className="col col-lg-5 col-md-6 col-12">
                <div className="right">
                    <div className="head d-flex align-items-center gap-2 mt-4 ms-auto" style={{width: 'fit-content'}}>
                        <form action="">
                            <select name="language" id="language">
                                <option value="EN">EN</option>
                            </select>
                        </form>
                        <Link to="/login"><button>Log in</button></Link>
                    </div>
                    <div className="mylogin">
                        <div className="login">
                            <div className='top text-center'>
                                <h2>Registration</h2>
                            </div>
                            <form action="">
                                <div className="row g-4">
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
                                <Link to="" className='small mt-2 text-decoration-none' style={{float: 'right'}}>Forgot your password ?</Link>
                                <button type='submit' className='my-5'>Sign up</button>
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