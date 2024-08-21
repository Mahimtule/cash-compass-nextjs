import SideBar from "@/components/utils/SideBar";
import React from "react";
import { Toaster } from "@/components/ui/toaster";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full lg:h-[calc(100vh-61px)] bg-gray-100">
      <div className="h-full w-full flex">
        <SideBar />
        <div className="px-6 py-3 w-full">{children}</div>
      </div>
      <Toaster />
    </main>
  );
};

export default layout;
