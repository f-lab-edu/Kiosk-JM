import { useRouter } from "next/router";
import productList from "./api/productList.json";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function Product() {
  const router = useRouter();
  console.log(router.query.coffee);
  console.log(productList.coffees);

  return (
    <div>
      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        Click here
      </Link>
    </div>
  );
}

export default Product;
