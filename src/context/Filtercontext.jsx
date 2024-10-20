// import { createContext ,useReducer} from "react";
// import { useProductContext } from "./Context";
// const filtercontext= createContext();
// const initialstate={
//     filter_products:[],
//     filter_loader:false,
//     all_products:[],
// }
// export const filterProvider =({children})=>{

// const {products}=useProductContext();
// const  [state, dispatch] = useReducer(reducer,initialstate)




//     return (
//         <filtercontext.Provider value={{...state}}>

// {children}

//         </filtercontext.Provider>
//     );
// }

//  filterProvider;

// export const useFilterContext=()=>{
//     return useContext(filtercontext)
// }