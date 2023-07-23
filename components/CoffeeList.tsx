import Link from "next/link";
import productList from "../pages/api/productList.json";
import ButtonIcon from "./ButtonIcon";
import Image from "next/image";

function CoffeeList() {
  const countChangeHandler = function (newCount, price) {
    console.log(newCount * price);
  };
  return (
    <>
      <div className="left-[235px] top-[260px] absolute text-black text-[40px] font-bold leading-[48px]">
        Coffee
      </div>
      <div className="flex flex-wrap justify-between absolute left-[216px] top-[344px]">
        {productList.coffees.map((coffee) => (
          <div key={coffee.id} className="w-[195px] h-[287px] relative  mb-4">
            <Link href={coffee.name}>
              <Image
                width={195}
                height={195}
                className="rounded-[20px]"
                src="/americano.png"
                alt={coffee.name}
              />

              <div className="text-black text-xl font-semibold leading-7 mt-[5px] absolute left-[5px]">
                {coffee.name}
              </div>
              <div className="text-black text-opacity-60 text-lg font-semibold leading-7 absolute left-[5px] bottom-[5px]">
                {"$" + coffee.price}
              </div>
            </Link>
            <div className="absolute right-[5px] bottom-[5px]">
              <ButtonIcon
                onCountChange={countChangeHandler}
                price={coffee.price}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CoffeeList;
