export const GallerySection = () => {
  return (
    <section id="gallery" className="bg-[#111] py-20 text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="w-full md:w-1/3 mb-10 md:mb-0 pr-0 md:pr-10">
            <h2 className="text-4xl font-serif text-white mb-6">Our Gallery</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Dawat is an ambassador of gourmet dining, taking you on a visual
              and sensory journey through our exquisite preparations.
            </p>
            <a
              href="/gallery"
              className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest"
            >
              View All
            </a>
          </div>

          <div className="w-full md:w-2/3 flex justify-center md:justify-end gap-4 overflow-hidden">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#c5a059]/30 flex-shrink-0 hover:scale-105 transition-transform duration-500">
              <img
                src="/images/gallery/s1.jpg"
                className="w-full h-full object-cover"
                alt="Food"
              />
            </div>
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#c5a059] flex-shrink-0 hover:scale-105 transition-transform duration-500 -mt-6">
              <img
                src="/images/gallery/s2.jpg"
                className="w-full h-full object-cover"
                alt="Food"
              />
            </div>
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#c5a059]/30 flex-shrink-0 hover:scale-105 transition-transform duration-500">
              <img
                src="/images/gallery/s3.jpg"
                className="w-full h-full object-cover"
                alt="Food"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
