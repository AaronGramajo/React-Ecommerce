import React from 'react'
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const {totalQuantity} = useCartContext()

    return (
        <div className='contenedorCartWidget'>
            <Link to='/cart'>
                <FontAwesomeIcon className='icono-cart' icon={faShoppingCart} bounce />
            </Link>
            {totalQuantity() !== 0 && totalQuantity()}
        </div>
    )
}
