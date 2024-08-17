import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideNavLink from "./SideNavLink";
import { LayoutDashboard, Wallet, HandCoins, Menu } from "lucide-react";

const MobileSideBar = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="max-w-[300px]">
          <div className="w-full flex flex-col gap-8">
            <SheetClose asChild>
              <SideNavLink
                link="/dashboard"
                icon={<LayoutDashboard />}
                title="Dashboard"
              />
            </SheetClose>
            <SheetClose asChild>
              <SideNavLink
                link="/dashboard/expenses"
                icon={<HandCoins />}
                title="Expenses"
              />
            </SheetClose>
            <SheetClose asChild>
              <SideNavLink
                link="/dashboard/over-budget"
                icon={<Wallet />}
                title="Over Budget"
              />
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
