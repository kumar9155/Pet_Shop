import { Link } from "react-router-dom";
import HeroImage from "../../../assets/images/hero.avif";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className="text my-5">
        <h1 className="text-5xl font-bold">The Ultimate ePet Store</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          Unleash Happiness: Discover a World of Pet Delights at Pet_Shop.Where
          pets find their perfect match and love is unleashed.
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore eShop
        </Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img
          className="rounded-lg max-h-full"
          src={HeroImage}
          alt="Pet_Shop Hero Section"
        />
      </div>
    </section>
  );
};

export default Hero;
