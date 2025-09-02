import { useState, useEffect, lazy, Suspense } from "react";

const ShimmerUI = lazy(() => import("./ShimmerUI"));
const SearchBar = lazy(() => import("./SearchBar"));
const Rating = lazy(() => import("./Rating"));
const Restaurant_Cards = lazy(() => import("./Restaurant_Cards"));

const Body = () => {
  const [] = useState("");

  return (
    <div>
      {/* Search And Filter */}

      <div className="flex gap-6 p-2 max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-amber-100 rounded-2xl shadow-lg">
        <Suspense fallback={<h1>Loading</h1>}>
          <SearchBar />
          <Rating />
        </Suspense>
      </div>

      {/* Main Restaurant Body */}
      <Restaurant_Cards />
    </div>
  );
};

export default Body;
