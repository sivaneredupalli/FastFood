import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantsMenu = ()=>{
    let [restaurantMenuItems,setRestaurantMenuItems] = useState(null)
    const {id} = useParams();
    
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async()=>{
        const data =await fetch(MENU_URL+id);
        const json = await data.json();
        console.log(json);
        setRestaurantMenuItems(json)
        
    }
    if(restaurantMenuItems===null) return <Shimmer/>
    const {name,cuisines,costForTwoMessage} = restaurantMenuItems?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = restaurantMenuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
    
    return ( 
        <div className="restaurantMenu">
            
            <h1>{name}</h1>
            <p>{cuisines} - {costForTwoMessage}</p>
            <h2>Menu</h2>
           
            <ul>                                            
           <li>{itemCards.map(item=><li key={item.card?.info?.id}>{item?.card?.info?.name} : Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>)}</li>
            </ul>
        </div>
    )
}
export default RestaurantsMenu;