import Hero from "@/components/Heroslider";
import ServicesSection from "@/components/ServicesSection";
import HeaderComponent from "@/components/Header";
import WasteManagementCards from "@/components/WasteManagementCards";
import AnimatedHeroSection from "@/components/AnimatedHeroSection"
import FooterComponent from "@/components/FooterComponent"

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
    <ServicesSection/>
    <HeaderComponent/>
    <WasteManagementCards />
    <AnimatedHeroSection />
    <FooterComponent />
  
    </main>
  );
}
