import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./ProductReducer";

const AppContext = createContext();
//first api call for featured products
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [], //empty array 
  isSingleLoading:false,
  singleProduct:{},//empty object  as for that product in api its in an objject format
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };


//   The term payload in the context of useReducer usually refers to the data sent along with an action to update the state. The action object typically has two properties:

// type: A string that specifies the type of action to be performed.
// payload: The additional data required to update the state.

//2nd api call fir single product

const getSingleProduct = async (url) => {
  dispatch({ type: "SET_SINGLE_LOADING" });
  try {
    const res = await axios.get(url);
    const singleProduct = await res.data;
    dispatch({ type: "SINGLE_PRODUCT", payload: singleProduct });
  } catch (error) {
    dispatch({ type: "SET_SINGLE_ERROR" });
  }
};



  useEffect(() => {
     getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state ,getSingleProduct}}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {

  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };