
export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/gallery/r23.jpg"
          alt="Delicious Mughlai Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/70 via-[#0a192f]/30 to-[#0a192f]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-64 md:mt-80">
        <div className="mb-12 flex justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-[#c5a059] to-[#d4af37] bg-clip-text text-transparent">
                Dawat
              </span>
              <span className="text-[#c5a059] text-sm md:text-base font-light tracking-[0.2em] uppercase mt-2">
                Restaurant
              </span>
            </div>
            <div className="bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-[#0a192f] px-10 py-2 font-bold uppercase tracking-[0.3em] text-xs md:text-sm w-full max-w-md shadow-2xl">
              Veg & Non Veg. Food
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-2xl md:text-4xl text-white font-serif italic leading-relaxed tracking-wide">
            A Culinary Journey through the Grandeur of India
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent to-[#c5a059]"></div>
            <p className="text-[#c5a059] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
              Since 2006
            </p>
            <div className="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent to-[#c5a059]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
