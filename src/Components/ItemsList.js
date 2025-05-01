import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItems } from "../../utils/cartSlice";

const ItemsList = ({ Items }) => {
  const dispatch = useDispatch();

  const handleItems = (Item) => {
    dispatch(addItems(Item));
  };

  return (
    <div>
      {Items.map((Item) => (
        <div
          key={Item?.card?.info?.id}
          className="flex flex-col md:flex-row justify-between gap-4 p-4 mb-4 border-b border-gray-300"
        >
          {/* LEFT: Text content */}
          <div className="md:w-9/12">
            <div className="text-lg font-medium text-gray-800 mb-1">
              <span>{Item?.card?.info?.name}</span>{" "}
              <span className="text-gray-600">
                – ₹
                {Item?.card?.info?.price
                  ? Item?.card?.info?.finalPrice / 100 ||
                    Item?.card?.info?.price / 100
                  : Item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed break-words">
              {Item?.card?.info?.description}
            </p>
          </div>

          {/* RIGHT: Image + Button */}
          <div className="md:w-3/12 flex flex-col items-center relative">
            <img
              src={CDN_URL + Item?.card?.info?.imageId}
              alt={Item?.card?.info?.name}
              className="rounded-md h-36 w-full object-cover"
            />
            <button
              onClick={() => handleItems(Item)}
              className="mt-2 px-4 py-1 bg-black text-green-400 rounded-md shadow hover:bg-gray-800 transition-all"
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
