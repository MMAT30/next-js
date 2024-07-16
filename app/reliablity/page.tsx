import Hero from '@/components/Hero';
import { Metadata } from 'next';
import ReliabilityImg from '@/public/reliability.jpg';

export const metadata: Metadata = {
  title: {
    absolute: 'Acme About',
  },
};

export default function Reliablity() {
  return (
    <div>
      <Hero
        imgData={ReliabilityImg}
        imgAlt="welding"
        title="Super High Reliability Hosting"
      />
    </div>
  );
}
