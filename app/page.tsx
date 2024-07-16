import Hero from '@/components/Hero';
import HomeImg from '@/public/home.jpg';

export default function Home() {
  return (
    <div>
      <Hero
        imgData={HomeImg}
        imgAlt="car factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
