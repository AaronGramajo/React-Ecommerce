import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'

import './ItemDetail.css'

export const ItemDetail = ({ product }) => {
    const { addToCart } = useCartContext()

    const [toCart, setToCart] = useState(false)

    const onAdd = (quantity) => {
        addToCart({ ...product, quantity: quantity })
        setToCart(true)
    }

    return (
        <div className='itemDetailsContainer'>
            <div>
                <div className='photoContainer'>
                    <img src={product.photo} alt="" className='imageOfProduct' />
                </div>
            </div>
            <div className='detailContainer'>
                <div className='bodyContainer'>
                    <div className='productName'>{product.title}</div>
                    <div className='productPrice'>${product.price}</div>
                    <div className='productDescription'>{product.description}</div>
                    <div className={(product.stock > 0) ? 'inStockContainer' : 'outOfStockContainer'}>
                        {(product.stock > 0) ? <span className='stock'>stock disponible {product.stock}</span> : <span className='stock'>no hay mas stock</span>}
                    </div>

                    {!toCart
                        ?
                        <ItemCount initial={1} maxStock={product.stock} onAdd={onAdd} />
                        :
                        <div className='toCartButton'>
                            <Link to={'/cart'}>
                                <button className='buttonCart btn rounded'><span className='text-btn'>Ir al carrito</span></button>
                            </Link>
                            <Link to={'/'}>
                                <button className='buttonHome btn rounded'><span className='text-btn'>Seguir comprando</span></button>
                            </Link>
                        </div>}
                </div>
            </div>
        </div>
    )
}
