import React from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="min-h-screen flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
