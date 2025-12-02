import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";
import { GALLERY_IMAGES } from "../data/galleryData";

// Using static images defined in code (no database)

export const GalleryPage = () => {
  interface GalleryImageItem {
    id: string;
    title: string;
    description: string;
    category: string;
    image_url: string;
    thumbnail_url: string;
    display_order?: number;
  }
  const [images, setImages] = useState<GalleryImageItem[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImageItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const sorted = [...GALLERY_IMAGES].sort(
      (a, b) => (a.display_order || 0) - (b.display_order || 0)
    );
    // Shuffle once on initial load
    const shuffled = [...sorted];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setImages(shuffled);
    const uniqueCategories = Array.from(
      new Set(sorted.map((img) => img.category))
    );
    setCategories(["All", ...uniqueCategories]);
    setSelectedCategory("All");
    setIsLoading(false);
  }, []);

  useEffect(() => {
    filterImages();
  }, [selectedCategory, searchQuery, images]);

  const filterImages = () => {
    let filtered = images;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((img) => img.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (img) =>
          img.title.toLowerCase().includes(query) ||
          img.description?.toLowerCase().includes(query)
      );
    }

    setFilteredImages(filtered);
  };

  return (
    <div className="min-h-screen bg-[#f9f7f2] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-[#0a192f] mb-4">
            Gallery
          </h1>
          <div className="h-1 w-20 bg-[#c5a059] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the artistry and elegance of Dawat's culinary creations
            through our curated collection of high-quality photography.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search by title or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:border-transparent"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-700 mb-4">
                FILTER BY CATEGORY
              </p>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedCategory === category
                        ? "bg-[#c5a059] text-white shadow-lg"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c5a059] mx-auto mb-4"></div>
                <p className="text-gray-600">Loading gallery...</p>
              </div>
            </div>
          ) : filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">
                No images found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden bg-gray-200 aspect-square">
                    <img
                      src={image.thumbnail_url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          images={filteredImages}
          onImageChange={setSelectedImage}
        />
      )}
    </div>
  );
};
