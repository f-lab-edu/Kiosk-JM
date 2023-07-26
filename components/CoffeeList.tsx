import productList from "../pages/api/productList.json";
import CoffeeItem from "./CoffeeItem";

function CoffeeList() {
  return (
    <>
      <div className="left-[235px] top-[260px] absolute text-black text-[40px] font-bold leading-[48px]">
        Coffee
      </div>
      <div className="flex flex-wrap justify-between absolute left-[216px] top-[344px]">
        {productList.coffees.map((coffee) => (
          <CoffeeItem
            id={coffee.id}
            name={coffee.name}
            price={coffee.price}
            key={coffee.id}
          />
        ))}
      </div>
    </>
  );
}

export default CoffeeList;
