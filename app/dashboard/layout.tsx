import SideBar from "@/components/utils/SideBar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full h-[calc(100vh-61px)] bg-gray-100">
      <div className="h-full w-full flex">
        <SideBar />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default layout;
