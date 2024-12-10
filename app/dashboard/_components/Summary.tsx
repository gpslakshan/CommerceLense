import React from "react";
import { Users, DollarSign, Package, Shirt } from "lucide-react";
import AnalyticsCard from "@/app/dashboard/_components/AnalyticsCard";
import SummaryCard from "@/app/dashboard/_components/SummaryCard";

const summaryData = [
  {
    title: "Orders",
    value: "1,342",
    icon: Package,
    change: "+30% since last year",
    changeType: "increase",
  },
  {
    title: "Revenue",
    value: "$29,072",
    icon: DollarSign,
    change: "-80% since last year",
    changeType: "decrease",
  },
  {
    title: "Customers",
    value: "3,242",
    icon: Users,
    change: "+10% since last year",
    changeType: "increase",
  },
  {
    title: "Products",
    value: "20",
    icon: Shirt,
    change: "-11% since last year",
    changeType: "decrease",
  },
];

const Summary = () => {
  return (
    <AnalyticsCard title="Summary" description="2024 Year Summary">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 mb-3">
        {summaryData.map((item, index) => (
          <SummaryCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            change={item.change}
            changeType={item.changeType}
          />
        ))}
      </div>
    </AnalyticsCard>
  );
};
export default Summary;
