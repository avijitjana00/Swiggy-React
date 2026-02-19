import {CDN_URL} from "../utils/constants";

const ItemList = ({items})=>{
    return(
        <div>
            {items?.map((item)=>(
                <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                    <div className="py-2">
                    <span className="font-medium">{item?.card?.info?.name} - ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100} </span>
                    </div>
                    <p className="text-sm text-gray-500">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="relative">
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-full rounded-xl"></img>
                        <button className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10 bg-white text-green-600 border border-gray-200 px-3 py-1 rounded-lg shadow-sm font-semibold whitespace-nowrap inline-flex items-center gap-1">
                            <span>Add</span>
                            <span className="text-lg leading-none">+</span>
                        </button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;