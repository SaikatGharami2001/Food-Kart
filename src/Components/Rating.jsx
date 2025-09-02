const Rating = () => {
  return (
    <div className="w-full">
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
  );
};

export default Rating;
