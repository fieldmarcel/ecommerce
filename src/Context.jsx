import React, { useReducer } from 'react'
import { createContext,useContext } from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import reducer from './ProductReducer'


const AppContext= createContext();

const API='https://api.pujakaitem.com/api/products'
const initialstate={
    isLoading:false,
    isError:false,
    data:[],
    featureData:[]

}
const AppProvider = ({children}) => {
const [state,dispatch]= useReducer(reducer,initialstate);
const getProducts = async () => {
    dispatch({type:"set-loading"})

 try {
    
       const res = await axios.get(API); 
     const data= res.data;
     dispatch({type:"my-api-products",payload:data})
       console.log(
       "API-Response: ", data[3].description 
       )
     
 } catch (error) {
    dispatch({type:"API error"})
    console.error("error occureedd bor here")
 }
};
useEffect(() => {
  getProducts();

  
}, [])


  return (
    <div>
<AppContext.Provider value={{...state}}>
    {children}
    </AppContext.Provider>

    </div>
  )
}

const useProductContex =()=>{
  return useContext(AppContext);

}

export  {AppProvider,AppContext,useProductContex}