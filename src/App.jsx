import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const greeting = 'Soy el ItemListContainer'
  const miLista = 'Aca va mi lista'

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings= {greeting} lista= {miLista}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
