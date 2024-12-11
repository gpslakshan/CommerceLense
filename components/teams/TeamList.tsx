"use client";

import TeamCard from "@/components/teams/TeamCard";
import { teamDummyData } from "@/constants/data";

const TeamList = () => {
  const team = teamDummyData;
  const approvedMembers = team.filter((member) => member.isApproved);
  const pendingMembers = team.filter((member) => !member.isApproved);

  return (
    <div className="space-y-16">
      <div>
        <h2 className="mb-4 text-xl font-bold">Approved Members</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approvedMembers.map((member) => (
            <TeamCard key={member.id} member={member} isPending={false} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold">Pending Members</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pendingMembers.map((member) => (
            <TeamCard key={member.id} member={member} isPending={true} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamList;
