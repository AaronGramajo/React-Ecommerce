// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext([])
// export const useCartContext = () => useContext(CartContext)

// const CartContextProvider = ({children}) => {
//     const [cartList,setCartList] = useState([])

//     const addToCart = (item) => {
//         setCartList(...cartList, item)
//     }

//     const vaciarCarrito = () => {
//         setCartList([])
//     }

//     const eliminarItem = (id) => {
//         setCartList(...cartList).Pop(id)
//     }

//     return (
//         <CartContext.Provider value = {{cartList, addToCart, vaciarCarrito, eliminarItem}}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export default CartContextProvider