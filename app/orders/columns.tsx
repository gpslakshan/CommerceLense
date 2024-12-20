"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate, formatPrice } from "@/lib/utils";

type Order = {
  id: string | number;
  orderNumber: string;
  totalAmount: number;
  date: number;
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "orderNumber",
    header: "Order No.",
  },
  {
    accessorKey: "totalAmount",
    header: "Total Amount",
    cell: ({ row }) => {
      const totalAmount = row.getValue("totalAmount") as number;

      return <>{formatPrice(totalAmount)}</>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const dateTimeStamp = row.getValue("date") as number;
      const dateObject = new Date(dateTimeStamp);

      return <span className="text-nowrap">{formatDate(dateObject)}</span>;
    },
  },
  {
    id: "actions",
    cell: ({}) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Order Details</DropdownMenuItem>
            <DropdownMenuItem>Delete Order</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
