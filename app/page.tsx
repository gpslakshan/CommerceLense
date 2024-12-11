import React from "react";
import Summary from "@/app/components/Summary";
import { SalesBarChart } from "@/app/components/SalesBarChart";
import { VisitorsRadarChart } from "@/app/components/VisitorsRadarChart";
import TopProducts from "@/app/components/TopProducts";
import { BrowserTrafficChart } from "@/app/components/BrowserTrafficChart";
import TopCustomers from "@/app/components/TopCustomers";
import { CountryTrafficChart } from "@/app/components/CountryTrafficChart";

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
