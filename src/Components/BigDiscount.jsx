import { discoutProducts } from "../assets/Products.js"
import { ProductsCard } from "./ProductCards"
import '../Components/BigDiscount.css'

export const BigDiscount = ()=>{
    return(
        <>
        <div><h1 className="Name">Big Discount</h1></div>
        <div className="productsContainer">
            {discoutProducts.map((item)=>(
                <div className="productswidth">
                    <ProductsCard key={item.id} imgUrl={item.imgUrl} productName={item.productName} id={item.id} price={item.price} discount={item.discount} />
                </div>
            ))}
        </div>
        </>
    )
}