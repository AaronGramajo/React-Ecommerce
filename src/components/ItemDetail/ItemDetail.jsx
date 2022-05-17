import React from 'react'
import './ItemDetail.css'
import {ItemCount} from '../ItemCount/ItemCount'

export const ItemDetail = ({producto}) => {
    return (
        <div className='contenedorItemDetail'>
            <div className='contenedorDetail'>
                <div className='contenedorFoto'>
                    <img src={producto.foto} alt="" className='imagenDeProducto'/>
                </div>
                <div className='contenedorBody'>
                    <div className='productName'>{producto.title}</div>
                    <div className='productPrice'>{producto.price}</div>
                    <div className='productDescription'>{producto.description}</div>
                    <ItemCount inicial={1} stock={5} onAdd={()=>console.log('agregado al carrito')} />
                </div>
            </div>
        </div>
    )
}
