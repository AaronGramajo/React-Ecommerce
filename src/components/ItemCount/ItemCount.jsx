import React, { useState } from 'react'

import './ItemCount.css'

export const ItemCount = ({ inicial, maxStock, onAdd}) => {
    let [cantidad, setCantidad] = useState(inicial)

    const aumentar = () => {
        if (cantidad < maxStock ) {
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
        <div className='contenedorBotones'>
            <div className='contenedorBotonCantidad'>
                <button className='botonMenos botonContador' id='botonMenos' onClick={restar}>-</button>
                <span> {cantidad} </span>
                <button className='botonMas botonContador' id='botonMas' onClick={aumentar}>+</button>
            </div>
        </div>
        <div className='contenedorBotonCount'>
            <button className='botonAgregarCarrito' onClick={()=>onAdd(cantidad)}>Agregar al carrito</button>
        </div>
    </div>
    )
}
