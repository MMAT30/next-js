import Hero from '@/components/Hero';
import { Metadata } from 'next';
import PerformanceImg from '@/public/performance.jpg';

export const metadata: Metadata = {
  title: {
    absolute: 'Acme About',
  },
};

export default function Performance() {
  return (
    <div>
      <Hero
        imgData={PerformanceImg}
        imgAlt="metal laser cutter"
        title="We Serve High Performance Applications"
      />
    </div>
  );
}
