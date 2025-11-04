import Hero from "@/components/Heroslider";
import FeatureSlider from "@/components/Heroslider";
import NewCustomerForm from "@/components/NewCustomerForm";
export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <FeatureSlider />
      <NewCustomerForm/>
    </main>
  );
}
