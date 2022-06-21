import React from 'react'

import { Item } from '../Item/Item'

import './ItemList.css'

export const ItemList = ({products}) => {
  return (
    <div className='itemList'>
      {
        products.map((product) => 
          <Item product={product} key={product.id}/>
        )
      }
    </div>
  )
}
