import React, { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList,setCartList] = useState([])

    const addToCart = (item) => {
        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const lastProducts = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartList([...cartList, {...item, cantidad: item.cantidad + lastProducts}])
        } else {
            setCartList([...cartList, item])
        }
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const eliminarItem = (id) => {
        const findProduct = cartList.filter((item) => item.id !==id)
        setCartList(findProduct)
    }

    return (
        <CartContext.Provider value = {{cartList, addToCart, vaciarCarrito, eliminarItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider