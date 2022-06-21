import React, { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList,setCartList] = useState([])

    const addToCart = (item) => {
        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const productQuantity = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, {...item, quantity: item.quantity + productQuantity}])
        } else {
            setCartList([...cartList, item])
        }
    }

    const emptyCart = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        const filteredList = cartList.filter((item) => item.id !== id)
        setCartList(filteredList)
    }

    const totalQuantity = () => {
        return cartList.reduce((counter, prod)=> counter + prod.quantity , 0)
    }

    const totalPrice = () => {
        return cartList.reduce((counter, prod)=> counter + (prod.quantity * prod.price) , 0)
    }

    return (
        <CartContext.Provider value = {{cartList, addToCart, emptyCart, deleteItem, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider