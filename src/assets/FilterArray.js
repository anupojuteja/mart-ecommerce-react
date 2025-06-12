import { products } from "../assets/Products";

export let electronic = products.filter((product)=>product.category==="mobile"||product.category==="wireless")
export let sofa=products.filter((product)=>product.category==="sofa")
