"use client";

import React from "react";
import AnalyticsCard from "@/app/components/AnalyticsCard";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { DataTable } from "@/components/ui/data-table";
import { ProductsDummyData } from "@/constants/data";

export type TopProduct = {
  id: number;
  name: string;
  revenue: number;
  price: number;
  image: string;
};

export const topProductsColumns: ColumnDef<TopProduct>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("revenue"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string;

      return (
        <Image
          src={imageUrl}
          width={50}
          height={50}
          alt="product image"
          className="border-2 dark:border-primary"
        />
      );
    },
  },
];

const TopProducts = () => {
  const topProducts = ProductsDummyData.sort(
    (a, b) => b.revenue - a.revenue,
  ).slice(0, 4);

  return (
    <AnalyticsCard
      title="Top Products"
      description="Showing Most Sold Products"
    >
      <DataTable data={topProducts} columns={topProductsColumns} />
    </AnalyticsCard>
  );
};
export default TopProducts;
