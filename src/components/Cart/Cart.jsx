import React from 'react'
import { useCartContext } from '../../context/CartContext'

export const Cart = () => {
    const { cartList, vaciarCarrito, eliminarItem } = useCartContext()
    return (
        <div className='contenedorCart'>
            <div>
            {cartList.map(producto => <li key={producto.id} >{producto.title} - ${producto.price} - {producto.cantidad} <button onClick={() => eliminarItem(producto.id)}>X</button></li>)}
            </div>
            <button onClick={vaciarCarrito}>Vaciar carrito</button> 
        </div>
    )
}
