import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { GoGlobe } from "react-icons/go";
import { TbCurrencyShekel } from "react-icons/tb";

function Footer() {
  return (
    <div className='homeFooter'>
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center py-3'>
                <ul className='d-flex justify-content-between align-items-center gap-5 me-5'>
                    <li className='list'>&copy; 2023 Kemea</li>
                    <li><Link className='text-dark text-decoration-none' to='/confidentialité'>Confidentialité</Link></li>
                    <li><Link className='text-dark text-decoration-none' to='/conditions-générales'>Conditions générales</Link></li>
                    <li><Link className='text-dark text-decoration-none' to='/fonctionnement-du-site'>Fonctionnement du site</Link></li>
                    <li><Link className='text-dark text-decoration-none' to='/infos-sur-lentreprise'>Infos sur l'entreprise</Link></li>
                </ul>
                <ul className='d-flex justify-content-between align-items-center gap-3 ms-5'>
                    <li className='d-flex justify-content-between align-items-center gap-2'>
                        <GoGlobe />
                        Français (FR)
                    </li>
                    <li className='d-flex justify-content-between align-items-center gap-2'>
                        <TbCurrencyShekel />
                        NIS
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer