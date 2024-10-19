import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from './Context';
import PageNavigation from './components/PageNavigation';
import Photos from './components/Photos';
import Currency from './helpers/Currrency';
import { FaShippingFast } from 'react-icons/fa';
import { GiReturnArrow } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { IoCashOutline } from "react-icons/io5";
import Star from './components/Star';
import Addtocart from './components/Addtocart';

const API = 'https://api.pujakaitem.com/api/products';

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();
  
  const {
    name,
    image,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <div className="text-center">Loading.....</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <PageNavigation title={name} />

      <div className="grid sm:grid-cols-2 sm:gap-16 gap-8 mt-8">

        <div className="product-images">
          <Photos imgs={image} />
        </div>

        <div className="product-data space-y-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div><Star rating={ stars} review={reviews}/></div>
          <p className="text-yellow-500"></p>
          <p>{reviews} Reviews</p>
          <div>
            <span className="line-through text-gray-500">MRP: </span>
            <del>
              <Currency value={price + 20000} />
            </del>
          </div>
          <p className="font-semibold">
            Deal of the day: <Currency value={price} />
          </p>
          <p className="sm:w-3/4">{description}</p>

          <div className="flex gap-4 mt-4">
            <ul className="flex  gap-4">
              <li className="service-element-box flex flex-col items-center">
                <figure className="text-4xl">
                  <GiReturnArrow />
                </figure>
                <figcaption className="text-center text-sm">7 Days Return</figcaption>
              </li>
              <li className="service-element-box flex flex-col items-center">
                <figure className="text-4xl">
                  <GrServices />
                </figure>
                <figcaption className="text-center text-sm">Serviced Across India</figcaption>
              </li>
              <li className="service-element-box flex flex-col items-center">
                <figure className="text-4xl">
                  <FaShippingFast />
                </figure>
                <figcaption className="text-center text-sm">Free Shipping Across India</figcaption>
              </li>
              <li className="service-element-box flex flex-col items-center">
                <figure className="text-4xl">
                  <IoCashOutline />
                </figure>
                <figcaption className="text-center text-sm">Pay on Delivery Available</figcaption>
              </li>
            </ul>
          </div>

          {/* Product Availability */}
          <div className="product-availability">
            <p>
              Available:{" "}
              {stock > 0 ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                "Out of Stock"
              )}
            </p>
            <p>
              Brand: <span className="font-semibold">{company}</span>
            </p>
          </div>

          {stock > 0 && <Addtocart product={singleProduct}/>}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
