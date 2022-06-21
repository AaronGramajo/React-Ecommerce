import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='aboutSection'>
                <div>
                    <h1>DogeTech</h1>
                    <p>
                        <strong>WOW SUCH TECH, MUCH GAMER!!</strong>
                    </p>
                </div>
                <div className='informationSection'>
                    <h2>Informacion</h2>
                    <ul className='information'>
                        <li className='link link-footer'><Link to={'/'} className='linkA' >HOME</Link></li>
                        <li className='link link-footer'><Link to={`/category/MotherBoards`} className='linkA' >MOTHERS</Link></li>
                        <li className='link link-footer'><Link to={`/category/Procesadores`} className='linkA' >PROCESADORES</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Redes</h3>
                    <div className='social-Icons'>
                    <FontAwesomeIcon className='facebook-icon' icon={faFacebookF} />
                    <FontAwesomeIcon className='whatsapp-icon' icon={faWhatsapp} />
                    <FontAwesomeIcon className='whatsapp-icon' icon={faInstagram} />
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <span>Developed by Aaron Gramajo © Copyright 2020. Todos los derechos Reservados.</span>
            </div>
        </div>
    )
}
