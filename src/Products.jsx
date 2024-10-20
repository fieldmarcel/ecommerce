import React from 'react'
import Sort from './Sort'
import Filter from './Filter'
import Productlist from './Productlist'
const Products = () => {
  return (
    <>
    <div className='flex flex-col'>
        <div><Filter/></div>
        <div className='flex flex-row'>
<div><Sort/></div>
<div><Productlist/></div>

        </div>
    </div>
    
    
    </>
  )
}

export default Products