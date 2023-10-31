import Link from "next/link"

import { Button } from "./ui/button"

function Navbar() {
  return (
    <>
      <nav className="w-[216px] absolute left-0 top-[225px] flex flex-col items-center">
        <Button
          asChild
          variant="ghost"
          className="w-[216px] h-[118px] text-xl font-semibold leading-7"
        >
          <Link href="/best">Best</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="w-[216px] h-[118px] text-xl font-semibold leading-7"
        >
          <Link href="/coffees">Coffee</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="w-[216px] h-[118px] text-xl font-semibold leading-7"
        >
          <Link href="/desserts">Dessert</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="w-[216px] h-[118px] text-xl font-semibold leading-7"
        >
          <Link href="/drinks">Drink</Link>
        </Button>
      </nav>
    </>
  )
}

export default Navbar
