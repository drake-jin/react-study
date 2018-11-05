import React from 'react'
import './SuperMarketTemplate.scss'

const SuperMarketTemplate = ({ items, basket, total }) => {
  console.log('SuperMarketTemplate ... render')
  return (
    <div className="SuperMarketTemplate">
      <div className="items-wrapper">
        <h2>상품</h2>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>장바구니</h2>
        {basket}
        {total}
      </div>
    </div>
  )
}

export default SuperMarketTemplate
