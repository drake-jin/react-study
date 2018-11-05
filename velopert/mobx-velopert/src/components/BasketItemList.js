import React from 'react'
import BasketItem from './BasketItem'
import { inject, observer } from 'mobx-react'

const BasketItemList = ({ items, onTake }) => {
  console.log(items)
  const itemList = items.map(item => (
    <BasketItem
      key={item.name}
      onTake={onTake}
      // item={item}
      price={item.price}
      count={item.count}
      name={item.name}
    />
  ))
  console.log('BasketItemList ... render')

  return (
    <div>{itemList}</div>
  )
}

export default inject(({ market }) => ({
  items: market.selectedItems,
  onTake: market.take,
}))(observer(BasketItemList))
