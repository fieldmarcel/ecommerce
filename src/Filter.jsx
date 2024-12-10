import React from 'react'
import { useFilterContext } from './context/Filtercontext'

const Filter = ({updatefiltervalue}) => {

  const {filter:{text},}= useFilterContext;
  return (
    <div className='filter-search'>

<form onSubmit={(e)=>e.preventDefault()}>

<input type='text'name='text' value={text} onChange={updatefiltervalue}></input>


</form>

    </div>
  )
}

export default Filter
