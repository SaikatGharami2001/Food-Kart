import { lazy } from "react";

const ShimmerUI = lazy(() => import("./ShimmerUI"));

const Body = () => {
  return (
    <div>
      {/* Search and filter */}
      <div className="flex gap-6 p-6 max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-amber-100 rounded-2xl shadow-lg">
        {/* Search */}
        <div className="w-1/2">
          <label
            htmlFor="search"
            className="block text-orange-700 font-semibold mb-2"
          >
            🔎 Search
          </label>
          <input
            id="search"
            type="text"
            placeholder="Type to search..."
            className="w-full px-4 py-2 border border-orange-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder:text-orange-400"
          />
        </div>

        {/* Rating */}
        <div className="w-1/2">
          <label
            htmlFor="rating"
            className="block text-orange-700 font-semibold mb-2"
          >
            🍴 Restaurants
          </label>
          <select
            id="rating"
            className="w-full px-4 py-2 border border-orange-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none bg-white text-gray-700"
          >
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </div>
      </div>

      {/* Res Body */}
    </div>
  );
};

export default Body;
