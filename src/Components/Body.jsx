import { useState, useEffect, lazy, Suspense } from "react";
import ShimmerUI from "./ShimmerUI";

const SearchBar = lazy(() => import("./SearchBar"));
const Rating = lazy(() => import("./Rating"));
const Restaurant_Card = lazy(() => import("./Restaurant_Card"));

import useRestaurant_API from "../Hooks/useRestaurant_API";

const Body = () => {
  const resData = useRestaurant_API();
  // const newResData = resData?.data?.cards?.[3]?.card?.card?.info;
  // const { name, cuisines, avgRating, id, sla } = newResData;
  // console.log(newResData);

  return (
    <Suspense fallback={<ShimmerUI />}>
      <div>
        {!resData ? (
          <ShimmerUI />
        ) : (
          <>
            {/* Search And Filter */}

            <div className="flex gap-6 p-2 max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-amber-100 rounded-2xl shadow-lg">
              <SearchBar />
              <Rating />
            </div>

            {/* Main Restaurant Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {resData?.data?.cards?.map((res) => {
                  const info = res?.card?.card?.info;
                  return !info ? null : (
                    <Restaurant_Card restaurantInfo={info} key={info.id} />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </Suspense>
  );
};

export default Body;
