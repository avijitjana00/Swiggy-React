import { CDN_URL } from "../utils/constants";
const RestanurentCard = (props)=>{
    const {cloudinaryImageId, name, cuisines, costForTwoMessage, avgRating, deliveryTime} = props?.resData?.info;
    return(
        <div className="w-72 h-80 bg-white rounded-xl shadow-md p-4 flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-105">
            <img
                className="res-logo w-full h-36 object-cover rounded-md mb-3"
                src={`${CDN_URL}${cloudinaryImageId}`}
                alt={name}
            />

            <h2 className="text-lg font-semibold truncate">{name}</h2>
            <h4 className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</h4>

            <div className="mt-2 text-sm text-gray-700">{costForTwoMessage}</div>

            <div className="mt-auto w-full flex items-center justify-between text-sm text-gray-600">
                <div className="inline-flex items-center gap-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">{avgRating}</span>
                    <span className="text-xs">stars</span>
                </div>
                <div className="text-xs">{deliveryTime} mins</div>
            </div>
        </div>
    )
}

export default RestanurentCard;