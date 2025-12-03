import { Award, ChefHat, Globe } from "lucide-react";
import { TimelineItem } from "./TimelineItem";

export const LegacySection = () => {
  return (
    <section id="legacy" className="bg-[#f9f7f2] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#0a192f] mb-4">
            Our Legacy
          </h2>
          <div className="h-1 w-16 bg-[#c5a059] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-500 italic">
            "From mopping tables to building a culinary landmark."
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="space-y-12 border-l-2 border-[#c5a059]/30 pl-8 ml-4 md:ml-0 relative">
              <TimelineItem
                badge="92"
                title="The Humble Beginning"
                description="It was 1992 when Rafiq Bhai began his first job at a local hotel. His duties were simple—mopping tables and washing dishes for a modest ₹300 a month. Yet, he carried out every task with a rare honesty and humility that laid the foundation for his future."
              />
              <TimelineItem
                badge="UK"
                title="The UK Experience"
                description="Determined to build a better life, Rafiq Bhai moved to the United Kingdom. There, he worked in a Pakistani restaurant aptly named Dawat. This place became his school of experience, where he mastered the art of service, taste, and customer warmth."
                isDark
              />
              <TimelineItem
                badge="06"
                title="The Return & Birth of Dawat"
                description="In 2006, armed with savings of ₹1,80,000 and a dream, Rafiq Bhai returned to India. He invested everything into starting his own restaurant in Infocity, Gandhinagar, giving it the name that shaped his destiny: Dawat."
              />
              <TimelineItem
                badge="Now"
                title="A Culinary Empire"
                description="Today, Dawat has evolved into Gandhinagar's most loved destination for non-vegetarian food lovers. Serving prestigious institutions like IIT Gandhinagar and GIFT City, Dawat stands as a symbol of how perseverance and integrity can turn the simplest beginnings into enduring success."
                isDark
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 relative">
            <div className="sticky top-24">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative group rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/images/gallery/IMG-20250529-WA0072.jpg"
                    alt="Rafiq Bhai - Founder"
                    className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif text-sm font-semibold">Rafiq Bhai</p>
                    <p className="text-xs text-[#c5a059]">Founder & Visionary</p>
                  </div>
                </div>

                <div className="relative group rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/images/gallery/r4.jpg"
                    alt="Dawat Restaurant"
                    className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif text-sm font-semibold">Dawat Restaurant</p>
                    <p className="text-xs text-[#c5a059]">Infocity, Gandhinagar</p>
                  </div>
                </div>
              </div>

              <div className="relative group rounded-lg overflow-hidden shadow-2xl mb-6">
                <div className="bg-[#0a192f] p-8 text-white">
                  <div className="flex items-center gap-3 mb-4 text-[#c5a059]">
                    <Award size={32} />
                    <span className="text-lg font-serif italic">
                      Est. 2006
                    </span>
                  </div>
                  <p className="font-serif text-xl leading-snug">
                    "Each plate carries not just flavor, but fragments of a
                    journey."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 shadow-lg rounded border-t-4 border-[#c5a059]">
                  <ChefHat className="text-[#0a192f] mb-2" size={24} />
                  <h4 className="font-bold text-2xl text-[#c5a059]">18+</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Years of Service
                  </p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded border-t-4 border-[#c5a059]">
                  <Globe className="text-[#0a192f] mb-2" size={24} />
                  <h4 className="font-bold text-2xl text-[#c5a059]">2</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Continents Spanned
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
