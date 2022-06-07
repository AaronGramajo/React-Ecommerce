import React, { useState } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'

export const ItemDetail = ({ producto }) => {
    const { addToCart } = useCartContext()

    const [toCart, setToCart] = useState(false)

    const onAdd = (cant) => {
        addToCart({ ...producto, cantidad: cant })
        setToCart(true)
    }

    return (
        <div className='contenedorItemDetail'>
            <div className='contenedorDetail'>
                <div className='contenedorFoto'>
                    <img src={producto.photo} alt="" className='imagenDeProducto' />
                </div>
                <div className='contenedorBody'>
                    <div className='productName'>{producto.title}</div>
                    <div className='productPrice'>${producto.price}</div>
                    <div className='productDescription'>{producto.description}</div>
                    <div className={(producto.stock > 0) ? 'contenedorStock' : 'contenedorOutOfStock'}>
                        {(producto.stock > 0) ? <span className='stock'>stock disponible {producto.stock}</span> : <span className='stock'>no hay mas stock</span>}
                    </div>

                    {!toCart
                        ?
                        <ItemCount inicial={1} maxStock={producto.stock} onAdd={onAdd} />
                        :
                        <div className='bottonsToCart'>
                            <Link to={'/cart'}>
                                <button className='buttonCart'>Ir al carrito</button>
                            </Link>
                            <Link to={'/'}>
                                <button className='buttonHome'>Seguir comprando</button>
                            </Link>
                        </div>}
                </div>
            </div>
        </div>
    )
}
