import { MenuCarousel } from "./MenuCarousel";

export const MenuSection = () => {
  return (
    <section id="menu" className="bg-[#0a192f] py-20 relative">
      <div className="w-full px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Our Menu</h2>
          <div className="h-1 w-16 bg-[#c5a059] mx-auto mb-4"></div>
          <p className="text-gray-400 italic">
            Browse through our authentic menu pages
          </p>
        </div>

        <MenuCarousel />
      </div>
    </section>
  );
};
