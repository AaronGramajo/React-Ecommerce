import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import { fetchOneData } from '../../helpers/fetchOneData'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    useEffect(() => {
        fetchOneData()
        .then(respuesta=>setProducto(respuesta))
        .catch((err) => console.log(err))
    },[])

    return (
        <div className='contenedorItemDetailContainer'>
            <h2>itemDetailContainer</h2>
            <ItemDetail producto = {producto} />
        </div>
    )
}
