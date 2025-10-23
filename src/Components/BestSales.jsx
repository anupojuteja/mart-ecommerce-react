import '../Components/BestSales.css'
import { sofa } from "../assets/filterArray"
import { ProductsCardNewBest } from "./ProductsCardNewBest"

export const BestSales = ({toasfy}) => {
    return (
        <>
            <div><h1 className="NameBestSales">Best Sales</h1></div>
            <div className="productsContainerBestSales">
                {sofa.map((item) => (
                    <div key={item.id}>
                        <ProductsCardNewBest imgUrl={item.imgUrl} productName={item.productName} id={item.id} price={item.price} />
                    </div>
                ))}
            </div>
        </>
    )
}
