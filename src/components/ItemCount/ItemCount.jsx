import React, { useState } from 'react'

import './ItemCount.css'

export const ItemCount = ({ initial, maxStock, onAdd}) => {
    let [quantity, setQuantity] = useState(initial)

    const increase = () => {
        if (quantity < maxStock ) {
            setQuantity(quantity + 1)
        }
    }

    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
    <div className='itemCountContainer'>
        <div className='buttonContainer'>
            <div className='buttonQuantityContainer'>
                <button className='minusButton buttonCounter' onClick={decrease}>-</button>
                <span> {quantity} </span>
                <button className='plusButton buttonCounter' onClick={increase}>+</button>
            </div>
        </div>
        <div className='buttonCountContainer'>
            <button disabled={maxStock <= 0} className='addToCartButton btn rounded' onClick={()=>onAdd(quantity)}> <span className='text-btn'>Agregar al carrito</span> </button>
        </div>
    </div>
    )
}
