import { useEffect, useState } from "react";
import { products } from "../assets/Products";
import './Suggestedproducts.css'
import './Hover.css'
import { Product } from "./Product";

export const Suggestedproducts = ({ likeid, currentid }) => {
  const [Suggestedproducts, setSuggestedproducts] = useState([]);

  useEffect(() => {
    const filterSuggestedproducts = products.filter((i) => i.category === likeid && i.id !== currentid);
    setSuggestedproducts(filterSuggestedproducts);
  }, [likeid]);
  return (
    <div>
      <div><h1 className="SuggestedproductsName">You might also like</h1></div>

      {suggistproduct.length > 0 ? (
        <div className="Suggestedcontainer">
          {suggistproduct.map((item) => (
            <Product imgUrl={item.imgUrl} productName={item.productName} price={item.price} id={item.id} />
          ))}
        </div>
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
};