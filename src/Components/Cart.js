import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearItems } from "../../utils/cartSlice";

const Cart = ()=>{
    const cartList = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleClearItems =(Items)=>{
        dispatch(clearItems(Items))
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold"> Cart </h1>
            
            <div className="w-6/12 m-auto">
            <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearItems}>Clear Cart</button>
            {cartList.length===0 && (<h1>Your cart is empty. Please add items to the cart.</h1>)}
            <ItemsList Items={cartList}/> 
            </div>
                
            
        </div>
    )
}
export default Cart;