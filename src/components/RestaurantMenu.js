import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ()=>{
    const { id } = useParams();
    const resData = useFetchRestaurantMenu(id);

    const [showItems, setShowItems] = useState(0);
    
    if(resData == null) return <Shimmer/>

    const restaurant = resData?.cards[2]?.card?.card?.info || {};
    const { name, cuisines, costForTwoMessage } = restaurant;
    const itemsCards = resData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ?? [];
    const categories = resData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((itemCategory)=>
        itemCategory?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"           
        );
    return(
        <div className="text-center">
            <h1 className="text-2xl font-bold">{name}</h1>
            <h3 className="text-lg text-gray-600">{cuisines?.join(", ")}</h3>
            <h4 className="text-sm mt-2"><ul>
                {itemsCards?.map((item)=>(
                    <li key={item?.card?.info?.id}>
                    </li>
                    )
                )}
                </ul>
            </h4>
            {categories?.map((category, index)=><RestaurantCategory 
                key={category?.card?.card?.title}   
                category={category?.card?.card} 
                showItems={showItems === index ? true: false}
                setShowItems={() => setShowItems(prev => prev === index ? null : index)}
                />)}
        </div>
    )
}

export default RestaurantMenu;