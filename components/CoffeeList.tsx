import productList from "../pages/api/productList.json";
import CoffeeItem from "./CoffeeItem";

function CoffeeList({ count, onPlus, onMinus }) {
  return (
    <>
      <div className="absolute left-[235px] top-[260px] text-[40px] font-bold leading-[48px]">
        Coffee
      </div>
      <div className="absolute left-[216px] top-[344px] flex flex-wrap justify-between">
        {productList.coffees.map((coffee) => (
          <CoffeeItem
            coffee={coffee}
            key={coffee.id}
            count={count}
            onPlus={onPlus}
            onMinus={onMinus}
          />
        ))}
      </div>
    </>
  );
}

export default CoffeeList;
