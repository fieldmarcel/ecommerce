import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/Context";
import PageNavigation from "./components/PageNavigation";
import Photos from "./components/Photos";
import Currency from "./helpers/Currrency";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { IoCashOutline } from "react-icons/io5";
import Star from "./components/Star";
import Addtocart from "./components/Addtocart";
import Description from "./components/Description";
const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  const { name, image, company, price, description, stock, stars, reviews } =
    singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <div className="text-center">Loading.....</div>;
  }

  return (
    <div className="container sm:mx-auto  px-4 sm:py-4">
      <PageNavigation title={name} />

      <div className="grid sm:grid-cols-2 sm:gap-16 gap-8 mt-8">
        {/* Product Image Section */}
        <div className="product-images">
          <Photos imgs={image} />
        </div>

        {/* Product Details Section */}
        <div className="product-data space-y-4">
          <h2 className="text-3xl font-bold">{name}</h2>
          
          <div className="flex items-center">
            <Star rating={stars} review={reviews} />
            <p className="ml-2 text-gray-500">{reviews} Reviews</p>
          </div>

          <div className="text-lg">
            <span className="line-through text-gray-500">MRP: </span>
            <del>
              <Currency value={price + 20000} />
            </del>
          </div>
          
          <p className="text-xl font-semibold text-red-600">
            Deal of the day: <Currency value={price} />
          </p>
          
          <p className="  "><Description describe={description}/></p>

          {/* Services Section */}
          <div className="flex flex-row justify-between items-center sm:w-5/6 py-4 px-4 bg-gray-50 rounded-lg">
            <div className="flex gap-4 sm:gap-8">
              <ul className="flex gap-4 sm:gap-8">
                {/* 7 Days Return */}
                <li className="flex flex-col items-center">
                  <figure className="text-4xl text-blue-600">
                    <GiReturnArrow />
                  </figure>
                  <figcaption className="text-center text-sm font-medium mt-2">
                    7 Days Return
                  </figcaption>
                </li>

                {/* Serviced Across India */}
                <li className="flex flex-col items-center">
                  <figure className="text-4xl text-green-600">
                    <GrServices />
                  </figure>
                  <figcaption className="text-center text-sm font-medium mt-2">
                    Serviced Across India
                  </figcaption>
                </li>

                {/* Free Shipping */}
                <li className="flex flex-col items-center">
                  <figure className="text-4xl text-purple-600">
                    <FaShippingFast />
                  </figure>
                  <figcaption className="text-center text-sm font-medium mt-2">
                    Free Shipping Across India
                  </figcaption>
                </li>

                {/* Pay on Delivery */}
                <li className="flex flex-col items-center">
                  <figure className="text-4xl text-orange-600">
                    <IoCashOutline />
                  </figure>
                  <figcaption className="text-center text-sm font-medium mt-2">
                    Pay on Delivery Available
                  </figcaption>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Availability */}
          <div className="product-availability space-y-2">
            <p className="text-lg">
              Available:{" "}
              {stock > 0 ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>
            <p className="text-lg">
              Brand: <span className="font-semibold">{company}</span>
            </p>
          </div>

          {/* Add to Cart */}
          {stock > 0 && <Addtocart product={singleProduct} />}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
