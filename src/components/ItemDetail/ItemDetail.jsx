import React, {useState} from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
// import { useCartContext } from '../../context/CartContext'

export const ItemDetail = ({producto}) => {
    // const {addToCart, cartList} = useCartContext
    const [toCart,setToCart] = useState(false)

    const onAdd = () => {
        setToCart(true)
    }

    // const onAdd = (cant) =>{
    //     addToCart({...producto, cantidad:cant})
    // }
    
    return (
        <div className='contenedorItemDetail'>
            <div className='contenedorDetail'>
                <div className='contenedorFoto'>
                    <img src={producto.foto} alt="" className='imagenDeProducto'/>
                </div>
                <div className='contenedorBody'>
                    <div className='productName'>{producto.title}</div>
                    <div className='productPrice'>{producto.price}</div>
                    <div className='productDescription'>{producto.description}</div>
                    {!toCart 
                    ? 
                    <ItemCount inicial={1} stock={5} onAdd={onAdd} />
                    :
                    <div className='bottonsToCart'>
                        <Link to={'/cart'}>
                        <button className='buttonCart'>Ir al carrito</button>
                        </Link>
                        <Link to={'/'}>
                        <button className='buttonHome'>Seguir comprando</button>
                        </Link>
                    </div>}
                </div>
            </div>
        </div>
    )
}
