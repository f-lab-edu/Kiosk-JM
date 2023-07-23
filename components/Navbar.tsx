import Link from "next/link";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <>
      <nav className="w-[216px] absolute left-0 top-[225px] flex flex-col items-center">
        <Button
          asChild
          variant="ghost"
          className="w-[216px] h-[118px] text-xl font-semibold leading-7"
        >
          <Link href="/Best">Best</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="w-[216px] h-[118px] text-xl font-semibold leading-7"
        >
          <Link href="/">Coffee</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="w-[216px] h-[118px] text-xl font-semibold leading-7"
        >
          <Link href="/Dessert">Dessert</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="w-[216px] h-[118px] text-xl font-semibold leading-7"
        >
          <Link href="/Drink">Drink</Link>
        </Button>
      </nav>
    </>
  );
}

export default Navbar;
