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
import { ProductsDummyData } from "@/constants/data";
import { columns } from "@/app/products/columns";

const ProductsPage = () => {
  return (
    <section className="p-6">
      <Card className="dark:bg-tertiary">
        <CardHeader>
          <CardTitle className="text-lg">Products</CardTitle>
          <CardDescription className="text-primary">
            Showing All Products
          </CardDescription>
          <Button className="mb-3 w-fit">Add New Product</Button>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={ProductsDummyData} />
        </CardContent>
      </Card>
    </section>
  );
};
export default ProductsPage;
