import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MENU_IMAGES } from "../data/menuData";

export const MenuCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [enlargedSrc, setEnlargedSrc] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeOverlay = useCallback(() => setEnlargedSrc(null), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlay();
    };
    if (enlargedSrc) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [enlargedSrc, closeOverlay]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= MENU_IMAGES.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? MENU_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const getVisibleData = () => {
    const data = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % MENU_IMAGES.length;
      data.push(MENU_IMAGES[index]);
    }
    return data;
  };

  return (
    <div className="relative max-w-[112rem] mx-auto px-4 sm:px-12">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#c5a059] text-[#0a192f] p-3 rounded-full shadow-lg hover:bg-white hover:text-[#0a192f] transition-all border border-[#0a192f]"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#c5a059] text-[#0a192f] p-3 rounded-full shadow-lg hover:bg-white hover:text-[#0a192f] transition-all border border-[#0a192f]"
      >
        <ChevronRight size={28} />
      </button>

      <div
        className={`grid gap-8 ${
          visibleCards === 1 ? "grid-cols-1" : "grid-cols-3"
        }`}
      >
        {getVisibleData().map((img, idx) => (
          <div
            key={idx}
            className="bg-white p-0 rounded-sm shadow-2xl border-4 border-[#0a192f] flex flex-col h-[800px] overflow-hidden transform hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="bg-[#0a192f] text-[#c5a059] text-center py-2 text-xs font-serif uppercase tracking-widest border-b border-[#c5a059]">
              {img.title}
            </div>

            <div className="flex-grow relative bg-gray-100 h-full w-full">
              <img
                src={img.file}
                alt={img.title}
                className="w-full h-full object-fill cursor-zoom-in"
                onClick={() => setEnlargedSrc(img.file)}
              />
            </div>
          </div>
        ))}
      </div>

      {enlargedSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center"
          onClick={closeOverlay}
        >
          <img
            src={enlargedSrc}
            alt="Menu enlarged"
            className="max-w-[92vw] max-h-[92vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
