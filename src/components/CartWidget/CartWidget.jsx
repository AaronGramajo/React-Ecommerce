import React from 'react'
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    return (
        <div>
            <Link to='/cart'>
                <FontAwesomeIcon className='icono-cart' icon={faShoppingCart} bounce />
            </Link>
        </div>
    )
}
