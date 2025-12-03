import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const GallerySection = () => {
  const foodImages = [
    "/images/gallery/s1.jpg",
    "/images/gallery/s2.jpg",
    "/images/gallery/s3.jpg",
    "/images/gallery/s4.jpg",
    "/images/gallery/s5.jpg",
    "/images/gallery/s6.jpg",
    "/images/gallery/s7.jpg",
    "/images/gallery/s8.jpg",
    "/images/gallery/s9.jpg",
    "/images/gallery/s10.jpg",
    "/images/gallery/s11.jpg",
    "/images/gallery/s12.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % foodImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [foodImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? foodImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % foodImages.length);
  };

  return (
    <section id="gallery" className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full">
        {foodImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Food ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40"></div>

        <div className="absolute bottom-8 left-8 z-20">
          <a
            href="/gallery"
            className="inline-block border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm tracking-widest font-semibold"
          >
            View All
          </a>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} className="text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300 backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight size={28} className="text-white" />
        </button>

        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {foodImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#c5a059] w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
