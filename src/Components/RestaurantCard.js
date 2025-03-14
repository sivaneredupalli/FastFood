import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,cloudinaryImageId,avgRatingString,costForTwo,areaName} = resData?.info;
    const {slaString} = resData?.info?.sla;
   
    return(
        <div className="m-4 p-4 w-[256px] bg-gray-100 hover:bg-gray-200 rounded-lg">
    <div>
        <img className="rounded-lg" src={CDN_URL + cloudinaryImageId } alt="image" /> 
    </div>
    <div className="restaurant-details">
        <div className="">
             <div className="font-bold py-4 text-lg"><b>{name}</b></div>
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