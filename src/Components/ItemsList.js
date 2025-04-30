
import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItems } from "../../utils/cartSlice";
const ItemsList = ({Items}) => {
    
    const dispatch =useDispatch()
    const handleItems=(Item)=>{
       dispatch(addItems(Item))
    }
    return(
       <div>
       { Items.map((Item)=>(
        <div key = {Item?.card?.info?.id} className="text-left p-2 m-2 border-b-2 border-gray-400 flex justify-between">
            <div className="w-9/12">
            <div className="py-2 text-lg">
            <span>{Item?.card?.info?.name}</span>
            <span> - ₹{Item?.card?.info?.price ? Item?.card?.info?.finalPrice/100 ||Item?.card?.info?.price /100 : Item?.card?.info?.defaultPrice/100}</span>
            </div>
            <p>{Item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12">
            <div className="absolute">
            <button className="p-1 bg-black text-green-400 shadow-lg rounded-lg mx-14" onClick={()=>handleItems(Item)}>ADD+</button>
            </div>
            <div>
            <img className=" rounded-md h-[180px] w-[237px] bg-white" src={CDN_URL + Item?.card?.info?.imageId} alt="image" />
            </div>
            </div>
        </div>
        ))}
       </div>
        
    ) 
}
export default ItemsList;