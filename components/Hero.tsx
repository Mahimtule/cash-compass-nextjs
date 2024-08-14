import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="p-6" id="home">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mb-8 lg:mb-0 flex flex-col justify-center items-start gap-6 sm:items-center lg:items-start">
          <h1 className="text-5xl font-medium md:text-7xl sm:text-center md:max-w-[800px] lg:text-left">
            Change the way you manage your{" "}
            <span className="font-serif text-green-700">money</span>
          </h1>
          <p className="text-gray-600 font-medium sm:text-center sm:max-w-[500px] md:max-w-[600px] lg:text-left">
            From your everyday spending, to planning for your future with
            savings and investments, we help you get more from your money
          </p>
          <div className="flex flex-col justify-center items-start sm:items-center gap-6 md:flex-row md:items-center">
            <button className="btn">Get Started Now</button>
            <div className="border p-5 rounded-lg">
              <div className="mb-2 flex justify-start items-center gap-2">
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
              </div>
              <p className="font-medium text-gray-600">
                see what people say about us
              </p>
              <a href="/" className="font-medium underline">
                check reviews
              </a>
            </div>
          </div>
        </div>
        <img
          src="/images/hero.png"
          alt="hero-img"
          className="w-full h-auto object-cover lg:min-h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
