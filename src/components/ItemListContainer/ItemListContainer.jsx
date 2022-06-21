import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import banner from '../../assets/banner-gamer.jpg'

import './ItemListContainer.css'

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { itemCategory } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'Items')
        const queryCollectionFilter = itemCategory ? query(queryCollection, where('category', '==', itemCategory)) : queryCollection
        getDocs(queryCollectionFilter)
            .then(resp => setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
            .catch(console.error())
            .finally(() => setLoading(false))
    }, [itemCategory])

    return (
        <div className='container-wrapper'>
            {loading
                ?
                <Loader />
                :
                <div className='loadedContainer'>
                    <div className='banner-container'>
                        <img className='banner' src={banner} alt="chico jugando en su pc gamer" />
                    </div>
                    <div className='itemListContainer'>
                        <ItemList products={products} />
                    </div>
                </div>
            }
        </div>
    )
}
