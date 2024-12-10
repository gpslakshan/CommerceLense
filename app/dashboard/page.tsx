import React from "react";
import Summary from "@/app/dashboard/_components/Summary";
import { SalesBarChart } from "@/app/dashboard/_components/SalesBarChart";
import { VisitorsRadarChart } from "@/app/dashboard/_components/VisitorsRadarChart";
import TopProducts from "@/app/dashboard/_components/TopProducts";
import { TrafficPieChart } from "@/app/dashboard/_components/TrafficPieChart";
import TopCustomers from "@/app/dashboard/_components/TopCustomers";
import { TrafficBarChart } from "@/app/dashboard/_components/TrafficBarChart";

const DashboardIndexPage = () => {
  return (
    <div className="p-4 grid gap-5">
      <Summary />

      <div className="grid lg:grid-cols-2 gap-10">
        <SalesBarChart />
        <VisitorsRadarChart />
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <TopProducts />
        <TrafficPieChart />
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <TrafficBarChart />
        <TopCustomers />
      </div>
    </div>
  );
};
export default DashboardIndexPage;
