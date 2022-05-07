import React from 'react'
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount'
// import React, { useEffect, useState } from 'react'
//tengo que importar un json despues parsearlo en miPromesa
//crear una carpeta json

export const ItemListContainer = ({greetings = '', lista = ''}) => {
    // const [productos,setProductos] = useState([])
    // const [loading,setLoading] = useState(true)
    // const miPromesa = new Promise ((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve({productos})
    //     },3000)
    // })

    // useEffect(()=> {
    //     miPromesa
    //     .then(respuesta=>setProductos(respuesta))
    //     .catch(err)
    //     .finally(setLoading(false))
    // },[])
    return (
        <div className='contenedorItemList'>
            <h1>{greetings}</h1>
            <h2>{lista}</h2>
            <ItemCount inicial={1} stock={5} onAdd={()=>console.log("agregado al carrito")} />
        </div>
    //     <div>
    //         <h1 className='saludo1'>{greetings}</h1>
    //         <h2 className='saludo2'>{lista}</h2>
    //         {loading ? <h2>cargando</h2> : 
    //         [setProductos].map(items => <li key={item.id}>{items}</li> )}
    //     </div>
    )
}
