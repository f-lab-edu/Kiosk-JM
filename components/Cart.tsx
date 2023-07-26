import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

function Cart() {
  return (
    <>
      <div
        className="flex absolute h-[176px] w-[100%] pl-[133px] pr-[15px] py-[15px] bottom-0 
                   justify-between items-center bg-zinc-300 rounded-[20px]"
      >
        <Link href="/">
          <Button className="w-[184px] h-[62px] bg-yellow-900 text-xl font-semibold">
            Restart Order
          </Button>
        </Link>
        <div>
          <div className=" text-black text-opacity-50 text-lg font-semibold">
            Total
          </div>
          <div className="text-3xl font-semibold leading-none">
            {/*Todo : show total price*/ "$" + "0.00"}
          </div>
        </div>
        <Button className="w-[173px] h-[145px] bg-amber-300 rounded-[30px] text-black text-2xl font-bold">
          View Order
        </Button>
      </div>
    </>
  );
}

export default Cart;
