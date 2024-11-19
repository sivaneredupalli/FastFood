import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,cloudinaryImageId,avgRatingString,costForTwo,areaName} = resData?.info;
    const {slaString} = resData?.info?.sla;
   
    return(
        <div className="restaurant-card">
    <div className="restaurant-img">
        <img src={CDN_URL + cloudinaryImageId } alt="image" /> 
    </div>
    <div className="restaurant-details">
        <div className="group">
             <div className="restaurant-name"><b>{name}</b></div>
             <div className="rating">{avgRatingString} &#x2605;</div>
        </div>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwo}</p>
            <p>{areaName} </p>
            <p>{slaString}</p>
 
        </div>
    </div>
    )
}
export default RestaurantCard;