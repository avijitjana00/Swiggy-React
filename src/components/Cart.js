import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCartItems } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store)=> store?.cart?.items);

    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCartItems());
    }
    return (
        <div className="text-center py-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <div className=" bg-slate-950 text-white p-2 rounded-lg mb-4 w-2/12 ml-auto">
                    <button onClick={handleClearCart}>
                    <h1 className="font-bold text-xl text-center text-cyan-200">Clear Cart</h1>
                </button>
                </div>
                {cartItems.length === 0 ? (
                    <h1 className="text-xl font-medium">Your cart is empty</h1>
                ) : (
                    <h1 className="text-xl font-medium mb-4">You have {cartItems.length} items in your cart</h1>
                )}
                <ItemList items= {cartItems}></ItemList>
            </div>
        </div>
    )
}

export default Cart;