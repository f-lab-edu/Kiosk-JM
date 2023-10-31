import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import QuantirySelector from "./QuantitySelector"

function CoffeeItem({ coffee, count, onPlus, onMinus }) {
  return (
    <div className="relative mb-4 h-[287px] w-[195px]">
      <Link href={coffee.name}>
        <Image
          width={195}
          height={195}
          className="rounded-[20px]"
          src="/americano.png"
          alt={coffee.name}
        />

        <div className="absolute left-[5px] mt-[5px] text-xl font-semibold leading-7">
          {coffee.name}
        </div>
        <div className="absolute bottom-[5px] left-[5px] text-lg font-semibold leading-7 text-opacity-60">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(coffee.price)}
        </div>
      </Link>
      <div className="absolute bottom-[5px] right-[5px]">
        <QuantirySelector
          onPlus={onPlus}
          onMinus={onMinus}
          count={count}
          coffeeId={coffee.id}
        />
      </div>
    </div>
  )
}

export default CoffeeItem
