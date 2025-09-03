import { useState, useEffect, lazy, Suspense } from "react";
import ShimmerUI from "./ShimmerUI";

const SearchBar = lazy(() => import("./SearchBar"));
const Rating = lazy(() => import("./Rating"));
const Restaurant_Card = lazy(() => import("./Restaurant_Card"));

import useRestaurant_API from "../Hooks/useRestaurant_API";

const Body = () => {
  const resData = useRestaurant_API();
  const newResData = resData?.data?.cards?.[3]?.card?.card?.info;
  // const { name, cuisines, avgRating, id, sla } = newResData;
  console.log(newResData);

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
      {!newResData ? (
        <ShimmerUI />
      ) : (
        <Restaurant_Card restaurantInfo={newResData} />
      )}
    </div>
  );
};

export default Body;
