import { useState, useEffect } from "react";
import useRestaurant_API from "../Hooks/useRestaurant_API";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const resData = useRestaurant_API();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const data = resData?.data?.cards
      ?.map((res) => res?.card?.card?.info)
      ?.filter((res) => res)
      ?.map((res) => res?.name);
    console.log(data);
  }, [resData]);

  return (
    <div className="w-full">
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
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
