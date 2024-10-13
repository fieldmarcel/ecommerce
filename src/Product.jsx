import React from 'react'

const Product = (currElem) => {
const {id, name, image, price,category}= currElem;

  return (
    <Navlink to={`/singleproduct/${id}`}>
        



    </Navlink>
  )
}

export default Product