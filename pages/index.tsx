import Cart from "@/components/Cart";
import CoffeeList from "@/components/CoffeeList";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[842px] h-[1224px] bg-white rounded-[30px] absolute mx-auto">
      <Image
        className="left-0 top-0 absolute"
        src="/img10.png"
        width={843}
        height={225}
        alt="img10"
      />
      <Navbar />
      <Cart />
      <CoffeeList />
    </div>
  );
}
