import ItemList from "./ItemList";

const RestaurantCategory = ({category, showItems, setShowItems})=>{
    
    const handleCategoryClick = () => {
        setShowItems();
    }

    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-5">
            <div className="flex justify-between">
                <span className="font-bold">{category?.title}({category?.itemCards?.length})</span>
                <button onClick={handleCategoryClick} aria-expanded={showItems} className="cursor-pointer focus:outline-none">
                    {showItems ? '⬆️' : '⬇️'}
                </button>
            </div>
            {showItems && <ItemList items={category?.itemCards}/>}
            </div>
        </div>
    )
}               

export default RestaurantCategory;