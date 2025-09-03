import { lazy, Suspense } from "react";

const ShimmerCards = lazy(() => import("../Components/ShimmerCards"));
// import ShimmerCards from "../Components/ShimmerCards";

const ShimmerUI = () => {
  return (
    <Suspense fallback={<ShimmerCards />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6">
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
        <ShimmerCards />
      </div>
    </Suspense>
  );
};

export default ShimmerUI;
