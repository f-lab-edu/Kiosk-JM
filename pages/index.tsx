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
      type: "count up",
      id: id,
    });
  };
  const minusHandler = function (id) {
    dispatch({
      type: "count down",
      id: id,
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
