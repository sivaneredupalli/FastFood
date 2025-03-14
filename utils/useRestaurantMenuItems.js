import { useState,useEffect } from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenuItems = (id) => {
    const [restaurantMenuItems,setRestaurantMenuItems] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch(MENU_URL+id);
        const json = await data.json();
        setRestaurantMenuItems(json.data)
    }
    
    return restaurantMenuItems;
}
export default useRestaurantMenuItems;