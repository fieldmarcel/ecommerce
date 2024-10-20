import React, { useState } from "react";
import CardAmount from "./CardAmount";
import { NavLink } from "react-router-dom";

const Addtocart = ({ product }) => {
  const { id, stock, colors } = product;
  const [color, setcolor] = useState(colors[0]); // Default to the first color
  const [amount, setamount] = useState(1);

  const setdec = () => {
    amount > 1 ? setamount(amount - 1) : setamount(1);
  };

  const setinc = () => {
    amount < stock ? setamount(amount + 1) : setamount(stock);
  };

  return (
    <div className="relative">
      <div className="flex items-center mb-4">
        <p className="mr-2 font-semibold">Colors: </p>
        {colors.map((curColor, index) => {
          const isSelected = curColor === color; // Check if this color is selected
          return (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={`w-8 h-8 rounded-full border-2 mx-1 ${
                isSelected ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setcolor(curColor)}
            >
              {isSelected && (
                <span className="block w-full h-full border-2 border-white rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>

      <CardAmount amount={amount} dec={setdec} inc={setinc} />

     <div className="  hidden sm:flex space-x-4 mt-4 ">
        <NavLink to="/cart">
          <button className="text-black font-semibold py-2 px-6 border-gray-800 border-2 rounded-full hover:bg-black hover:text-white transition duration-300">
            Add to Cart
          </button>
        </NavLink>

        <button className="bg-blue-500 text-white font-semibold py-2 px-8 rounded-full hover:bg-blue-600 transition duration-300">
          Buy Now
        </button>
     </div>
     <div className=" cartshadow fixed z-10 bottom-0 bg-white flex flex-row w-full justify-center py-2 items-center  sm:hidden space-x-4 ">
  <NavLink to="/cart" state={{ product, amount, color }}>
    <button className="bg-gray-100 text-black font-semibold py-2 px-6 border-gray-800 border-2 rounded-full hover:bg-black hover:text-white transition duration-300 shadow-md hover:shadow-lg">
      Add to Cart
    </button>
  </NavLink>
  <button
    onClick={() => alert(`Proceeding to buy ${amount} of ${product.name} in ${color}`)} // Placeholder action for Buy Now
    className="bg-blue-500 text-white font-semibold py-2 px-8 rounded-full hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg"
  >
    Buy Now
  </button>
</div>
    </div>
  );
};

export default Addtocart;
