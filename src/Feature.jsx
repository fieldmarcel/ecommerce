import React from 'react'
import  {useProductContex}  from './Context'




const Feature = () => {


    const {isLoading,featureProducts}= useProductContex();
if(isLoading){
    return (
    <div>...loading</div>)
}
  return (
    <div>features</div>
  )
}

export default Feature
