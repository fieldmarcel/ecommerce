import React from "react";
import Sort from "./Sort";
import Filter from "./Filter";
import Productlist from "./Productlist";
import { useFilterContext } from "./context/Filtercontext";
const Products = () => {
  const { all_products } = useFilterContext();
  console.log("ksdjgf,",all_products );

  return (
    <>
      <div className=" flex flex-col ">
        <div className=" ">
          <Sort />
        </div>
        <div className="flex flex-row">
          <div className="">
            <Filter  />
          </div>
          <div className="flex justify-center">
            <Productlist />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
