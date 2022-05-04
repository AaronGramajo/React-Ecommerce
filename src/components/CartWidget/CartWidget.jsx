import React from 'react'
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
    return (
        <div>
            <FontAwesomeIcon className='icono-cart' icon={faShoppingCart} bounce/>
        </div>
    )
}
