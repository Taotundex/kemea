import React, { useEffect, useState } from 'react';
import { ReactCountryFlag } from 'react-country-flag';
import { Link, useNavigate } from 'react-router-dom';
import './Account.css';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';
import $ from 'jquery';

function UserSignup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = { firstName, lastName, email, password, phone, countryCode };
        console.warn(userData);

        try {
            const response = await fetch('api/v1/auth/user-account/create', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept':  'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to sign up');
            }

            const responseData = await response.json();
            console.log(responseData); 
            navigate('/user-home', { replace: true });
        } catch (error) {
            console.error('Error signing up:', error);
            alert(error )
        }
    };

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

    const handleCountryChange = (event) => {
        setCountryCode(event.target.value);
    };

  return (
    <div className='account'>
      <div className="row g-0">
        <div className="col col-lg-6 col-md-6 col-12">
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
                <form action="" onSubmit={handleSubmit}>
                  <select name="language" id="language" className='select2'>
                    <option value="EN">EN</option>
                  </select>
                </form>
                <Link to="/login"><button>Log in</button></Link>
              </div>
              <div className="login" style={{marginTop: '75px'}}>
                <div className='top text-center'>
                  <h2>Registration</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                  </div>
                  <div className="input">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                  </div>
                  <div className="input">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                  </div>
                  <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
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
                        <select onChange={handleCountryChange} className='select2'>
                          <option > ----- </option>
                          <option value="US">+1</option>
                          <option value="CA">+1</option>
                          <option value="GB">+44</option>
                        </select>
                      </div>
                      <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="inputs d-flex gap-2">
                      <input type="checkbox" name="receiveCommunication" id="receiveCommunication" />
                      <label htmlFor="receiveCommunication">Receive Kemea communications</label>
                    </div>
                    <div className="inputs d-flex gap-2">
                      <input type="checkbox" name="terms" id="terms" />
                      <label htmlFor="terms">I accept the <Link to='/confidentialité'>Terms of Service</Link> and the <Link to='/confidentialité'>Kemea Privacy Policy.</Link></label>
                    </div>
                  </div>
                  <button type='submit' className='my-3'>Sign up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
