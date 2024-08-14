import {
  ChartNoAxesCombined,
  Users,
  Wallet,
  HeartHandshake,
} from "lucide-react";

const About = () => {
  return (
    <section className="px-6 mt-6 lg:mt-12" id="about">
      <h1 className="text-3xl sm:text-4xl font-medium mb-8 lg:text-center lg:mb-12">
        One platform for all your{" "}
        <span className="text-green-700">money things</span>{" "}
      </h1>
      <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="bg-blue-600 p-5">
          <div className="flex items-stretch gap-2">
            <Users className="text-white" width={32} height={32} />
            <h1 className="text-3xl font-medium text-white mb-2">
              Who are we?
            </h1>
          </div>
          <p className="font-medium text-white">
            We are a dedicated team of tech innovators committed to helping you
            achieve your financial goals. Our platform combines cutting-edge
            technology with personalized support to simplify and enhance your
            financial journey. Join us to take control of your finances and
            secure a brighter future.
          </p>
        </div>
        <div className="bg-green-800 p-5">
          <div className="flex items-stretch gap-2">
            <ChartNoAxesCombined
              className="text-white"
              width={32}
              height={32}
            />
            <h1 className="text-3xl text-white font-medium mb-2">
              Grow Savings Faster
            </h1>
          </div>
          <p className="text-white font-medium">
            Accelerate your savings with ease using our platform. Our innovative
            tools and insights help you maximize your savings potential, track
            progress, and achieve your financial goals faster. Start growing
            your savings today and watch your finance improve.
          </p>
        </div>
        <div className="bg-orange-600 p-5">
          <div className="flex items-stretch gap-2">
            <Wallet className="text-white" width={32} height={32} />
            <h1 className="text-3xl font-medium text-white mb-2">
              Financial Planning
            </h1>
          </div>
          <p className="font-medium text-white">
            Our platform offers a comprehensive approach to financial planning.
            Whether you're budgeting or saving, we provide the tools and
            resources to create a personalized financial plan that suits your
            needs and helps you achieve your long-term goals.
          </p>
        </div>
        <div className="bg-yellow-500 p-5">
          <div className="flex items-stretch gap-2">
            <HeartHandshake className="text-white" width={32} height={32} />
            <h1 className="text-3xl font-medium text-white mb-2">
              Guidance and Support
            </h1>
          </div>
          <p className="font-medium text-white">
            Access valuable guidance and support through our platform. We
            provide resources and information to help you navigate your
            financial journey. Utilize our tools and recommendations to make
            informed financial decisions and work towards achieving your goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
