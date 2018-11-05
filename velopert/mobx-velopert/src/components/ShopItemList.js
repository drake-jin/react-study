import React from 'react'
import ShopItem from './ShopItem'
import { observer, inject } from 'mobx-react'

const items = [
  {
    name: '생수',
    price: 850,
  },
  {
    name: '신라면',
    price: 900,
  },
  {
    name: '포카칩',
    price: 1500,
  },
  {
    name: '새우깡',
    price: 1000,
  },
  {
    name: '데자와',
    price: 800,
  },
]

// **** onPuy함수 추가됨
const ShopItemList = ({ onPut }) => {
  const itemList = items.map(item => (
    <ShopItem
      key={item.name}
      onPut={onPut}
      item={item}
    />
  ))
  console.log('ShopItemList ... render')
  return <div>{itemList}</div>
}


// **** inject, observer 적용
export default inject(({ market }) => ({
  onPut: market.put,
}))(observer(ShopItemList))
