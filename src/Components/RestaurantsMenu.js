import Shimmer from "./Shimmer";
import useRestaurantMenuItems from "../../utils/useRestaurantMenuItems";
import { useParams } from "react-router-dom";
const RestaurantsMenu = ()=>{
    const {id} = useParams();
    const restaurantMenuItems = useRestaurantMenuItems(id);
    if(restaurantMenuItems===null) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage} = restaurantMenuItems?.cards[2]?.card?.card?.info;
    const {itemCards} = restaurantMenuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
    return ( 
        <div className="restaurantMenu">           
            <h1>{name}</h1>
            <p>{cuisines} - {costForTwoMessage}/100</p>
            <h2>Menu</h2>
            <ul>
  {itemCards.map((item) => (
    <li key={item?.card?.info?.id}>
      {item?.card?.info?.name} - {"Rs."}
      {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice/100}
    </li>
  ))}
</ul>
        </div>
    )
}
export default RestaurantsMenu;