import React from 'react'
import { useFilterContext } from './context/Filtercontext'
import GridViewer from './GridViewer'
import LinearView from './LinearView'
const Productlist = () => {

const {filter_products,grid_view}=useFilterContext()

  if(grid_view){
    return <GridViewer products={filter_products}/>
  }
  return <LinearView products={filter_products}/>
}

export default Productlist;