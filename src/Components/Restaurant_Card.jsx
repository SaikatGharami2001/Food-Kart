import { IMG_API } from "../Utils/constants";

const Restaurant_Card = ({ restaurantInfo }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = restaurantInfo;
  console.log(restaurantInfo);

  return (
    <div className="w-72 h-80 rounded-2xl overflow-hidden bg-orange-100 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col cursor-pointer">
      {/* Image */}
      <img
        src={IMG_API + cloudinaryImageId}
        alt={name}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 truncate">{name}</h1>

        {/* Rating & Delivery */}
        <div className="flex justify-between items-center mt-2 text-xl">
          <span className="flex items-center gap-1 text-yellow-600 font-medium">
            ⭐ {avgRating}
          </span>
          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-lg font-semibold">
            {sla?.deliveryTime} min
          </span>
        </div>

        {/* Cuisines */}
        <p className="text-lg text-gray-500 mt-2 line-clamp-2">
          {cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default Restaurant_Card;
