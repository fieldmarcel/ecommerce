import React from "react";
import Product from "./Product";
import { useFilterContext } from "./context/Filtercontext";

const GridViewer = () => {
const {all_products}=useFilterContext()
  // Log the products to see what it contains
  // console.log("Products in GridViewer:", all_products);

  // Add a condition to handle undefined or empty products
  // if (!products || products.length === 0) {
  //   return <div>No products available</div>; // Or you can show a loader/spinner
  // }

  return (
    <div className="container grid  grid-cols-2  sm:grid-cols-3">
      {all_products.map((curElem) => (
      <Product key={curElem.id} {...curElem} />
      ))}
    </div>
  );
};

export default GridViewer;
