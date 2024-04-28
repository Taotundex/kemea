import React from 'react'
import { Link } from 'react-router-dom'
import './Account.css'
import loginImg from '../images/login-img.png'

function Login() {
  return (
    <div className='account'>
        <div className="row g-0">
            <div className="col col-lg-7 col-md-6 col-12 left">
                <img src={loginImg} width="100%" alt="" />
            </div>
            <div className="col col-lg-5 col-md-6 col-12">
                <div className="right">
                    <div className="head d-flex align-items-center gap-2 mt-4 ms-auto" style={{width: 'fit-content'}}>
                        <form action="">
                            <select name="language" id="language">
                                <option value="EN">EN</option>
                            </select>
                        </form>
                        <Link to="/signup"><button>Sign up</button></Link>
                    </div>
                    <div className="mylogin">
                        <div className="login">
                            <div className='top text-center'>
                                <h2>Login <br />to Kemea Pro</h2>
                                <p>Log in to your Kemea Pro account to find Kemea opportunities</p>
                            </div>
                            <form action="">
                                <div className="input">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name="email" id="email" placeholder='Ex: david.doe@mail.com' />
                                </div>
                                <div className="input">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder='............' />
                                </div>
                                <Link to="" className='small mt-2 text-decoration-none' style={{float: 'right'}}>Forgot your password ?</Link>
                                <button type='submit' className='my-5'>Log in</button>
                                <p>Don’t have an account ? <Link to='signup' className='small text-decoration-none'>Sign up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login