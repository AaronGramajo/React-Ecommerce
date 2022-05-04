import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';

function App() {

  const greeting = 'Soy el ItemListContainer'
  const miLista = 'Aca va mi lista'

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings= {greeting} lista= {miLista}/>
    </div>
  );
}

export default App;
