import { IMG_API } from "../Utils/constants";

const Restaurant_Card = ({ restaurantInfo }) => {
  const { name, cuisines, avgRating, id, sla } = restaurantInfo;

  return (
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg bg-orange-100 hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={IMG_API}
        alt="Restaurant"
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h1 className="text-lg font-bold text-gray-800">{}</h1>

        {/* Rating & Delivery */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span className="flex items-center gap-1">⭐ {avgRating}</span>
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
            30 min
          </span>
        </div>

        {/* Cuisines */}
        <h2 className="text-sm text-gray-500 truncate">
          {cuisines.join(", ")}
        </h2>
      </div>
    </div>
  );
};

export default Restaurant_Card;
