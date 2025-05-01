import { useState } from "react";
import ItemsList from "./ItemsList";
const RestaurantCategoryItems = ({data,showItemIndex,setShowItemIndex})=>{
    // console.log(data)
    //Added toggle feature
    const handleItems=()=>{
        setShowItemIndex(showItemIndex)
    }
    return(
        <div className="w-full max-w-2xl bg-white border border-gray-200 p-5 mx-auto my-6 rounded-lg shadow-sm">
        {/* Accordion Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleItems}
        >
          <span className="font-semibold text-gray-800 text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span className="text-xl">
            {showItemIndex ? "🔽" : "🔼"}
          </span>
        </div>
      
        {/* Accordion Body */}
        {showItemIndex && (
          <div className="mt-4">
            <ItemsList Items={data?.itemCards} />
          </div>
        )}
      </div>
      
    );
};
export default RestaurantCategoryItems;