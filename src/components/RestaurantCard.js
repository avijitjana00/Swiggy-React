import { CDN_URL } from "../utils/constants";
const RestanurentCard = (props)=>{
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla} = props?.resData?.info;
    return(
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-105 h-72 w-72 ml-5">
            <img
                className="res-logo h-36 object-cover rounded-md mb-3"
                src={`${CDN_URL}${cloudinaryImageId}`}
                alt={name}
            />

            <h2 className="text-lg font-semibold truncate">{name}</h2>
            <h4 className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</h4>

            <div className="mt-2 text-sm text-gray-700">{costForTwo}</div>

            <div className="mt-auto w-full flex items-center justify-between text-sm text-gray-600">
                <div className="inline-flex items-center gap-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">{avgRating}</span>
                    <span className="text-xs">stars</span>
                </div>
                <div className="text-xs">{sla?.deliveryTime} mins</div>
            </div>
        </div>
    )
}

// Higher Order Component (HOC) - A function that takes a component and returns a new component
export const IsRestaurantOpen = (RestanurentCard)=>{
    return (props)=>{
        return(
            <div>
            <label className="absolute m-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">Open</label>
            <RestanurentCard {...props}/>
            </div>
        )
    }
}

export default RestanurentCard;