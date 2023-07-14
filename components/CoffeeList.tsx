import productList from "../pages/api/productList.json";

function CoffeeList() {
  return (
    <>
      {productList.coffees.map((coffee) => (
        <div className="w-[195px] h-[287px] left-[432px] top-[344px] absolute">
          <img
            className="w-[195px] h-[195.99px] left-0 top-0 absolute rounded-[20px]"
            src="/americano.png"
          />
          <div className="left-[10px] top-[204px] absolute text-black text-xl font-semibold leading-7">
            {coffee.name}
          </div>
          <div className="w-[62px] left-[10px] top-[259px] absolute text-black text-opacity-60 text-lg font-semibold leading-7">
            {coffee.price}
          </div>
        </div>
      ))}
    </>
  );
}

export default CoffeeList;
