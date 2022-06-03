import React, { useEffect, useState } from 'react'
import {getFirestore , doc, getDoc} from 'firebase/firestore'
import './ItemDetailContainer.css'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {detailId} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, 'Items', detailId)
        getDoc(dbQuery)
        .then(resp => setProducto( {id: resp.id, ...resp.data()} ))
        .catch(console.error())
        .finally(() => setLoading(false))
    }, [])

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
