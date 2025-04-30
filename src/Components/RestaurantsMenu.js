import Shimmer from "./Shimmer";
import useRestaurantMenuItems from "../../utils/useRestaurantMenuItems";
import { useParams } from "react-router-dom";
import RestaurantCategoryItems from "./RestaurantCategoryItems";
import { useState } from "react";

const RestaurantsMenu = () => {
  const [showItemIndex, setShowItemIndex] = useState(null);
  const { id } = useParams();
  const restaurantMenuItems = useRestaurantMenuItems(id);

  if (restaurantMenuItems === null) return <Shimmer />;

  // Safely extracting info
  const menuInfo = restaurantMenuItems?.cards[2]?.card?.card?.info || {};
  const { name, cuisines = [], costForTwoMessage } = menuInfo;
  const itemCards = restaurantMenuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  const CategoryItems =
    restaurantMenuItems?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(itemCards);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="text-lg font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>

      <div className="my-4">
        {CategoryItems?.map((c, index) => (
          <RestaurantCategoryItems
            key={c?.card?.card?.categoryId}
            data={c?.card?.card}
            showItemIndex={index === showItemIndex}
            setShowItemIndex={() =>
              setShowItemIndex((prevIndex) => (prevIndex === index ? null : index))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsMenu;
