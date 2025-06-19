import TeamCard from '../ui/TeamCard';
import { teamMembers } from '../../data/teamd';

export default function TeamSection() {
  return (
    <section className="bg-gray-400 py-16 px-4 sm:px-6 lg:px-8 pt-28">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Meet Our Team
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Our team of dedicated professionals is committed to delivering excellence in every project.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
