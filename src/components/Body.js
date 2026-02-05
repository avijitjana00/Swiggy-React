import RestanurentCard from "./RestaurantCard"; 
import {useState, useEffect} from "react";
import Shimmer  from "./shimmer";

const Body = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //conditional rendering
    if(listOfRestaurants.length === 0){
        return <Shimmer />;
    }
    return(
        <div className="body">  
            <div className="filter-restaurants">
                <div className="search"> <button className="search-btn" onClick={()=>{
                    const filteredRestaurants = listOfRestaurants.filter((filterData)=>filterData.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredRestaurants);
                }}>Search</button>
                    <input className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                </div>
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter((filterData)=>filterData.info.avgRating>4);
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
                <div className="res-container">
                    {filteredRestaurants.map((resData)=>(
                        <RestanurentCard resData={resData} key={resData.info.id}/>
                    ))}
                </div>
        </div>
    )
}

export default Body;