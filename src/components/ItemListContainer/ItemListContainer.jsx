import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import React, { useEffect, useState } from 'react'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const producto = [
        {
            id: '1',
            title: 'producto 1',
            price: 100,
            foto: '../../FotoDeProducto/ryzen_7_3000x.jpg'
        },
        {
            id: '2',
            title: 'producto 2',
            price: 200,
            foto: '../../FotoDeProducto/ryzen_7_3000x.jpg'
        },
        {
            id: '3',
            title: 'producto 3',
            price: 300,
            foto: '../../FotoDeProducto/ryzen_7_3000x.jpg'
        }
    ]

    const miPromesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(producto)
        }, 2000)
    })

    useEffect(() => {
        miPromesa
            .then(respuesta => {setProductos(respuesta)})
            .catch(console.error())
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='contenedorItemListContainer'>
            {loading 
            ? 
            <h2>cargando...</h2> 
            :
                <ItemList productos={productos}/>
            }
        </div>
    )
}
