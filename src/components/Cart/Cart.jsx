import React from 'react'
import { Link } from "react-router-dom"

import { useCartContext } from '../../context/CartContext'
import { CartList } from '../CartList/CartList'

import './Cart.css'

export const Cart = () => {
    const { cartList } = useCartContext()
    return (
        <div className='CartContainer'>
            {cartList.length === 0
                ?
                <div>
                    <h3>Vaya! Parece que no hay nada en tu carrito!</h3>
                    <h4>Vamos a comprar?</h4>
                    <Link to='/'>
                        <button className='homeButton btn rounded'><span className='btn-text'>Ir al home</span></button>
                    </Link>
                </div>
                :
                <CartList/>
            }
        </div>
    )
}
