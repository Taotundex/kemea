import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { GoGlobe } from "react-icons/go";
import { TbCurrencyShekel } from "react-icons/tb";
import English from '../images/English.png'
import Hebrew from '../images/Hebrew.png'

function Footer() {
  return (
    <div className='homeFooter'>
        <div className='container'>
            <div className='d-flex justify-content-between py-3 general'>
                <ul className='d-flex justify-content-between align-items-center'>
                    <li className='list'>&copy; 2023 Kemea</li>
                    <li><Link className='text-dark text-decoration-none' to='/confidentialité'>Confidentialité</Link></li>
                    <li><Link className='text-dark text-decoration-none' to='/conditions-générales'>Conditions générales</Link></li>
                    <li><Link className='text-dark text-decoration-none' to='/fonctionnement-du-site'>Fonctionnement du site</Link></li>
                    <li><Link className='text-dark text-decoration-none' to='/infos-sur-lentreprise'>Infos sur l'entreprise</Link></li>
                </ul>
                <ul className='d-flex lang'>
                    <div className="dropup-center dropup">
                        <li className='d-flex align-items-center gap-2' data-bs-toggle="dropdown" aria-expanded="false">
                            <GoGlobe />
                            Français(FR)
                        </li>
                        <ul class="dropdown-menu">
                            <li className='d-flex gap-2 align-items-center p-3' style={{fontSize: '13px', fontWeight: '400', lineHeight:'0', color: '#1D234E'}}>
                                <img src={English} alt="" />
                                English (EN)</li>
                            <li className='d-flex gap-2 align-items-center p-3' style={{fontSize: '13px', fontWeight: '400', lineHeight:'0', color: '#1D234E'}}>
                                <img src={Hebrew} alt="" />
                                Hebrew (HE)</li>
                        </ul>
                    </div>
                    <div className="dropup-center dropup">
                        <li className='d-flex align-items-center gap-2'  data-bs-toggle="dropdown" aria-expanded="false">
                            <TbCurrencyShekel />
                            NIS
                        </li>
                        <ul class="dropdown-menu">
                            <li className='d-flex gap-2 align-items-center p-3' style={{width: 'fit-content', fontSize: '13px', fontWeight: '400', lineHeight:'0', color: '#1D234E'}}>
                                <b style={{fontSize: '18px !important'}}>€</b>
                                Euro</li>
                            <li className='d-flex gap-2 align-items-center p-3' style={{width: 'fit-content', fontSize: '13px', fontWeight: '400', lineHeight:'0', color: '#1D234E'}}>
                                <b style={{fontSize: '18px !important'}}>$</b>
                                Dollar</li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer