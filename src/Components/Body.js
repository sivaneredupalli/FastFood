import RestaurantCard,{withDiscountLebel} from "./RestaurantCard";
import { useState,useEffect,useContext } from "react";
import { RESTAURANTS_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
const Body = ()=>{
    // Local state variable - useState() Hook 
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchFilter,setSearchFilter] = useState("");
    console.log("Body Redenred",listOfRestaurants)
    //import higher order component
    const RestaurantCardWithLabel = withDiscountLebel(RestaurantCard);
    const {loggedInUser,setUserName} =useContext(UserContext)

     useEffect(()=>{                    // UseEffect Hook
        fetchData()
     },[])  
     const fetchData = async()=>{ 
        const data = await fetch(RESTAURANTS_URL)
        const json = await data.json();
        console.log(json)
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }
    
     const onlineStatus = useOnlineStatus();
     if(onlineStatus === false) return <h1> Looks like your internet connection is in offline!! please check before you try...</h1>
    return (listOfRestaurants?.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="search m-3 p-4 ml-4 flex">
                <input type="text" className="border border-solid border-black rounded-sm" value={searchFilter} onChange={(e)=>{
                    return setSearchFilter(e.target.value);}}></input>
                <button className="px-4 py-1 bg-blue-100 rounded-sm font-bold" onClick={()=>{
                    console.log(searchFilter);
                    let searchFilteredList = listOfRestaurants.filter((res)=>{
                       return res?.info?.name.toLowerCase().includes(searchFilter.toLowerCase());
                    })
                    setFilteredRestaurant(searchFilteredList); 
                }}>Search</button>
                <div className="px-4 py-1 bg-blue-100 rounded-sm ml-4">
                <button className="font-bold text-center"onClick={()=>{
                   const filteredResList = listOfRestaurants.filter((resCard) => resCard?.info?.avgRating > 4.5);
                   setFilteredRestaurant(filteredResList);  // Assign filtered data back to resList
                   console.log(filteredResList);
                    }
                } >Top Rated Restaurants</button>
                </div>
                <div >
                <label className="font-bold px-2 py-2 bg-blue-100 rounded-sm ml-4">User Name : </label>
                <input type="text" className="border px-4 py-1 border-solid border-black rounded-sm" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
                </div>
                

                
            </div>
        <div className="flex flex-wrap max-w-[1400px] mx-auto justify-center ">
        { 
           filteredRestaurant.map( (restaurant) =>(<Link key = 
           {restaurant?.info?.id} to={"/Restaurant/" + restaurant?.info?.id}>
            {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (<RestaurantCardWithLabel resData = {restaurant}/>):<RestaurantCard  resData = {restaurant}/>}
            
</Link>)     
            )  
        }
    </div>
    </div>
    );
};
export default Body;