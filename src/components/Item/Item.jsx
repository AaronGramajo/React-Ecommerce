import React from 'react'
import './Item.css'

export const Item = ({producto}) => {
    return (
        <div className='contenedorItem'>
            <div className='card' id={producto.id}>
                <img src={producto.foto} alt="" className='card-img-top' />
                <div className='card-body'>
                    <h2 className='card-name'>{producto.title}</h2>
                    <p className='card-precio'>precio ${producto.price}</p>
                    <button className='botonVerMas'>Ver mas</button>
                </div>
            </div>
        </div>
    )
}
