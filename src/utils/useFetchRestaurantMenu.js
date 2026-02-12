const { useState, useEffect } = require("react");
const { SWIGGY_RESTAURANT_MENU_ROUTE } = require("./constants");

const useFetchRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const data = await fetch(SWIGGY_RESTAURANT_MENU_ROUTE + resId);
        const json = await data.json();

        setResInfo(json?.data);
    }
    return resInfo;
}

export default useFetchRestaurantMenu;