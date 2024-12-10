"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import AnalyticsCard from "@/app/dashboard/_components/AnalyticsCard";

const chartData = [
  { country: "usa", visitors: 275, fill: "var(--color-usa)" },
  { country: "india", visitors: 200, fill: "var(--color-india)" },
  { country: "china", visitors: 187, fill: "var(--color-china)" },
  { country: "england", visitors: 173, fill: "var(--color-england)" },
  { country: "brazil", visitors: 90, fill: "var(--color-brazil)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  usa: {
    label: "USA",
    color: "hsl(var(--chart-1))",
  },
  india: {
    label: "India",
    color: "hsl(var(--chart-2))",
  },
  china: {
    label: "China",
    color: "hsl(var(--chart-3))",
  },
  england: {
    label: "England",
    color: "hsl(var(--chart-4))",
  },
  brazil: {
    label: "Brazil",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function TrafficBarChart() {
  return (
    <AnalyticsCard
      title="Traffic Bar Chart"
      description="Showing Visitors From Different Countries"
    >
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-full max-h-[400px]"
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{
            left: 0,
          }}
        >
          <YAxis
            dataKey="country"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
          />
          <XAxis dataKey="visitors" type="number" hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="visitors" layout="vertical" radius={5} />
        </BarChart>
      </ChartContainer>
    </AnalyticsCard>
  );
}
