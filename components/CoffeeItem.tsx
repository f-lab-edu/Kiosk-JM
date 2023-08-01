import Image from "next/image";
import Link from "next/link";
import ButtonIcon from "./ButtonIcon";
import { useState } from "react";

function CoffeeItem({ id, name, price, count, onPlus, onMinus }) {
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
          onPlus={() => onPlus(id)}
          onMinus={() => onMinus(id)}
          count={count}
          id={id}
        />
      </div>
    </div>
  );
}

export default CoffeeItem;
