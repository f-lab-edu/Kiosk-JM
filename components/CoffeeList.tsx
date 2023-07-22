import Link from "next/link";
import productList from "../pages/api/productList.json";

function CoffeeList() {
  return (
    <div className="flex flex-wrap justify-start absolute left-[216px] top-[344px]">
      {productList.coffees.map((coffee) => (
        <Link href={coffee.name} key={coffee.id}>
          <div className="w-[195px] h-[287px] m-1 relative">
            <img
              className="w-[195px] h-[195px] rounded-[20px]"
              src="/americano.png"
              alt={coffee.name}
            />
            <div className="text-black text-xl font-semibold leading-7 mt-[5px] absolute left-[5px]">
              {coffee.name}
            </div>
            <div className="text-black text-opacity-60 text-lg font-semibold leading-7 absolute left-[5px] bottom-[5px]">
              {"$" + coffee.price}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CoffeeList;
