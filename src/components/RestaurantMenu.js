import React from "react";
import { useState, useEffect} from "react";
import Shimmer from "./shimmer";
import {SWIGGY_RESTAURANT_MENU_ROUTE} from "../utils/constants.js";
import {useParams} from "react-router-dom";

const RestaurantMenu = ()=>{
    const { id } = useParams();
    const [resData, setResData] = useState(null);

    useEffect(()=>{
         fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(SWIGGY_RESTAURANT_MENU_ROUTE + id);
        console.log(SWIGGY_RESTAURANT_MENU_ROUTE + id);
        const json = await data.json();
        setResData(json?.data);
    }

    if(resData == null) return <Shimmer/>

    const restaurant = resData?.cards[2]?.card?.card?.info || {};
    const { name, cuisines, costForTwoMessage } = restaurant;
    const itemsCards = resData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ?? [];
    return(
        <div>
            <h1>{name}</h1>
            <h3>{cuisines?.join(",")}</h3>
            <h4><ul>
                {itemsCards?.map((item)=>(
                    <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - 
                    {(item?.card?.info?.price ?? 0)/100}
                    </li>)
                )}
                </ul>
            </h4>
        </div>
    )
}

export default RestaurantMenu;