import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { CartWidget } from '../CartWidget/CartWidget'
import Logo from '../../assets/logo_invert.jpg'

import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='header-wrapper'>
            <header className='NavBar'>
                <div className='top-nav'>
                    <div className='container-icon'>
                        <Link to='/'>
                            <img className='logo_invert' src={Logo} alt="" />
                        </Link>
                    </div>
                    <div className='container-input'>
                        <input type="text" className='input-search' id='input-search' placeholder='Buscar producto' />
                        <button className='button-search'><FontAwesomeIcon className='icono-magni' icon={faMagnifyingGlass} /></button>
                    </div>
                    <div className='container-social'>
                        <div className='container-whatsapp'>
                            <FontAwesomeIcon className='whatsapp-icon' icon={faWhatsapp} />
                        </div>
                        <div className='container-extra'>
                            +543515105255
                        </div>
                    </div>
                </div>
                <div className='bottom-nav'>
                    <div className='container-links'>
                        <ul className='links'>
                            <li className='link'><NavLink to={'/'} className='linkA' >HOME</NavLink></li>
                            <li className='link'><NavLink to={`/category/MotherBoards`} className='linkA' >MOTHERS</NavLink></li>
                            <li className='link'><NavLink to={`/category/Procesadores`} className='linkA' >PROCESADORES</NavLink></li>
                            <li className='link'><NavLink to={'/error404'} className='linkA' >ARMA TU PC</NavLink></li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </header>
        </div>
    )
}
