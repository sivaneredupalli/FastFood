import { useState } from "react";
import ItemsList from "./ItemsList";
const RestaurantCategoryItems = ({data,showItemIndex,setShowItemIndex})=>{
    // console.log(data)
    //Added toggle feature
    const handleItems=()=>{
        setShowItemIndex(showItemIndex)
    }
    return(
        //Accordion header
        <div className="w-6/12 bg-gray-100 p-4 mx-auto my-4 rounded-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleItems}>
        <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
        <span>{showItemIndex ? "🔽" : "🔼"}</span>
        {/* //Accordion body */}
        </div>
        {showItemIndex && <ItemsList Items={data?.itemCards}/>}
        </div> 
    );
};
export default RestaurantCategoryItems;