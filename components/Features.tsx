import { Wallet, HandCoins, Handshake } from "lucide-react";
import Link from "next/link";

const Features = () => {
  return (
    <section className="px-6 lg:mt-10" id="features">
      <h1 className="text-3xl sm:text-4xl font-medium mb-6 lg:text-center lg:mb-12">
        Make your spendings, <span className="text-green-700">Well-spend</span>
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-center items-start gap-3 border p-5 rounded-lg">
          <div className="flex justify-start items-center gap-2">
            <Wallet />
            <h1 className="text-lg font-medium">Budget Tracking</h1>
          </div>
          <p className="mt-2 font-medium text-gray-600">
            Worried you might exceed your budget? Keep a close eye on your
            spending and stay on track effortlessly with our intuitive budget
            tracking platform.
          </p>
          <Link href="/" className="btn_dark">
            explore more
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-3 border p-5 rounded-lg">
          <div className="flex justify-start items-center gap-2">
            <HandCoins />
            <h1 className="text-lg font-medium">Expense Management</h1>
          </div>
          <p className="mt-2 font-medium text-gray-600">
            Concerned about managing your expenses? Effortlessly keep track of
            your spending with our expense management platform.
          </p>
          <Link href="/" className="btn_dark">
            explore more
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-3 border p-5 rounded-lg">
          <div className="flex justify-start items-center gap-2">
            <Handshake />
            <h1 className="text-lg font-medium">Finance Assistance</h1>
          </div>
          <p className="mt-2 font-medium text-gray-600">
            Need help with your finances? Get usefull guidance and support with
            our comprehensive finance assistance platform.
          </p>
          <Link href="/" className="btn_dark">
            explore more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
