"use client";

import React from "react";
import AnalyticsCard from "@/app/dashboard/_components/AnalyticsCard";
import { customersDummyData } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { DataTable } from "@/components/ui/data-table";

export type TopCustomer = {
  id: string;
  name: string;
  orders: number;
  image: string;
};

export const topCustomersColumns: ColumnDef<TopCustomer>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "orders",
    header: "Orders",
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
          alt="customer avatar"
          className="border-2 dark:border-primary"
        />
      );
    },
  },
];

const TopCustomers = () => {
  const topCustomers = customersDummyData
    .sort((a, b) => b.orders - a.orders)
    .slice(0, 4);

  return (
    <AnalyticsCard
      title="Top Customers"
      description="Showing Customers With Most Orders"
    >
      <DataTable data={topCustomers} columns={topCustomersColumns} />
    </AnalyticsCard>
  );
};
export default TopCustomers;
