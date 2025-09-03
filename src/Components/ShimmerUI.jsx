import ShimmerCards from "../Components/ShimmerCards";

const ShimmerUI = () => {
  return (
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
  );
};

export default ShimmerUI;
