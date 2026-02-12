import Shimmer from "./shimmer";
import {useParams} from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";

const RestaurantMenu = ()=>{
    const { id } = useParams();
    const resData = useFetchRestaurantMenu(id);
    
    if(resData == null) return <Shimmer/>

    const restaurant = resData?.cards[2]?.card?.card?.info || {};
    const { name, cuisines, costForTwoMessage } = restaurant;
    const itemsCards = resData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ?? [];
    return(
        <div>
            <h1>{name}</h1>
            <h3>{cuisines?.join(", ")}</h3>
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