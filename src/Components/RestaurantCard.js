import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,cloudinaryImageId,avgRatingString,costForTwo,areaName} = resData?.info;
    const {slaString} = resData?.info?.sla;
   
    return(
        <div className="mx-2 my-2 p-4 w-[250px] h-[460px] bg-gray-100 hover:bg-gray-200 rounded-lg">
    <div>
        <img className="rounded-lg h-[180px] w-[237px]" src={CDN_URL + cloudinaryImageId } alt="image" /> 
    </div>
    <div className="restaurant-details">
        <div className="">
             <div className="font-bold py-4 text-lg"><b>{name}</b></div>
             <div className="">{avgRatingString} &#x2605;</div>
        </div>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwo}</p>
            <p>{areaName} </p>
            <p>{slaString}</p>
 
        </div>
    </div>
    )
}
//Higher order component
// Will take RestaurantCard => returns enhanced RestaurantCard

export const withDiscountLebel = (RestaurantCard)=>{
    return(props)=>{
        const {resData} = props;
        const {header,subHeader} = resData?.info?.aggregatedDiscountInfoV3;
        return(
            <div className="">
                <label className="bg-blue-100 absolute ml-6 my-4 p-1 rounded-lg">{header} {subHeader}</label>
                
                <RestaurantCard {...props}/>
            </div>
            
        )
    }
}
export default RestaurantCard;