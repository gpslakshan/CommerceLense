import React from "react";
import { Button } from "@/components/ui/button";
import { customersDummyData } from "@/constants/data";
import { columns } from "@/app/dashboard/customers/columns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";

const CustomersPage = () => {
  return (
    <section className="p-6">
      <Card className="dark:bg-tertiary">
        <CardHeader>
          <CardTitle className="text-lg">Customers</CardTitle>
          <CardDescription className="text-primary">
            Showing all customers with orders
          </CardDescription>
          <Button className="mb-3 w-fit">Add New Customer</Button>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={customersDummyData} />
        </CardContent>
      </Card>
    </section>
  );
};

export default CustomersPage;
