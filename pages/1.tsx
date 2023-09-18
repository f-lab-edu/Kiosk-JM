import React, { useState } from "react"

import productList from "./api/productList.json"

const CoffeeShop = () => {
  const [items, setItems] = useState(
    productList.coffees.map((item) => ({ ...item, count: 0 }))
  )
  console.log(items)

  const handleIncrement = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 }
      }
      return item
    })
    setItems(updatedItems)
  }

  const handleDecrement = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1 }
      }
      return item
    })
    setItems(updatedItems)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.count * item.price, 0)
  }

  return (
    <div>
      <h2>Coffee Shop</h2>
      {items.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - ${item.price.toFixed(2)}
          </span>
          <button onClick={() => handleDecrement(item.id)}>-</button>
          <span>{item.count}</span>
          <button onClick={() => handleIncrement(item.id)}>+</button>
        </div>
      ))}
      <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
    </div>
  )
}

export default CoffeeShop
