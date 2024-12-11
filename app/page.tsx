import React from "react";
import Summary from "@/components/dashboard/Summary";
import { SalesBarChart } from "@/components/dashboard/SalesBarChart";
import { VisitorsRadarChart } from "@/components/dashboard/VisitorsRadarChart";
import TopProducts from "@/components/dashboard/TopProducts";
import { BrowserTrafficChart } from "@/components/dashboard/BrowserTrafficChart";
import TopCustomers from "@/components/dashboard/TopCustomers";
import { CountryTrafficChart } from "@/components/dashboard/CountryTrafficChart";

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
