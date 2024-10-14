import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ id, name, image, price, category }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-y-105 hover:shadow-2xl">
      <NavLink to={`/singleproduct/${id}`}>
        <figure className="relative overflow-hidden h-64">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <figcaption className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-3 text-lg font-semibold">
            {category}
          </figcaption>
        </figure>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-gray-500 font-medium">${price}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
