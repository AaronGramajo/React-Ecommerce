import React, { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList,setCartList] = useState([])

    const addToCart = (item) => {
        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const productQuantity = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartList([...cartList, {...item, cantidad: item.cantidad + productQuantity}])
        } else {
            setCartList([...cartList, item])
        }
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const eliminarItem = (id) => {
        const filteredList = cartList.filter((item) => item.id !== id)
        setCartList(filteredList)
    }

    const totalQuantity = () => {
        return cartList.reduce((contador, prod)=> contador + prod.cantidad , 0)
    }

    const totalPrice = () => {
        return cartList.reduce((contador, prod)=> contador + (prod.cantidad * prod.price) , 0)
    }

    return (
        <CartContext.Provider value = {{cartList, addToCart, vaciarCarrito, eliminarItem, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider