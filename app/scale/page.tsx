import Hero from '@/components/Hero';
import { Metadata } from 'next';
import ScaleImg from '@/public/scale.jpg';

export const metadata: Metadata = {
  title: {
    absolute: 'Acme About',
  },
};

export default function Scale() {
  return (
    <div>
      <Hero
        imgData={ScaleImg}
        imgAlt="factory"
        title="Scale Your App To Infinity"
      />
    </div>
  );
}
