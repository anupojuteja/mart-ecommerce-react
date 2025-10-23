import { Carousel } from "./Carousel"
import { Servicedata } from "./ServiceData"
import { BigDiscount } from "./BigDiscount"
import { NewArrivals } from "./NewArrivals"
import { BestSales } from "./BestSales"
import { ToastContainer } from "react-toastify"

export const Homepage=()=>{
    return(
        <>
        <ToastContainer position="top-right" autoClose={2000}/>
        <Carousel/><br/>
        <Servicedata/><br/>
        <BigDiscount/><br/>
        <NewArrivals/><br/>
        <BestSales/>
        </>
    )
}