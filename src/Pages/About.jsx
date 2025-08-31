import { ABOUT_IMG } from "../Utils/contants";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1">
          <img
            src={ABOUT_IMG}
            alt="Delicious Food"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-orange-600">About FoodKart</h2>
          <p className="text-gray-700 text-lg">
            FoodKart is your ultimate online food ordering platform, bringing
            your favorite restaurants and dishes right to your doorstep. Browse
            menus, explore cuisines, and enjoy a seamless ordering experience —
            all in one place.
          </p>
          <p className="text-gray-700 text-lg">
            Powered by real-time data from Swiggy, FoodKart ensures you get
            accurate restaurant information, mouth-watering photos, and
            lightning-fast delivery options. Whether you’re craving pizza,
            burgers, or local delicacies, we’ve got you covered!
          </p>
          <a
            href="#order"
            className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
