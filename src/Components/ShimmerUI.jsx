import { lazy, Suspense } from "react";

const ShimmerCards = lazy(() => import("../Components/ShimmerCards"));

const ShimmerUI = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6">
      <Suspense
        fallback={
          <h1 className="col-span-full text-center text-xl">Loading...</h1>
        }
      >
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
      </Suspense>
    </div>
  );
};

export default ShimmerUI;
