import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Account.css'
import { RiAppleLine, RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri'
import { FaGoogle } from 'react-icons/fa'
import $ from 'jquery';
// import loginImg from '../images/login-img.png'

function UserLogin() {
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
                                <select name="language" id="language" className='select2'>
                                    <option value="EN">EN</option>
                                </select>
                            </form>
                            <Link to="/signup"><button>Sign up</button></Link>
                        </div>
                        <div className="login">
                            <div className='top text-center'>
                                <h2>Login <br />& Registration</h2>
                                <p>Log in or create your account to find Kemea opportunities</p>
                            </div>
                            <form action="">
                                <div className="input">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name="email" id="email" placeholder='Ex: juliette.dupont@mail.com' />
                                </div>
                                <div className="input">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder='............' />
                                </div>
                                <Link to="" className='small mt-lg-2 mt-0 text-decoration-none' style={{float: 'right'}}>Forgot your password ?</Link>
                                <Link to='/user-home'><button type='submit' className='my-5 mb-3'>Log in</button></Link>
                                <center className="mb-3">or</center>
                                <button className="or d-flex align-items-center justify-content-center my-3 gap-2">
                                    <FaGoogle />Continue with Google
                                </button>
                                <button className="or d-flex align-items-center justify-content-center my-3 gap-2">
                                    <RiAppleLine />Continue with Apple
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserLogin