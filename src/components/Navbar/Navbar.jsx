import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/logo_invert.jpg'

export const Navbar = () => {
    return (
        <div className='header-wrapper'>
            <header className='NavBar'>
                <div className='top-nav'>
                    <div className='container-icono'>
                        <img className='logo_invert' src={Logo} alt="" />
                    </div>
                    <div className='container-input'>
                        <input type="text" className='input-search' id='input-search'  placeholder='Buscar producto'/>
                        <button><FontAwesomeIcon className='icono-magni' icon={faMagnifyingGlass} /></button>
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
                        <li className='link'><a className='linkA' href="/">HOME</a></li>
                        <li className='link'><a className='linkA' href="/">CATÁLOGO</a></li>
                        <li className='link'><a className='linkA' href="/">CONTACTO</a></li>
                        <li className='link'><a className='linkA' href="/">ARMA TU PC</a></li>
                    </ul>
                    </div>
                    <div>
                    <FontAwesomeIcon className='icono-cart' icon={faShoppingCart} bounce/>
                    </div>
                </div>
            </header>
        </div>
    )
}
