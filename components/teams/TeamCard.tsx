import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  image: string;
  isAdmin: boolean;
  isApproved: boolean;
}

interface Props {
  member: TeamMember;
  isPending: boolean;
}

const TeamCard = ({ member, isPending }: Props) => {
  return (
    <Card className="dark:bg-tertiary p-4 flex flex-col justify-between items-center gap-4 overflow-hidden">
      <Image
        src={member.image}
        alt="Member Image"
        width={100}
        height={100}
        // style={{ clipPath: "circle()" }}
        className="rounded-full"
      />
      <h1>{member.name}</h1>
      <p>{member.isAdmin ? "Admin" : ""}</p>
      <div className="flex items-center gap-2">
        {isPending ? (
          <>
            <Button>Approve</Button>
            <Button variant="destructive">Decline</Button>
          </>
        ) : (
          <>
            <Button>Edit</Button>
            <Button variant="destructive">Delete</Button>
          </>
        )}
      </div>
    </Card>
  );
};

export default TeamCard;
