import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

import Cart from "@/components/Cart"
import CoffeeList from "@/components/CoffeeList"
import Navbar from "@/components/Navbar"

import productList from "./api/productList.json"

interface CartState {
  [id: number]: number
}

export default function Coffee() {
  const [count, setCount] = useState<{ [id: number]: number }>(
    productList.coffees.reduce<CartState>((state, coffee) => {
      state[coffee.id] = 0
      return state
    }, {})
  )

  const plusHandler = function (id: number) {
    setCount((prevCount) => {
      return {
        ...prevCount,
        [id]: prevCount[id] + 1,
      }
    })
  }
  const minusHandler = function (id: number) {
    setCount((prevCount) => {
      if (count[id] <= 0) {
        return prevCount
      }

      return {
        ...prevCount,
        [id]: prevCount[id] - 1,
      }
    })
  }

  return (
    <div className="absolute mx-auto h-[1224px] w-[842px] rounded-[30px] bg-white">
      <Image
        className="absolute left-0 top-0"
        src="/BackgroundImg.png"
        width={842}
        height={225}
        alt="BackgroundImg"
      />
      <Navbar />
      <Cart count={count} />
      <CoffeeList count={count} onPlus={plusHandler} onMinus={minusHandler} />
    </div>
  )
}
