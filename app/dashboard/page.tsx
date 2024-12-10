import React from "react";
import Summary from "@/app/dashboard/_components/Summary";
import { SalesBarChart } from "@/app/dashboard/_components/SalesBarChart";

const DashboardIndexPage = () => {
  return (
    <div className="p-4 grid gap-5">
      <Summary />

      <div className="grid lg:grid-cols-2 gap-10">
        <SalesBarChart />
      </div>
    </div>
  );
};
export default DashboardIndexPage;
