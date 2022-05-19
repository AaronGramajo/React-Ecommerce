import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element = { <ItemListContainer /> }/>
          <Route path='/categoria/:itemCategoria' element = { <ItemListContainer /> }/>
          <Route path='/details/:detailId' element = { <ItemDetailContainer /> }/>
          <Route path='/cart' element = { <Cart /> }/>

          <Route path='/*' element = { <Navigate to='/'/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
