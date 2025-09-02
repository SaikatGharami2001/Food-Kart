import { lazy } from "react";

const ShimmerUI = lazy(() => import("./ShimmerUI"));
const SearchBar = lazy(() => import("./SearchBar"));
const RatingFilter = lazy(() => import("./RatingFilter"));

const Body = () => {
  return (
    <div>
      {/* Search And Filter */}

      <div className="flex gap-6 p-2 max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-amber-100 rounded-2xl shadow-lg">
        <SearchBar />
        <RatingFilter />
      </div>

      {/* Main Restaurant Body */}
    </div>
  );
};

export default Body;
