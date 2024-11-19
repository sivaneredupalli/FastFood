import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import { RESTAURANTS_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=>{
    // Local state variable - useState() Hook 
    let [listOfRestaurants,setListOfRestaurants] = useState([]);
    let [filteredRestaurant, setFilteredRestaurant] = useState([])
    let [searchFilter,setSearchFilter] = useState("");
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
     //Conditional Rendering
    return listOfRestaurants.length === 0? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <input type="text" className="searchFilter" value={searchFilter} onChange={(e)=>{
                    return setSearchFilter(e.target.value);
                }}></input>
                <button onClick={()=>{
                    console.log(searchFilter);
                    let searchFilteredList = listOfRestaurants.filter((res)=>{
                       return res?.info?.name.toLowerCase().includes(searchFilter.toLowerCase());
                    })
                    setFilteredRestaurant(searchFilteredList); 
                }}>Search</button>
                <button className="filter-btn"onClick={()=>{
                   const filteredResList = listOfRestaurants.filter((resCard) => resCard?.info?.avgRating > 4.5);
                   setFilteredRestaurant(filteredResList);  // Assign filtered data back to resList
                   console.log(filteredResList);
                    }
                } >Top Rated Restaurants</button>
            </div>
        <div className="restaurant-container">
        {
           filteredRestaurant.map( (restaurant) =>(<Link key = {restaurant?.info?.id} to={"/Restaurant/" + restaurant?.info?.id}><RestaurantCard  resData = {restaurant}/>
</Link>)
             
            )
        }
  
    </div>
    </div>
    );
};
export default Body;