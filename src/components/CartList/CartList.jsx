import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

import './CartList.css'

export const CartList = () => {
    const { cartList, emptyCart, deleteItem, totalPrice } = useCartContext()
    return (
        <div className='cartListContainer'>
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
                    {cartList.map(product =>
                        <tr className='line' key={product.id} >
                            <td>{product.title}</td>
                            <td>{product.quantity}</td>
                            <td><button className='buttonDeleteItem' onClick={() => deleteItem(product.id)}>X</button></td>
                            <td>{product.price}</td>
                        </tr>)}
                </tbody>
                <tfoot >
                    <tr>
                        <th>Total: $ {totalPrice()} </th>
                    </tr>
                </tfoot>
            </table>
            <Link to='/checkOut'>
            <button className='buttonFinishPurchase btn rounded'><span className='btn-text'>Terminar mi compra!</span></button>
            </Link>
            <button className='buttonDeleteAllProducts btn rounded' onClick={emptyCart}><span className='btn-text'>Vaciar carrito</span></button>
        </div>
    )
}
