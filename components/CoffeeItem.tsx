import Image from "next/image";
import Link from "next/link";
import ButtonIcon from "./ButtonIcon";
import { useState } from "react";

function CoffeeItem({ id, name, price }) {
  const [count, setCount] = useState(0);
  console.log(count * price);
  const plusHandler = function () {
    setCount((prev) => prev + 1);
  };
  const minusHandler = function () {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <div className="w-[195px] h-[287px] relative mb-4">
      <Link href={name}>
        <Image
          width={195}
          height={195}
          className="rounded-[20px]"
          src="/americano.png"
          alt={name}
        />

        <div className="text-black text-xl font-semibold leading-7 mt-[5px] absolute left-[5px]">
          {name}
        </div>
        <div className="text-black text-opacity-60 text-lg font-semibold leading-7 absolute left-[5px] bottom-[5px]">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </div>
      </Link>
      <div className="absolute right-[5px] bottom-[5px]">
        <ButtonIcon
          onPlus={plusHandler}
          onMinus={minusHandler}
          currentCount={count}
          id={id}
        />
      </div>
    </div>
  );
}

export default CoffeeItem;
