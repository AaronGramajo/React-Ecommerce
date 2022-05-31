import React from 'react'
import './Cart.css'
import { useCartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"

export const Cart = () => {
    const { cartList, vaciarCarrito, eliminarItem, totalPrice } = useCartContext()
    return (
        <div className='contenedorCart'>
            {cartList.length === 0
                ?
                <div>
                    <h3>Vaya! Parece que no hay nada en tu carrito!</h3>
                    <h4>Vamos a comprar?</h4>
                    <Link to='/'>
                        <button className='homeButton'>Ir al home</button>
                    </Link>
                </div>
                :
                <>
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
                    <button className='buttonFinishPurchase'>Terminar mi compra!</button>
                    <button className='buttonDeleteAllProducts' onClick={vaciarCarrito}>Vaciar carrito</button>
                </>
            }
        </div>
    )
}
