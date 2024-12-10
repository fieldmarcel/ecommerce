const filter_Reducer = (state, action) => {
    switch (action.type) {
      case "FILTER_LOADER":
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
          filter_loader: true,
        };
      
  
      case "GRID_LAYOUT":
        return {
          ...state,
          grid_view: true,
        };
  
        case "LIST_LAYOUT":
          return {
            ...state,
            grid_view: false,
          };
        
  
      case "GET_SORT_VALUE":
        let userSortValue= document.getElementById("sort");
        let sort_value=userSortValue.options[userSortValue.selectedIndex].value;
        console.log(sort_value);
        return {
          ...state,
          sortValue:action.payload,
        }
  
        case "SORTING_PRODUCTS":
          let newSortdata;
          let tempSortproduct= [...action.payload];

if(state.sortValue ==="a-z"){
  newSortdata= tempSortproduct.sort((a,b)=>{
    return a.name.localeCompare(b.name);  //ascending order
  })
}
return {
  ...state,
  filter_products:newSortdata,
};

          // const { filter_products, sortValue } = state;
          // let sortedProducts = [...filter_products];
        
          // const sortingProducts = (a, b) => {
          //   if (sortValue === "lowest") return a.price - b.price;
          //   if (sortValue === "highest") return b.price - a.price;
          //   if (sortValue === "a-z") return a.name.localeCompare(b.name);
          //   if (sortValue === "z-a") return b.name.localeCompare(a.name);
          // };
        
          // sortedProducts.sort(sortingProducts);
        
          
        // case "FILTER_PRODUCTS":
        //   let tempFilterProduct = [...state.all_products];
        //   const { text, category } = state.filters;
        
        //   if (text) {
        //     tempFilterProduct = tempFilterProduct.filter(curElem =>
        //       curElem.name.toLowerCase().includes(text.toLowerCase())
        //     );
        //   }
        //   if (category) {
        //     tempFilterProduct = tempFilterProduct.filter(curElem =>
        //       curElem.category === category
        //     );
        //   }
        
        //   return {
        //     ...state,
        //     filter_products: tempFilterProduct,
        //   };
        
  
      default:
        return state;
    }
  };
  
  export default filter_Reducer;