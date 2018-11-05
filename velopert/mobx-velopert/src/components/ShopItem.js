import React from 'react'
import './ShopItem.scss';

const ShopItem = ({ item, onPut }) => {
  console.log('ShopItem ... render')

  return (
    <div className="ShopItem" onClick={() => onPut(item.name, item.price)}>
      <h4>{item.name}</h4>
      <div>{item.price}원 </div>
    </div>
  )
}

export default ShopItem