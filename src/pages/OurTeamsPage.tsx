import { Helmet } from 'react-helmet';
import TeamSection from '../components/sections/TeamSection';
import CTASection from '../components/ui/CTASection';

export default function OurTeamsPage() {
  return (
    <>
      <Helmet>
        <title>Our Team - Gorkha Engineering</title>
        <meta
          name="description"
          content="Meet the passionate and expert team behind Gorkha Engineering's civil construction and consulting services in Dang, Nepal."
        />
      </Helmet>
      <TeamSection />
      <CTASection />
    </>
  );
}
