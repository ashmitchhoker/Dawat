import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  thumbnail_url: string;
}

interface ImageLightboxProps {
  image: GalleryImage;
  onClose: () => void;
  images: GalleryImage[];
  onImageChange: (image: GalleryImage) => void;
}

export const ImageLightbox = ({
  image,
  onClose,
  images,
  onImageChange,
}: ImageLightboxProps) => {
  const currentIndex = images.findIndex((img) => img.id === image.id);

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      onImageChange(images[currentIndex + 1]);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      onImageChange(images[currentIndex - 1]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
      >
        <X size={32} />
      </button>

      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
          <img
            src={image.image_url}
            alt={image.title}
            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
          />

          <div className="mt-8 bg-[#0a192f] text-white p-6 rounded-lg max-w-2xl w-full">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-serif text-[#c5a059] mb-2">
                  {image.title}
                </h2>
                <span className="text-xs font-bold bg-[#c5a059] text-[#0a192f] px-3 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
              <span className="text-sm text-gray-400">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">{image.description}</p>
          </div>
        </div>
      </div>

      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
        >
          <ChevronRight size={40} />
        </button>
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => onImageChange(img)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-[#c5a059] w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
