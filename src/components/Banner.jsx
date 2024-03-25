import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

const Banner = () => {
  return (
    <section className="bg-[#1313130e] lg:min-h-[550px] py-16 px-10 md:px-28 rounded-2xl my-5">
      <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-[620px] font-serif leading-snug mb-10">
            Books to freshen up your bookshelf
          </h2>
          <Link
            to="/listed-books"
            className="px-8 bg-[#23BE0A] text-xl py-4 rounded-lg font-medium text-white"
          >
            View The List
          </Link>
        </div>
        <div>
          <img src={heroImage} alt="banner-image" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
