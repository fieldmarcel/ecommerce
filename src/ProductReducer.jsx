const ProductReducer=(state,action)=>{
if(action==='set-loading'){
    return {
        ...state,
        isLoading:true,
    }
}

if(action=== 'API-error'){
    return {
        ...state,
        isLoading:false,
        isError:true,
    }

}
if(action=== 'my-api-products'){
   const featurePart= action.payload.filter((currElem)=>{
    return currElem.featured===true;
   })
   return {
    ...state,
    isLoading:false,
    data:action.payload,
    featureData:featurePart,
   }
}



}

export default ProductReducer;