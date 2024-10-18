import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './Context'
import { useEffect } from 'react'

const API= "https://api.pujakaitem.com/api/products";

//The useParams() hook makes it easy to access the parameters of a URL.
const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =  useProductContext();

  console.log(singleProduct);

const {id} = useParams();
const {id:alias , 
  name,
   company,
    price,
     description,
    stock,stars,reviews,}
     = singleProduct;


useEffect(() => {
  getSingleProduct(`${API}?id=${id}`);
}, []);

  return (
    <div>

<h1>single page{name}</h1>


    </div>
  )
}

export default SingleProduct