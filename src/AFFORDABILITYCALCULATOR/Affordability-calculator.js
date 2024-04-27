import React, { useState } from 'react'
import './Affordability-calculator.css'
import { RiArrowRightSLine } from "react-icons/ri";
import { PiDotOutlineFill } from "react-icons/pi";
import { TbCurrencyShekel } from "react-icons/tb";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

function Affordabilitycalculator() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='affordabilityCalculator'>
      <div className="container">
        <div className="py-3">
          <span>Kemea</span> <RiArrowRightSLine className='fs-4' /> <span className='text-primary'>Affordability Calculator</span>
        </div>
        <div className="calculate py-3">
          <div className="head text-center">
            <h2>AFFORDABILITY CALCULATOR</h2>
            <div className="line mx-auto"></div>
          </div>
          <div className="calc p-lg-5 p-md-3 p-2">
            <div className="row g-5">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="left pe-5">
                  <form action="" method="post">
                    <div className="netIncome pt-3">
                      <div className="top d-flex align-items-center justify-content-between">
                        <h5>Net Income</h5>
                        <h5>₪69,000</h5>
                      </div>
                      <div className="field py-1">
                        <label htmlFor="Annual household income" className='d-flex align-items-start gap-1'>Annual household income <PiDotOutlineFill className='mt-1' /></label>
                        <div className="input d-flex align-items-center">
                          <input type="text" name="annualHouseholdIncome" id="annualHouseholdIncome" value="$75,000" />
                          <div>/ year</div>
                        </div>
                        <small>Before taxes. Include any co-buyer's income.</small>
                      </div>
                      <div className="field py-1">
                        <label htmlFor="Monthly debts" className='d-flex align-items-start gap-1'>Monthly debts <PiDotOutlineFill className='mt-1' /></label>
                        <div className="input d-flex align-items-center">
                          <input type="text" name="monthlyDebts" id="monthlyDebts" value="$500" />
                          <div>/ month</div>
                        </div>
                        <small>Obligations like loan and debt payments or alimony, but not costs like groceries or utilities.</small>
                      </div>
                    </div>


                    <div className="downPayment pt-3">
                      <div className="top">
                        <h5>Down Payment</h5>
                      </div>
                      <div className="field py-1">
                        <label htmlFor="Cash" className='d-flex align-items-start gap-1'>Cash <PiDotOutlineFill className='mt-1' /></label>
                        <div className="input d-flex align-items-center">
                          <input type="text" name="cash" id="cash" value="$50,000" />
                          {/* <div>/ month</div> */}
                        </div>
                        <small>Cash you can pay when you close.</small>
                      </div>
                    </div>


                    <div className="location pt-3">
                      <div className="top">
                        <h5>Location</h5>
                      </div>
                      <div className="field py-1">
                        <label htmlFor="Where are you buying?" className='d-flex align-items-start gap-1'>Where are you buying? <PiDotOutlineFill className='mt-1' /></label>
                        <div className="input d-flex align-items-center">
                          <input type="text" name="location" id="location" placeholder="City, neighborhood, or zip" />
                          {/* <div>/ month</div> */}
                        </div>
                        <small>To calculate local taxes and costs.</small>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="right shadow-lg py-5 px-4">
                  <h1><TbCurrencyShekel /><span>---,---</span></h1>
                  <div className="payments py-4">
                    <div className="d-flex align-items-center justify-content-between py-2">
                      <h3>Monthly payment</h3>
                      <div className="cur fs-5 d-flex align-items-center gap-1">
                        <TbCurrencyShekel /><span>-,---</span>
                        <RiErrorWarningLine className='span' />
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between py-2">
                      <h3>Down payment</h3>
                      <div className="cur fs-5 d-flex align-items-center gap-1">
                        <span className='span1'>--.-</span>%
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center justify-content-between py-3">
                      <h3 className='fw-bold'>Debt-to-income ratio:</h3>
                    </div>
                    <div className="con">
                      {value}% | <span>Comfortable</span> 
                      <div className="slider">
                        <input type="range" min="0" max="100" value={value} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex btm pt-4 justify-content-between align-items-center">
                    Add a location to see homes that fit your budget 
                    <FaLocationDot className='text-primary fs-2' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Affordabilitycalculator