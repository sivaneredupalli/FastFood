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
        <div className="body ">
       <div className="search m-3 p-4 ml-4 flex flex-wrap items-center gap-4 bg-white rounded-lg shadow-sm">
  {/* Search Input */}
  <input
    type="text"
    placeholder="Search restaurants..."
    className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
    value={searchFilter}
    onChange={(e) => setSearchFilter(e.target.value)}
  />

  {/* Search Button */}
  <button
    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-sm transition-all"
    onClick={() => {
      const searchFilteredList = listOfRestaurants.filter((res) =>
        res?.info?.name.toLowerCase().includes(searchFilter.toLowerCase())
      );
      setFilteredRestaurant(searchFilteredList);
    }}
  >
    Search
  </button>

  {/* Top Rated Button */}
  <button
    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md shadow-sm transition-all"
    onClick={() => {
      const filteredResList = listOfRestaurants.filter(
        (resCard) => resCard?.info?.avgRating > 4.5
      );
      setFilteredRestaurant(filteredResList);
    }}
  >
    Top Rated Restaurants
  </button>

  {/* Username Input */}
  <div className="flex items-center gap-2 ml-auto">
    <label htmlFor="username" className="text-gray-800 font-medium">
      User Name:
    </label>
    <input
      id="username"
      type="text"
      className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={loggedInUser}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="Enter name"
    />
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