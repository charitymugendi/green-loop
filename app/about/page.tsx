import Hero from "@/components/Hero";
import FeatureSlider from "@/components/Heroslider";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <FeatureSlider />
    </main>
  );
}
