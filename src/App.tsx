import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { SafetyBanner } from "./components/SafetyBanner";
import { LegacySection } from "./components/LegacySection";
import { MenuSection } from "./components/MenuSection";
import { GallerySection } from "./components/GallerySection";
import { TestimonialsSection } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SafetyBanner />
      <LegacySection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
