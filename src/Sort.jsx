import React from "react";
import { FiAlignJustify, FiGrid } from "react-icons/fi";
import { useFilterContext } from "./context/Filtercontext";

const Sort = () => {
  const {
    all_products,
    grid_view,
    setGridView,
    setListView,
    handleSortChange,
    sorting,
  } = useFilterContext();

  return (
    <div className="grid grid-cols-3">
      <div className="grid grid-cols-2">
        <button onClick={setListView} className="mx-1">
          <FiAlignJustify />
        </button>
        <button onClick={setGridView} className="mx-1">
          <FiGrid />
        </button>
      </div>
      <div>{all_products.length} products available</div>
      
      <div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            onClick={sorting}
            onChange={handleSortChange}
            
          >
          
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
            <option value="a-z">Price (A-Z)</option>
            <option value="z-a">Price (Z-A)</option>
          </select>
        </form>
        
      </div>
    </div>
  );
};

export default Sort;
