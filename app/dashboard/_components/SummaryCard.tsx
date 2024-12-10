import React from "react";
import { ArrowDown, ArrowUp, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  changeType: string;
}

const SummaryCard = ({
  title,
  value,
  icon: Icon,
  change,
  changeType,
}: Props) => {
  return (
    <Card className="p-6 dark:bg-tertiary">
      <div className="flex justify-center items-center gap-5 max-md:justify-between">
        <div>
          <p className="text-lg">{title}</p>
          <h2 className="text-2xl font-bold">{value}</h2>
        </div>
        <div>
          <Icon className="bg-primary text-white p-3 rounded-full" size={50} />
        </div>
      </div>
      <div
        className={`flex gap-1 mt-2 md:justify-center
        ${changeType === "increase" ? "text-green-500" : "text-red-500"}
        `}
      >
        {changeType === "increase" ? (
          <ArrowUp size={20} />
        ) : (
          <ArrowDown size={20} />
        )}
        <span className="text-sm">{change}</span>
      </div>
    </Card>
  );
};
export default SummaryCard;
