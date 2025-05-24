import { TeamMember } from '../../data/teamd';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div
      className="
        bg-white rounded-lg shadow-lg p-6 flex flex-col items-center
        transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group
      "
    >
      <img
        src={member.image}
        alt={member.name}
        className="
          w-28 h-28 rounded-full object-cover mb-4 border-4 border-primary-100
          transition-transform duration-300 group-hover:scale-110
        "
      />
      <h3 className="text-xl font-semibold text-primary-800">{member.name}</h3>
      <p className="text-primary-600 font-medium">{member.role}</p>
    </div>
  );
}
