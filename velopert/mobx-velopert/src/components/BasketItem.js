import React from 'react'
import './BasketItem.scss'

const BasketItem = ({ name, price, count, onTake }) => {
  console.log('BasketItem ... render')

  return (
    <div className="BasketItem">
      <div className="name">{name}</div>
      <div className="price">{price}</div>
      <div className="count">{count}</div>
      <div className="return" onClick={() => onTake(name)}>갖다놓기</div>
    </div>
  )
}

export default BasketItem