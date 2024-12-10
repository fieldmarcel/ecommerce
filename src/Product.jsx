import React from "react";
import { NavLink } from "react-router-dom";
import Currency from "./helpers/Currrency";

const Product = ({ id, name, image,price, category }) => {
 
  return (
    <div className=" border-2 border-gray-200 m-2  overflow-hidden shadow-lg transform transition duration-500 hover:scale-y-105 hover:shadow-2xl">
      <NavLink to={`/singleproduct/${id}`}>
        <figure className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <figcaption className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-3 text-lg font-semibold">
            {category}
          </figcaption>
        </figure>
        <div className="sm:p-4  p-2 flex  justify-between items-center">
          <h3 className="sm:text-lg  text-md font-bold text-gray-800">{name}</h3>
          <p className="text-gray-500  text-xs sm:font-medium">
          {  < Currency value= {price}/>}
        
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
