import RestanurentCard, {IsRestaurantOpen} from "./RestaurantCard";
import useInternetStatus from "../utils/useInternetStatus"; 
import {useState, useEffect} from "react";
import Shimmer  from "./shimmer";
import {Link} from "react-router-dom";

const Body = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // HOC-wrapped component: pass the Restaurant card into the HOC to get a renderable component
    const OpenRestaurantCard = IsRestaurantOpen(RestanurentCard);
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async()=>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    let internetStatus = useInternetStatus();
    if(!internetStatus) return <h1>You are offline. Please check your internet connection......</h1>

    //conditional rendering
    if(listOfRestaurants.length === 0){
        return <Shimmer />;
    }

    return(
        <div className="body">  
            <div className="filter-restaurants">
                <div className="search p-4 mx-10 flex items-center">
                    <input
                        className="search-box border border-black px-3 py-2 rounded w-100 h-10"
                        value={searchText}
                        onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <button
                        className="search-btn ml-3 bg-slate-700 text-white px-4 py-2 rounded"
                        onClick={()=>{
                            const filteredRestaurants = listOfRestaurants.filter((filterData)=>filterData.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(filteredRestaurants);
                        }}
                    >
                        Search
                    </button>
                    <button
                        className="filter-btn ml-3 bg-slate-700 text-white px-4 py-2 rounded"
                        onClick={()=>{
                            const filteredList = listOfRestaurants.filter((filterData)=>filterData.info.avgRating>4);
                            setFilteredRestaurants(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
                <div className="res-container flex flex-wrap gap-4">
                    {filteredRestaurants.map((resData)=>(
                        <Link key = {resData.info.id} to={"/restaurantmenu/" + resData.info.id}>
                            {resData?.info?.isOpen ? <OpenRestaurantCard resData={resData} /> : <RestanurentCard resData={resData} />}
                        </Link>
                    ))}
                </div>
        </div>
    )
}

export default Body;