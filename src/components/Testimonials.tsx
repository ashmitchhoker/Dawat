import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  customer_name: string;
  customer_role: string;
  testimonial_text: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    customer_name: "Rajesh Kumar",
    customer_role: "IIT Gandhinagar Faculty",
    testimonial_text:
      "Dawat has been our go-to restaurant for authentic flavors. The quality and taste are consistently excellent. Highly recommend their biryani!",
    rating: 5,
  },
  {
    id: "2",
    customer_name: "Priya Mehta",
    customer_role: "GIFT City Professional",
    testimonial_text:
      "Amazing food and great service! The ambiance is perfect for family gatherings. Their non-veg dishes are absolutely delicious.",
    rating: 5,
  },
  {
    id: "3",
    customer_name: "Amit Patel",
    customer_role: "Local Food Enthusiast",
    testimonial_text:
      "From the humble beginnings to this culinary landmark, Dawat never disappoints. The passion in every dish is evident. A must-visit in Gandhinagar!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-[#f9f7f2] py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-[#c5a059] text-9xl font-serif">
          "
        </div>
        <div className="absolute bottom-10 right-10 text-[#c5a059] text-9xl font-serif">
          "
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#0a192f] mb-4">
            What Our Customers Say
          </h2>
          <div className="h-1 w-16 bg-[#c5a059] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-[#c5a059] fill-[#c5a059]"
                />
              ))}
            </div>

            <div className="relative">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center italic mb-8">
                "{currentTestimonial.testimonial_text}"
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-[#0a192f] mb-1">
                {currentTestimonial.customer_name}
              </h4>
              <p className="text-sm text-[#c5a059] uppercase tracking-wide">
                {currentTestimonial.customer_role}
              </p>
            </div>
          </div>

          {TESTIMONIALS.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white hover:bg-[#c5a059] text-[#0a192f] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-white hover:bg-[#c5a059] text-[#0a192f] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-[#c5a059] w-8 h-2"
                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
