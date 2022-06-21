import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'

export const Item = ({ product }) => {
    return (
        <div className='itemContainer'>
            <div className='card' id={product.id}>
                <div className='img-container'>
                    <img src={product.photo} alt="" className='card-img-top' />
                </div>
                <div className='card-body'>
                    <h2 className='card-name'>{product.title}</h2>
                    <p className='card-price'><strong className='price'>Precio ${product.price}</strong></p>
                    <Link to={`/details/${product.id}`}>
                        <button className='seeMoreButton btn'><span className='btn-text'>Ver mas</span></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
