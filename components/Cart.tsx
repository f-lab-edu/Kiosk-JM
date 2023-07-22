import Link from "next/link";

function Cart() {
  return (
    <>
      <div className="left-[235px] top-[260px] absolute text-black text-[40px] font-bold leading-[48px]">
        Coffee
      </div>
      <div className="w-[842px] h-44 left-0 top-[1048px] absolute bg-zinc-300 rounded-[20px]" />
      <div className="left-[451px] top-[1110px] absolute text-black text-opacity-50 text-lg font-semibold leading-7">
        Total
      </div>
      <div className="left-[452px] top-[1138px] absolute text-black text-3xl font-semibold leading-9">
        $0.00
      </div>
      <Link href="/">
        <div className="w-[184px] h-[62px] px-4 py-2 left-[127px] top-[1110px] absolute bg-yellow-900 rounded-md justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-xl font-semibold leading-7">
            Restart Order
          </div>
        </div>
      </Link>
      <div className="w-[173px] h-[145px] px-4 py-2 left-[647px] top-[1066px] absolute bg-amber-300 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-black text-2xl font-medium leading-loose">
          View Order
        </div>
      </div>
    </>
  );
}

export default Cart;
