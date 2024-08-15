import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
  link: string;
}

const SideNavLink = ({ title, icon, link }: Props) => {
  return (
    <Link href={link} className="flex justify-start items-center gap-3 hover:text-green-700 duration-150">
      {icon}
      <h1 className="text-medium">{title}</h1>
    </Link>
  );
};

export default SideNavLink;
