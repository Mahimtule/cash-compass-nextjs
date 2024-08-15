import Link from "next/link";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const Footer = () => {
  return (
    <footer className="px-6 pb-8 w-full grid grid-cols-1 gap-3 justify-center md:grid-cols-2 md:gap-12">
      <form className="flex flex-col gap-3">
        <h1 className="text-3xl font-medium mb-2">Contact Us</h1>
        <Label>Name</Label>
        <Input type="text" required />
        <Label>Email</Label>
        <Input type="email" required />
        <Label>Message</Label>
        <Textarea rows={5} required />
        <button className="btn_dark mt-3">Submit</button>
      </form>
      <div className="md:mt-14">
        <h1 className="text-lg md:text-xl mb-2 font-medium">Navigation</h1>
        <ul className="flex flex-col justify-center items-start gap-2">
          <li className="hover:translate-x-3 duration-150">
            <Link
              href="#home"
              className="md:text-lg font-medium hover:text-green-700 hover:translate-x-2 duration-150"
            >
              Home
            </Link>
          </li>
          <li className="hover:translate-x-3 duration-150">
            <Link
              href="#features"
              className="md:text-lg font-medium hover:text-green-700 hover:translate-x-2 duration-150"
            >
              Features
            </Link>
          </li>
          <li className="hover:translate-x-3 duration-150">
            <Link
              href="#about"
              className="md:text-lg font-medium hover:text-green-700 duration-150"
            >
              About
            </Link>
          </li>
          <li className="hover:translate-x-3 duration-150">
            <Link
              href="#faq"
              className="md:text-lg font-medium hover:text-green-700 hover:translate-x-2 duration-150"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
