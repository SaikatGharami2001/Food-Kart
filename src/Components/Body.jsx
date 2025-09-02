import { lazy } from "react";

const ShimmerUI = lazy(() => import("./ShimmerUI"));

const Body = () => {
  return (
    <div>
      <ShimmerUI />
    </div>
  );
};

export default Body;
