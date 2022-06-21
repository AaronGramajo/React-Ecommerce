import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

import { ItemDetail } from '../ItemDetail/ItemDetail'

import './ItemDetailContainer.css'
import { Loader } from '../Loader/Loader'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { detailId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, 'Items', detailId)
        getDoc(dbQuery)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
            .catch(console.error())
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='itemDetailContainer'>
            {
                loading
                    ?
                    <Loader />
                    :
                    <ItemDetail product={product} />
            }
        </div>
    )
}
