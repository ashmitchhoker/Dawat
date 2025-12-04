import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { SafetyBanner } from "./components/SafetyBanner";
import { LegacySection } from "./components/LegacySection";
import { MenuSection } from "./components/MenuSection";
import { GallerySection } from "./components/GallerySection";
import { TestimonialsSection } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { preloadImages } from "./utils/preloadImages";
import { MENU_IMAGES } from "./data/menuData";

function App() {
  useEffect(() => {
    // Preload menu and gallery images in the background
    const menuUrls = MENU_IMAGES.map((m) => m.file);
    const galleryUrls = Array.from(
      { length: 12 },
      (_, i) => `/images/gallery/s${i + 1}.jpg`
    );
    const galleryRUrls = Array.from(
      { length: 28 },
      (_, i) => `/images/gallery/r${i + 1}.jpg`
    );

    preloadImages([...menuUrls, ...galleryUrls, ...galleryRUrls]);
  }, []);

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
