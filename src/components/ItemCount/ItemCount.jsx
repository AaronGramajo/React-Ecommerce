import React from 'react'
import './ItemCount.css'
import { useState } from 'react'

export const ItemCount = ({ inicial, stock, onAdd}) => {
    let [cantidad, setCantidad] = useState(inicial)

    const aumentar = () => {
        if (cantidad < stock ) {
            setCantidad(cantidad + 1)
        }
    }

    function restar() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
    <div className='contenedorItemCount'>
        <div className='contenedorItem'>
            <div className='contenedorItemDesc'>
            <p>foto de producto</p>
            </div>
            <div className='contenedorBotonCantidad'>
                <button className='botonMenos botonContador' id='botonMenos' onClick={restar}>-</button>
                <span id='cantidad'> {cantidad} </span>
                <button className='botonMas botonContador' id='botonMas' onClick={aumentar}>+</button>
            </div>
        </div>
        <div className='contenedorBotonCount'>
            <button className='botonAgregarCarrito' onClick={onAdd}>Agregar al carrito</button>
        </div>
        <div className='contenedorStock'>
        <span className='stock'>stock disponible {stock}</span>
        </div>
    </div>
    )
}
