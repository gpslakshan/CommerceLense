import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const AnalyticsCard = ({ title, description, children }: Props) => {
  return (
    <Card className="dark:bg-tertiary">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-primary">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
export default AnalyticsCard;
