import React from 'react'
import './Footer.css'
import { GoGlobe } from "react-icons/go";
import { TbCurrencyShekel } from "react-icons/tb";

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center py-3'>
                <ul className='d-flex justify-content-between align-items-center gap-5 me-5'>
                    <li className='list'>&copy; 2023 Kemea</li>
                    <li>Confidentialité</li>
                    <li>Conditions générales</li>
                    <li>Fonctionnement du site</li>
                    <li>Infos sur l'entreprise</li>
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