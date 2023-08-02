import Cart from "@/components/Cart";
import CoffeeList from "@/components/CoffeeList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import productList from "./api/productList.json";
import { useRouter } from "next/router";

export default function Home() {
  const [count, setCount] = useState(
    productList.coffees.reduce((state, coffee) => {
      state[coffee.id] = 0;
      return state;
    }, {})
  );

  const plusHandler = function (id) {
    setCount((prevCount) => {
      return {
        ...prevCount,
        [id]: prevCount[id] + 1,
      };
    });
  };
  const minusHandler = function (id) {
    setCount((prevCount) => {
      if (count[id] <= 0) return prevCount;

      return {
        ...prevCount,
        [id]: prevCount[id] - 1,
      };
    });
  };

  return (
    <div className="w-[842px] h-[1224px] bg-white rounded-[30px] absolute mx-auto">
      <Image
        className="left-0 top-0 absolute"
        src="/BackgroundImg.png"
        width={842}
        height={225}
        alt="BackgroundImg"
      />
      <Navbar />
      <Cart count={count} />
      <CoffeeList count={count} onPlus={plusHandler} onMinus={minusHandler} />
    </div>
  );
}
