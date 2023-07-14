import { useRouter } from "next/router"
import productList from "../api/productList.json"

function Product=(){
    const router=useRouter()
    const product=router.query.product
    return(
        
    )
}

export default Product