import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({greetings = '', lista = ''}) => {
    return (
        <div>
            <h1 className='saludo1'>{greetings}</h1>
            <h2 className='saludo2'>{lista}</h2>
        </div>
    )
}
