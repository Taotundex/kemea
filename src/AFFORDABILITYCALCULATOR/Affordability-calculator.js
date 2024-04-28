import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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


        <div className="how">
          <div className="head">
            <h2>How we calculate how much house you can afford ?</h2>
          </div>
          <div className="details">
            <ol>
              <li>
                RÉFÉRENCEMENT ET DERÉFÉRENCEMENT DES ANNONCEURS :
                <ol className="numerals">
                  <li>(i) Référencement des Annonceurs :
                    <p>La diffusion d’annonces sur le Site est réservée aux Annonceurs définis ci-dessous :</p>
                    <ol className="numerals">
                      <li>Annonceurs professionnels ayant souscrit à titre payant un contrat de diffusion d’annonces de vente de biens immobiliers avec la société DCF et entrant dans l’une des catégories suivantes :
                        <ul>
                          <li>les professionnels de l’immobilier détenant une carte de transaction ou de gestion conformément à la loi Hoguet n° 70-9 du 2 janvier 1970,</li>
                          <li>les notaires,</li>
                          <li>les avocats exerçant à titre accessoire l’activité de mandataire en transactions immobilières,</li>
                          <li>les huissiers,</li>
                          <li>les promoteurs immobiliers,</li>
                          <li>les constructeurs.</li>
                        </ul>
                      </li>
                      <li>Référencement des Annonces :
                        <p>Pour être référencée sur le Site et donc diffusée, une Annonce doit impérativement respecter les règles décrites ci-dessous.</p>
                        <div className="one">
                          <p className="ps-5 text-decoration-underline">Contenu de l’Annonce</p>
                          <p>Le bien doit être diffusé dans sa catégorie et être conforme aux produits de diffusion souscrits par l’Annonceur. Sur le Site, l’Annonce ne peut porter que sur :</p>
                          <ul className='dash'>
                            <li>la vente et la location de biens anciens, ayant déjà fait l’objet d’un transfert de propriété;</li>
                            <li>la vente de lots associés à des programmes immobiliers neufs, n’ayant pas encore fait l’objet d’un transfert de propriété.</li>
                          </ul>
                          <p><Link to='https://www.support.myselogerpro.com/hc/fr/articles/360006057939-Charte-SeLoger'>https://support.myselogerpro.com/hc/fr/articles/360006057939-Charte-SeLoger</Link></p>
                        </div>
                        <div className="one">
                          <p className="ps-5 text-decoration-underline">Contenu de l’Annonce</p>
                          <p>Toute Annonce contenant des éléments qui sembleraient contraires aux dispositions légales ou réglementaires, aux bonnes mœurs, aux règles de diffusion de notre Site ou susceptible de heurter les utilisateurs sera immédiatement refusée par la société DCF, donc non référencée sur le Site.</p>
                          <p>Est notamment strictement interdit :</p>
                          <ul>
                            <li>Tout contenu rédigé en langue étrangère comportant des termes ou des descriptions sans lien avec le contenu proposé ;</li>
                            <li>Tout contenu comportant des termes ou des descriptions sans lien avec le contenu proposé ;</li>
                            <li>Tout contenu portant sur un bien immobilier ou programme de construction fictif ;</li>
                            <li>Tout contenu frauduleux, ou visant à tromper l’Utilisateur ;</li>
                            <li>Tout contenu à caractère politique, religieux ou haineux ;</li>
                            <li>Tout contenu à caractère promotionnel et/ou publicitaire ;</li>
                            <li>Toute image ou photographie sans lien avec l’offre proposée, non autorisée, contrefaisante, ou encore à caractère pornographique.</li>
                          </ul>

                          <table class="table table-bordered mx-auto my-5">
                            <thead>
                              <tr>
                                <th scope="col">Percentage</th>
                                <th scope="col">Down Payment</th>
                                <th scope="col">Home Price</th>
                                <th scope="col">Monthly Mortgage Payment</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>20%</td>
                                <td>$60,000</td>
                                <td>$300,000</td>
                                <td>$1,179.39</td>
                              </tr>
                              <tr>
                                <td>20%</td>
                                <td>$60,000</td>
                                <td>$300,000</td>
                                <td>$1,179.39</td>
                              </tr>
                              <tr>
                                <td>20%</td>
                                <td>$60,000</td>
                                <td>$300,000</td>
                                <td>$1,179.39</td>
                              </tr>
                              <tr>
                                <td>20%</td>
                                <td>$60,000</td>
                                <td>$300,000</td>
                                <td>$1,179.39</td>
                              </tr>
                              <tr>
                                <td>20%</td>
                                <td>$60,000</td>
                                <td>$300,000</td>
                                <td>$1,179.39</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>
                      <li>Référencement des Annonces 
                        <p>Pour être référencée sur le Site et donc diffusée, une Annonce doit impérativement respecter les règles décrites ci-dessous.</p>
                        <div className="one">
                          <p className="ps-5 text-decoration-underline">Contenu de l’Annonce</p>                          
                          <p>Le bien doit être diffusé dans sa catégorie et être conforme aux produits de diffusion souscrits par l’Annonceur. Sur le Site, l’Annonce ne peut porter que sur :</p>
                          <ul className='dash'>
                            <li>la vente et la location de biens anciens, ayant déjà fait l’objet d’un transfert de propriété;</li>
                            <li>la vente de lots associés à des programmes immobiliers neufs, n’ayant pas encore fait l’objet d’un transfert de propriété.</li>
                          </ul>
                          <p><Link to='https://www.support.myselogerpro.com/hc/fr/articles/360006057939-Charte-SeLoger'>https://support.myselogerpro.com/hc/fr/articles/360006057939-Charte-SeLoger</Link></p>
                        </div>
                        <div className="one">
                          <p className="ps-5 text-decoration-underline">Contenu de l’Annonce</p>
                          <p>Toute Annonce contenant des éléments qui sembleraient contraires aux dispositions légales ou réglementaires, aux bonnes mœurs, aux règles de diffusion de notre Site ou susceptible de heurter les utilisateurs sera immédiatement refusée par la société DCF, donc non référencée sur le Site.</p>
                          <p>Est notamment strictement interdit :</p>
                          <ul>
                            <li>Tout contenu rédigé en langue étrangère comportant des termes ou des descriptions sans lien avec le contenu proposé ;</li>
                            <li>Tout contenu comportant des termes ou des descriptions sans lien avec le contenu proposé ;</li>
                            <li>Tout contenu portant sur un bien immobilier ou programme de construction fictif ;</li>
                            <li>Tout contenu frauduleux, ou visant à tromper l’Utilisateur ;</li>
                            <li>Tout contenu à caractère politique, religieux ou haineux ;</li>
                            <li>Tout contenu à caractère promotionnel et/ou publicitaire ;</li>
                            <li>Toute image ou photographie sans lien avec l’offre proposée, non autorisée, contrefaisante, ou encore à caractère pornographique.</li>
                          </ul>
                        </div>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Affordabilitycalculator