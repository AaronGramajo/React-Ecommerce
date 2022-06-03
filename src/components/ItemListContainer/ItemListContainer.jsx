import React, { useEffect, useState } from 'react'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom'

import { ItemList } from '../ItemList/ItemList'

import './ItemListContainer.css'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { itemCategoria } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'Items')
        const queryCollectionFilter = itemCategoria ? query(queryCollection, where('category', '==', itemCategoria)) : queryCollection
        getDocs(queryCollectionFilter)
        .then(resp => setProductos( resp.docs.map(item => ( {id: item.id, ...item.data() } ) ) ) )
        .catch(console.error())
        .finally(() => setLoading(false))
    }, [itemCategoria])

    return (
        <div className='contenedorItemListContainer'>
            {loading
                ?
                <h2>cargando...</h2>
                :
                <ItemList productos={productos} />
            }
        </div>
    )
}
