import React from 'react'
import { GoPlus } from 'react-icons/go'
import { RiSearchLine } from 'react-icons/ri'
import image from '../../images/image.png'
import './ProStyle.css'
import { PiHouseFill } from 'react-icons/pi'
import { GiHourglass } from 'react-icons/gi'
import { ImPencil } from 'react-icons/im'
import { Link } from 'react-router-dom'

function ProHome() {
  return (
    <div className='pro' style={{marginTop: '70px'}}>
        <h2 className='header'>
            <div className="container py-5">
                We are happy to have you back <span>David Doe</span>
            </div>
        </h2>
        <div className="container">
            <div className='myads'>
                <div className="d-flex align-items-center justify-content-between py-3 ads">
                    <h4>2 ads</h4>
                    <Link to='/pro/publish' className="button d-flex align-items-center justify-content-center gap-2 text-decoration-none">
                        <GoPlus className='fs-5' />Créer une annonce
                    </Link>
                </div>
                <div className="d-flex align-items-center gap-4 head">
                    <form action="" className='d-flex align-items-center gap-1'>
                        <RiSearchLine />
                        <input type="text" name="search" id="search" placeholder='Rechercher' />
                    </form>
                    <button>Vente</button>
                    <button>Achat</button>
                    <button>Annonces à actualiser</button>
                </div>
            </div>
            <div className="mytable w-100">
                <table class="table my-4 w-100">
                    <thead>
                        <tr>
                            <th scope="col">
                                <label htmlFor="annonce" className='d-flex align-items-center gap-3 fw-bold'>
                                    <input type="checkbox" name="annonce" id="annonce" />
                                    ANNONCE
                                </label>
                            </th>
                            <th scope="col">STATUT</th>
                            <th scope="col">À FAIRE</th>
                            <th scope="col">BOOST</th>
                            <th scope="col">COUP DE COEUR</th>
                            <th scope="col">TYPE</th>
                            <th scope="col">EMPLACEMENT</th>
                            <th scope="col">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="annonce" className='d-flex align-items-center gap-3 fw-bold'>
                                    <input type="checkbox" name="annonce" id="annonce" />
                                    <PiHouseFill className='house' />
                                    Cottage - Ra’anana
                                </label>
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <GiHourglass className='fs-4' />En cours
                                </div>
                            </td>
                            <td>
                                <button className="d-flex align-items-center">Terminer</button>
                            </td>
                            <td>
                                <label htmlFor="boost" className='d-flex align-items-center gap-2'>
                                    <input type="radio" name="boost" id="boost" />
                                    No
                                </label>
                            </td>
                            <td>
                                <label htmlFor="coup" className='d-flex align-items-center gap-2'>
                                    <input type="radio" checked name="coup" id="coup" />
                                    Yes
                                </label>
                            </td>
                            <td>Achat</td>
                            <td></td>
                            <td>
                                <Link to='' className="d-flex align-items-center gap-2 text-dark">
                                    Modify<ImPencil className='text-decoration-none' />
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="annonce" className='d-flex align-items-center gap-3 fw-bold'>
                                    <input type="checkbox" name="annonce" id="annonce" />
                                    <img src={image} alt="" className="img" />
                                    Appartment - Tel Aviv
                                </label>
                            </td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <GiHourglass className='fs-4' />En cours
                                </div>
                            </td>
                            <td>
                                <button className="d-flex align-items-center">Terminer</button>
                            </td>
                            <td>
                                <label htmlFor="boost" className='d-flex align-items-center gap-2'>
                                    <input type="radio" checked name="boost" id="boost" />
                                    1/1
                                </label>
                            </td>
                            <td>
                                <label htmlFor="coup" className='d-flex align-items-center gap-2'>
                                    <input type="radio" name="coup" id="coup" />
                                    No
                                </label>
                            </td>
                            <td>Location</td>
                            <td></td>
                            <td>
                                <Link to='' className="d-flex align-items-center gap-2 text-dark">
                                    Modify<ImPencil className='text-decoration-none' />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ProHome