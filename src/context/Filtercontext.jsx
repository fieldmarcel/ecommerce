import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Context";
import reducer from "../context/Filter_Reducer";

const filtercontext = createContext();

const initialState = {
    filter_products: [],
    filter_loader: false,
    all_products: [],
    grid_view: false,
    sort_products: "lowest" ,

    sortValue: "a-z", 
    filters:{
        text: "",

    }

};


const FilterProvider = ({ children }) => {
    
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => dispatch({ type: "GRID_LAYOUT" });
    const setListView = () => dispatch({ type: "LIST_LAYOUT" });

    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        console.log("Sort value selected:", sortValue); 
        dispatch({ type: "UPDATE_SORT", payload: sortValue });
      };
      
    //sorting the products
const sorting=()=>{
    dispatch ({type:"GET_SORT_VALUE", payload:state.sortValue});
    console.log("sorting:", state.sortValue); 

const updatefiltervalue=(event)=>{

}


}
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload:state.all_products });
      }, [state.sortValue, state.all_products]);
      
    useEffect(() => {
        if (products && products.length > 0) {
            dispatch({ type: "FILTER_LOADER", payload: products });
        }
    }, [products]);

    return (
        <filtercontext.Provider value={{ ...state, setGridView, setListView, handleSortChange,sorting }}>
            {children}
        </filtercontext.Provider>
    );
};

const useFilterContext = () => {
    return useContext(filtercontext);
};

export { FilterProvider, useFilterContext };
