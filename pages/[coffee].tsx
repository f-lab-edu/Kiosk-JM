import { useRouter } from "next/router";
import productList from "./api/productList.json";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function Product({ count }) {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <Link href="/" className={buttonVariants({ variant: "outline" })}>
        Click here
      </Link>
    </div>
  );
}

export default Product;
