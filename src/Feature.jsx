import React from "react";
import { useProductContext } from "./context/Context";
import Product from "./Product";

const Feature = () => {
  const { isLoading, featureProducts = [] } = useProductContext();

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <>
      <div className="container mx-auto my-8 px-4">
        <div className=" featured intro-data text-center text-xl font-semibold text-gray-800">Check Now!</div>
        <div className="featured common-heading text-center text-3xl font-bold text-gray-900 mb-8">Our Featured Services</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureProducts.map((curElem) => (
            <Product
              key={curElem.id}
              id={curElem.id}
              name={curElem.name}
              image={curElem.image}
              price={curElem.price}
              category={curElem.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
