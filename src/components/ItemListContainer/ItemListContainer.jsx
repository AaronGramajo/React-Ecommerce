import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import React, { useEffect, useState } from 'react'
import { fetchData } from '../../helpers/fetchData'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { itemCategoria } = useParams()

    useEffect(() => {
        if (itemCategoria) {
            fetchData()
                .then(respuesta => setProductos(respuesta.filter((prods) => prods.categoria === itemCategoria)))
                .catch(console.error())
                .finally(() => setLoading(false))
        } else {
            fetchData()
                .then(respuesta => setProductos(respuesta))
                .catch(console.error())
                .finally(() => setLoading(false))
        }
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
