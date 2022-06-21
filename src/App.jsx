import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CartContextProvider from './context/CartContext';

import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { FormOrders } from './components/FormOrders/FormOrders'; 
import { Cart } from './components/Cart/Cart';
import { Error404 } from './components/Error404/Error404';
import { Footer } from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:itemCategory' element={<ItemListContainer />} />
            <Route path='/details/:detailId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkOut' element={<FormOrders/>} />
            <Route path='/error404' element={<Error404/>} />
            <Route path='/*' element={<Navigate to='/error404' />} />
          </Routes>
          <Footer/>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
