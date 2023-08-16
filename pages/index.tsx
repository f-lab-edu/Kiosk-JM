import Cart from "@/components/Cart";
import CoffeeList from "@/components/CoffeeList";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import productList from "./api/productList.json";
import { useImmerReducer } from "use-immer";
import cartReducer from "../components/cartReducer";

const initialState = productList.coffees.reduce((state, coffee) => {
  state[coffee.id] = 0;
  return state;
}, {});

export default function Home() {
  const [count, dispatch] = useImmerReducer(cartReducer, initialState);

  const plusHandler = function (id) {
    dispatch({
      type: "COUNT_UP",
      id: id,
    });
  };
  const minusHandler = function (id) {
    dispatch({
      type: "COUNT_DOWN",
      id: id,
    });
  };

  return (
    <div className="absolute mx-auto h-[1224px] w-[842px]
     rounded-[30px] 
     bg-white">
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
  );
}
