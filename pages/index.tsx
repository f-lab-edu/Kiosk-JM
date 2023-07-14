import Cart from "@/components/Cart";
import CoffeeList from "@/components/CoffeeList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-[842px] h-[1224px] relative bg-white rounded-[30px]">
        <Navbar />
        <Cart />

        <div className="left-[452px] top-[1138px] absolute text-black text-3xl font-semibold leading-9">
          $0.00
        </div>

        <div className="w-[195px] h-[287px] left-[216px] top-[640px] absolute">
          <img
            className="w-[195px] h-[195.99px] left-0 top-0 absolute rounded-[20px]"
            src="/americano.png"
          />
          <div className="left-[10px] top-[204px] absolute text-black text-xl font-semibold leading-7">
            Americano
          </div>
          <div className="w-[62px] left-[10px] top-[259px] absolute text-black text-opacity-60 text-lg font-semibold leading-7">
            $4.99
          </div>
        </div>
        <div className="w-[195px] h-[287px] left-[647px] top-[344px] absolute">
          <img
            className="w-[195px] h-[195.99px] left-0 top-0 absolute rounded-[20px]"
            src="/americano.png"
          />
          <div className="left-[10px] top-[204px] absolute text-black text-xl font-semibold leading-7">
            Americano
          </div>
          <div className="w-[62px] left-[10px] top-[259px] absolute text-black text-opacity-60 text-lg font-semibold leading-7">
            $4.99
          </div>
        </div>
        <div className="w-[195px] h-[287px] left-[217px] top-[344px] absolute">
          <img
            className="w-[195px] h-[195.99px] left-0 top-0 absolute rounded-[20px]"
            src="/americano.png"
          />
          <div className="left-[10px] top-[204px] absolute text-black text-xl font-semibold leading-7">
            Americano
          </div>
          <div className="w-[62px] left-[10px] top-[259px] absolute text-black text-opacity-60 text-lg font-semibold leading-7">
            $4.99
          </div>
        </div>
        <div className="w-[195px] h-[287px] left-[432px] top-[640px] absolute">
          <img
            className="w-[195px] h-[195.99px] left-0 top-0 absolute rounded-[20px]"
            src="/americano.png"
          />
          <div className="left-[10px] top-[204px] absolute text-black text-xl font-semibold leading-7">
            Americano
          </div>
          <div className="w-[62px] left-[10px] top-[259px] absolute text-black text-opacity-60 text-lg font-semibold leading-7">
            $4.99
          </div>
        </div>
        <div className="w-[195px] h-[287px] left-[648px] top-[640px] absolute">
          <img
            className="w-[195px] h-[195.99px] left-0 top-0 absolute rounded-[20px]"
            src="/americano.png"
          />
          <div className="left-[10px] top-[204px] absolute text-black text-xl font-semibold leading-7">
            Americano
          </div>
          <div className="w-[62px] left-[10px] top-[259px] absolute text-black text-opacity-60 text-lg font-semibold leading-7">
            $4.99
          </div>
        </div>
        <img
          className="w-[843px] h-[225px] left-0 top-0 absolute"
          src="/img10.png"
        />
      </div>
    </>
  );
}
