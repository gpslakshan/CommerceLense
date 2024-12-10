import React from "react";
import Summary from "@/app/dashboard/_components/Summary";
import { SalesBarChart } from "@/app/dashboard/_components/SalesBarChart";
import { VisitorsRadarChart } from "@/app/dashboard/_components/VisitorsRadarChart";
import TopProducts from "@/app/dashboard/_components/TopProducts";
import { BrowserTrafficChart } from "@/app/dashboard/_components/BrowserTrafficChart";
import TopCustomers from "@/app/dashboard/_components/TopCustomers";
import { CountryTrafficChart } from "@/app/dashboard/_components/CountryTrafficChart";

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
        <BrowserTrafficChart />
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <CountryTrafficChart />
        <TopCustomers />
      </div>
    </div>
  );
};
export default DashboardIndexPage;
