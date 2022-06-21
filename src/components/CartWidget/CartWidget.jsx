import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartContext } from '../../context/CartContext';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './CartWidget.css'

export const CartWidget = () => {
    const {totalQuantity} = useCartContext()

    return (
        <div className='cartWidgetContainer'>
            <Link to='/cart'>
                <FontAwesomeIcon className='cart-icon' icon={faShoppingCart} bounce />
            </Link>
            {totalQuantity() !== 0 && totalQuantity()}
        </div>
    )
}
