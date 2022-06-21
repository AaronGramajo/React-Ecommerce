import { addDoc, collection, doc, getFirestore, writeBatch } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'
import { Loader } from '../Loader/Loader'

import './FormOrders.css'

export const FormOrders = () => {
    const [orderId, setOrderId] = useState('')
    const [creatingOrder, setCreatingOrder] = useState(false)
    const [formData, setFormData] = useState({ name: '', lastName: '', phone: '', email: '' })

    const { cartList, totalPrice, emptyCart } = useCartContext()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const creatOrder = (e) => {
        e.preventDefault();
        setCreatingOrder(true)

        let order = {}

        order.buyer = formData
        order.total = totalPrice()

        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.title
            const price = cartItem.price
            const quantity = cartItem.quantity
            const totalPrice = cartItem.price * cartItem.quantity
            return { id, name, quantity, price, totalPrice }
        })

        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
            .then(resp => setOrderId(resp.id))
            .catch(console.error())
            .finally(() => {
                setCreatingOrder(false)
                updateStock()
                emptyCart()
                setFormData({ name: '', lastName: '', phone: '', email: '' })
            })

        const updateStock = () => {
            const batch = writeBatch(db)

            order.items.map(el => {
                let updateDoc = doc(db, 'Items', el.id)
                let currentStock = cartList.find(item => item.id === el.id).stock

                batch.update(updateDoc, {
                    stock: currentStock - el.quantity
                })
            })
            batch.commit()
        }
    }

    return (
        <div className='formContainer'>
            {creatingOrder
                ?
                <div>
                    <h1>Procesando su orden...</h1>
                    <Loader />
                </div>
                :
                orderId
                    ?
                    <div>
                        <h2>Gracias por su compra!</h2>
                        <h3> Su ID de compra es {orderId} </h3>
                        <Link to='/'>
                            <button className='homeButton btn'><span className='btn-text'>Volver al home</span></button>
                        </Link>
                    </div>
                    :
                    <div className='formContainer'>
                        <div>
                            <h1>Porfavor Complete los datos</h1>
                            <h2>para completar su compra</h2>
                        </div>
                        <form className='formBuyer' action="" onSubmit={creatOrder} onChange={handleChange}>
                            <div className='labelInputContainer'>
                                <label className='formLabel' >Nombre</label>
                                <input type="name" name="name" placeholder='Scooby' defaultValue={formData.name} required />
                            </div>
                            <div className='labelInputContainer'>
                                <label className='formLabel' >Apellido</label>
                                <input type="name" name="lastName" placeholder='Doo' defaultValue={formData.lastName} required />
                            </div>
                            <div className='labelInputContainer'>
                                <label className='formLabel' >Telefono</label>
                                <input type="telefone" name="phone" placeholder='15xxxxxxxxxx' defaultValue={formData.phone} required />
                            </div>
                            <div className='labelInputContainer'>
                                <label className='formLabel' >Email</label>
                                <input type="email" name="email" placeholder='ScoobyDoo@galletas.com' defaultValue={formData.email} required />
                            </div>
                            <button className='finishPurchaseButton btn' disabled={!formData.name || !formData.lastName || !formData.phone || !formData.email || cartList.length === 0}>
                                <span className='btn-text'>Finalizar Compra</span>
                            </button>
                        </form>

                    </div>
            }
        </div>
    )
}
