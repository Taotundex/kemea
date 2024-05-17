import React from 'react'
import './Plan.css'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

function Plan() {
  return (
    <div className='plan'>
        <div className="hero text-center">
            <div className="container">
                <h1>Affordable plans that grow with your business</h1>
                <small>All plans come with a 14-day free trial.</small>
            </div>
        </div>
        <div className="empty"></div>
        <div className="all-plans">
            <div className="container mb-5">
                <div className="row g-4">
                    <div className="col col-lg-4 col-md-6 col-12">
                        <div className="starter p-4 text-center shadow-sm">
                            <h4>Starter</h4>
                            <h2>FREE</h2>
                            <p>Lifetime</p>
                            <small>0% transaction fee</small>
                            <p className='py-lg-5 py-md-4 py-4'>Up to $7,500/mo from affiliates</p>
                            <ul>
                                <li><IoCheckmarkCircleOutline className='check' />Unlimited affiliates</li>
                                <li><IoCheckmarkCircleOutline className='check' />Unlimited visitors</li>
                                <li><IoCheckmarkCircleOutline className='check' />Up to 2 team members</li>
                                <li><IoCheckmarkCircleOutline className='check' />All integrations</li>
                                <li><IoCheckmarkCircleOutline className='check' />REST API access</li>
                                <li><IoCheckmarkCircleOutline className='check' />PayPal Mass Payouts</li>
                                <li><IoCheckmarkCircleOutline className='check' />Wise Bulk Payouts</li>
                                <li><IoCheckmarkCircleOutline className='check' />Chat & email support</li>
                                <li><IoCheckmarkCircleOutline className='check' />Multiple currencies</li>
                                <li><IoCheckmarkCircleOutline className='check' />Self-referral fraud detection</li>
                                <li><IoCheckmarkCircleOutline className='check' />Last touch attribution</li>
                                <li className='light'><IoCheckmarkCircleOutline className='check' />Multiple campaigns</li>
                                <li className='light'><IoCheckmarkCircleOutline className='check' />Branded affiliate portal</li>
                                <li className='light'><IoCheckmarkCircleOutline className='check' />Custom domain</li>
                                <li className='light'><IoCheckmarkCircleOutline className='check' />Unlimited team members</li>
                                <li className='light'><IoCheckmarkCircleOutline className='check' />Double-sided incentives</li>
                                <li className='light'><IoCheckmarkCircleOutline className='check' />Private invite-only campaigns</li>
                                <li className='light'><IoCheckmarkCircleOutline className='check' />Custom rewards</li>
                                <li className='light'><IoCheckmarkCircleOutline className='check' />Custom scripts</li>
                                <li className='light'><IoCheckmarkCircleOutline className='check' />Custom agreement</li>
                            </ul>
                            <button>Start with Starter</button>
                            <p className='last'>14-day free trial</p>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-12">
                        <div className="growth p-4 text-center shadow">
                            <h6>Most Popular</h6>
                            <h4>Growth</h4>
                            <div className="d-flex align-items-center justify-content-center">
                                $
                                <h2>00</h2>
                            </div> 
                            <p>Per Month</p>
                            <small>0% transaction fee</small>
                            <p className='py-5'>Up to $15,000/mo from affiliates</p>
                            <ul>
                                <li><IoCheckmarkCircleOutline className='check' />Unlimited affiliates</li>
                                <li><IoCheckmarkCircleOutline className='check' />Unlimited visitors</li>
                                <li><IoCheckmarkCircleOutline className='check' />Up to 2 team members</li>
                                <li><IoCheckmarkCircleOutline className='check' />All integrations</li>
                                <li><IoCheckmarkCircleOutline className='check' />REST API access</li>
                                <li><IoCheckmarkCircleOutline className='check' />PayPal Mass Payouts</li>
                                <li><IoCheckmarkCircleOutline className='check' />Wise Bulk Payouts</li>
                                <li><IoCheckmarkCircleOutline className='check' />Chat & email support</li>
                                <li><IoCheckmarkCircleOutline className='check' />Multiple currencies</li>
                                <li><IoCheckmarkCircleOutline className='check' />Self-referral fraud detection</li>
                                <li><IoCheckmarkCircleOutline className='check' />Last touch attribution</li>
                                <li><IoCheckmarkCircleOutline className='check' />Multiple campaigns</li>
                                <li><IoCheckmarkCircleOutline className='check' />Branded affiliate portal</li>
                                <li><IoCheckmarkCircleOutline className='check' />Custom domain</li>
                                <li><IoCheckmarkCircleOutline className='check' />Unlimited team members</li>
                                <li><IoCheckmarkCircleOutline className='check' />Double-sided incentives</li>
                                <li><IoCheckmarkCircleOutline className='check' />Private invite-only campaigns</li>
                                <li><IoCheckmarkCircleOutline className='check' />Custom rewards</li>
                                <li><IoCheckmarkCircleOutline className='check' />Custom scripts</li>
                                <li className='light'><IoCheckmarkCircleOutline className='check' />Custom agreement</li>
                            </ul>
                            <button>Start with Growth</button>
                            <p className='last'>14-day free trial</p>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-12">
                        <div className="starter enterprise p-4 text-center shadow-sm">
                            <h4>Enterprise</h4>
                            <div className="d-flex align-items-center justify-content-center">
                                $
                                <h2>000</h2>
                            </div> 
                            <p>Per Month</p>
                            <small>0% transaction fee</small>
                            <p className='py-5'>Over $15,000/mo from affiliates</p>
                            <ul>
                                <li><IoCheckmarkCircleOutline className='check' />Unlimited affiliates</li>
                                <li><IoCheckmarkCircleOutline className='check' />Unlimited visitors</li>
                                <li><IoCheckmarkCircleOutline className='check' />Up to 2 team members</li>
                                <li><IoCheckmarkCircleOutline className='check' />All integrations</li>
                                <li><IoCheckmarkCircleOutline className='check' />REST API access</li>
                                <li><IoCheckmarkCircleOutline className='check' />PayPal Mass Payouts</li>
                                <li><IoCheckmarkCircleOutline className='check' />Wise Bulk Payouts</li>
                                <li><IoCheckmarkCircleOutline className='check' />Chat & email support</li>
                                <li><IoCheckmarkCircleOutline className='check' />Multiple currencies</li>
                                <li><IoCheckmarkCircleOutline className='check' />Self-referral fraud detection</li>
                                <li><IoCheckmarkCircleOutline className='check' />Last touch attribution</li>
                                <li><IoCheckmarkCircleOutline className='check' />Multiple campaigns</li>
                                <li><IoCheckmarkCircleOutline className='check' />Branded affiliate portal</li>
                                <li><IoCheckmarkCircleOutline className='check' />Custom domain</li>
                                <li><IoCheckmarkCircleOutline className='check' />Unlimited team members</li>
                                <li><IoCheckmarkCircleOutline className='check' />Double-sided incentives</li>
                                <li><IoCheckmarkCircleOutline className='check' />Private invite-only campaigns</li>
                                <li><IoCheckmarkCircleOutline className='check' />Custom rewards</li>
                                <li><IoCheckmarkCircleOutline className='check' />Custom scripts</li>
                                <li><IoCheckmarkCircleOutline className='check' />Custom agreement</li>
                            </ul>
                            <button>Start with Enterprise</button>
                            <p className='last'>14-day free trial</p>
                        </div>
                    </div>
                </div>
                <center className='my-5' style={{color: '#4F5C65', fontWeight: '500', fontSize: '16px'}}>Get <b>2 months free</b> when you choose to sign up for annual billing!</center>
                <div className="text-center">
                    <button className='m-auto' style={{borderRadius: '55px', height: '55px', width: '540px', border: 'none', background: '#E9EEF1', color: '#4F5C65', fontSize: '16px'}}>Do you require a custom plan? <b style={{color: '#0047FF', fontWeight: '500'}}>Get in touch</b></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plan