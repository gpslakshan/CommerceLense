import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ordersDummyData } from "@/constants/data";
import { columns } from "@/app/orders/columns";

const OrdersPage = () => {
  return (
    <section className="p-6">
      <Card className="dark:bg-tertiary">
        <CardHeader>
          <CardTitle className="text-lg">Orders</CardTitle>
          <CardDescription className="text-primary">
            Showing All Orders
          </CardDescription>
          <Button className="mb-3 w-fit">Create New Order</Button>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={ordersDummyData} />
        </CardContent>
      </Card>
    </section>
  );
};

export default OrdersPage;
