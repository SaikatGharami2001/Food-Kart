const SearchBar = () => {
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
      />
    </div>
  );
};

export default SearchBar;
