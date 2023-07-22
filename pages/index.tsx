import Cart from "@/components/Cart";
import CoffeeList from "@/components/CoffeeList";
import Navbar from "@/components/Navbar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[842px] h-[1224px] relative bg-white rounded-[30px] mx-auto relative">
      <Navbar />
      <Cart />
      <CoffeeList />
      <img
        className="w-[843px] h-[225px] left-0 top-0 absolute"
        src="/img10.png"
      />
    </div>
  );
}
