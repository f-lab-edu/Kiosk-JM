import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { ButtonLink } from "./ui/ButtonLink";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <>
      <nav className="absolute w-[216px] fixed left-0 top-[225px] flex flex-col items-center">
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
/*
<div className="w-[183px] h-[118px] px-8 pt-8 pb-16 left-[10px] top-[343px] absolute bg-white flex-col justify-start items-center gap-16 inline-flex">
        <div className="w-32 h-[60px] px-4 py-2 bg-yellow-900 rounded-md justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-xl font-semibold leading-7">
            Coffee
          </div>
        </div>
      </div>
      <div className="w-[183px] h-[118px] px-8 pt-8 pb-16 left-[10px] top-[225px] absolute bg-white flex-col justify-start items-center gap-16 inline-flex">
        <div className="w-32 h-[60px] px-4 py-2 bg-yellow-900 rounded-md justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-xl font-semibold leading-7">Best</div>
        </div>
      </div>
      <div className="w-[183px] h-[118px] px-8 pt-8 pb-16 left-[10px] top-[461px] absolute bg-white flex-col justify-start items-center gap-16 inline-flex">
        <div className="w-32 h-[60px] px-4 py-2 bg-yellow-900 rounded-md justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-xl font-semibold leading-7">
            Dessert
          </div>
        </div>
      </div>
      <div className="w-[183px] h-[118px] px-8 pt-8 pb-16 left-[10px] top-[579px] absolute bg-white flex-col justify-start items-center gap-16 inline-flex">
        <div className="w-32 h-[60px] px-4 py-2 bg-yellow-900 rounded-md justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-xl font-semibold leading-7">
            Drink
          </div>
        </div>
      </div>
      */
