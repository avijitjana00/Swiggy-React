import { CDN_URL } from "../utils/constants";
const RestanurentCard = (props)=>{
    const {cloudinaryImageId, name, cuisines, costForTwoMessage, avgRating, deliveryTime} = props?.resData?.info;
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src={`${CDN_URL}${cloudinaryImageId}`}/>
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwoMessage}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>

        </div>
    )
}

export default RestanurentCard;