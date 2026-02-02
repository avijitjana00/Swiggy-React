import RestanurentCard from "./RestaurantCard"; 
import { restrauntList } from "../utils/resData";
import {useState} from "react";

const Body = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState(restrauntList);
    return(
        <div className="body">  
            <div className="filter-restaurants">
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter((filterData)=>filterData.info.avgRating>4);
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
                <div className="res-container">
                    {listOfRestaurants.map((resData)=>(
                        <RestanurentCard resData={resData} key={resData.info.id}/>
                    ))}
                </div>
        </div>
    )
}

export default Body;