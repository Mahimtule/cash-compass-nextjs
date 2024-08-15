import SideNavLink from "./SideNavLink";
import { LayoutDashboard, Wallet, HandCoins } from "lucide-react";

const SideBar = () => {
  return (
    <div className="px-5 py-10 min-w-[300px] max-w-[300px] h-full bg-white border-r">
      <div className="w-full flex flex-col gap-8">
        <SideNavLink
          link="/dashboard"
          icon={<LayoutDashboard />}
          title="Dashboard"
        />
        <SideNavLink
          link="/dashboard/expenses"
          icon={<HandCoins />}
          title="Expenses"
        />
        <SideNavLink
          link="/dashboard/over-budget"
          icon={<Wallet />}
          title="Over Budget"
        />
      </div>
    </div>
  );
};

export default SideBar;
