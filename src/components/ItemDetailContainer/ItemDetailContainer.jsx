import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import { fetchData } from '../../helpers/fetchData'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {detailId} = useParams()

    useEffect(() => {
        fetchData(detailId)
        .then(respuesta=>setProducto(respuesta))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[])


    return (
        <div className='contenedorItemDetailContainer'>
            {
                loading
                ?
                <h2>cargando...</h2>
                :
                <ItemDetail producto = {producto} />
            }
        </div>
    )
}
