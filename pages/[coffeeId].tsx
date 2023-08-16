import { useRouter } from "next/router";
import CoffeeItem from "@/components/CoffeeItem";
import Image from "next/image";

function Product() {
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      <div className="ml-5 mt-7 flex items-start justify-start">
        <Image
          src="/americano.png"
          width={160}
          height={160}
          alt="americano"
          className="shrink-0 rounded-[20px]"
        />

        <div className="ml-9 flex-col">
          <div className="mb-2 text-4xl font-bold ">Americano</div>
          <div className="text-lg font-semibold">
            A type of coffee drink prepared by diluting an espresso shot with
            hot water, giving it a similar strength to, but different flavor
            from, regular drip coffee.
          </div>
        </div>
      </div>
      <div>
        <div className="mx-5 my-8 text-2xl font-semibold">Size</div>
        <div className="flex items-start justify-start">
          <div className="h-[268px] w-[196px] rounded-[15px] border border-stone-300">
            <Image
              src="/americano.png"
              width={160}
              height={160}
              alt="americano"
              className="ml-[16px] mt-[14px] rounded-[20px]"
            />
            <div className="ml-[20px] mt-[7px] text-xl font-semibold leading-7">
              Tall
            </div>
          </div>
          <div className="h-[268px] w-[196px] rounded-[15px] border border-stone-300">
            <Image
              src="/americano.png"
              width={160}
              height={160}
              alt="americano"
              className="ml-[16px] mt-[14px] rounded-[20px]"
            />
            <div className="ml-[20px] mt-[7px] text-xl font-semibold leading-7">
              Tall
            </div>
          </div>
          <div className="h-[268px] w-[196px] rounded-[15px] border border-stone-300">
            <Image
              src="/americano.png"
              width={160}
              height={160}
              alt="americano"
              className="ml-[16px] mt-[14px] rounded-[20px]"
            />
            <div className="ml-[20px] mt-[7px]  text-xl font-semibold leading-7">
              Tall
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-[21px] my-[30px] text-2xl font-semibold">Size</div>
        <div className="flex items-start justify-start">
          <div className="h-[268px] w-[196px] rounded-[15px] border border-stone-300">
            <Image
              src="/americano.png"
              width={160}
              height={160}
              alt="americano"
              className="ml-[16px] mt-[14px] rounded-[20px]"
            />
            <div className="ml-[20px] mt-[7px] text-xl font-semibold leading-7">
              Tall
            </div>
          </div>
          <div className="h-[268px] w-[196px] rounded-[15px] border border-stone-300">
            <Image
              src="/americano.png"
              width={160}
              height={160}
              alt="americano"
              className="ml-[16px] mt-[14px] rounded-[20px]"
            />
            <div className="ml-[20px] mt-[7px] text-xl font-semibold leading-7">
              Tall
            </div>
          </div>
          <div className="h-[268px] w-[196px] rounded-[15px] border border-stone-300">
            <Image
              src="/americano.png"
              width={160}
              height={160}
              alt="americano"
              className="ml-[16px] mt-[14px] rounded-[20px]"
            />
            <div className="ml-[20px] mt-[7px]  text-xl font-semibold leading-7">
              Tall
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
