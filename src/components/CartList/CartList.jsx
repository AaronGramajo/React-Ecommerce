import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

import './CartList.css'

export const CartList = () => {
    const { cartList, emptyCart, eliminarItem, totalPrice } = useCartContext()
    return (
        <div className='contenedorCartList'>
            <div>
                <h2>Tu Pedido</h2>
            </div>
            <table className='checkOutTable'>
                <thead className='tableHead line'>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Accion</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(producto =>
                        <tr className='line' key={producto.id} >
                            <td>{producto.title}</td>
                            <td>{producto.cantidad}</td>
                            <td><button className='buttonDeleteItem' onClick={() => eliminarItem(producto.id)}>X</button></td>
                            <td>{producto.price}</td>
                        </tr>)}
                </tbody>
                <tfoot >
                    <tr>
                        <th>Total: $ {totalPrice()} </th>
                    </tr>
                </tfoot>
            </table>
            <Link to='/checkOut'>
            <button className='buttonFinishPurchase'>Terminar mi compra!</button>
            </Link>
            <button className='buttonDeleteAllProducts' onClick={emptyCart}>Vaciar carrito</button>
        </div>
    )
}
