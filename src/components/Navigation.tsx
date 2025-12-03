import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { DawatLogo } from "./DawatLogo";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a192f]/95 py-3 shadow-md"
          : "bg-gradient-to-b from-[#0a192f]/90 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          {isScrolled && (
            <>
              <div className="lg:hidden">
                <DawatLogo />
              </div>
              <div className="hidden lg:block cursor-pointer">
                <DawatLogo />
              </div>
            </>
          )}
        </div>

        <div className="hidden lg:flex items-center space-x-10 text-xs font-bold tracking-widest text-white uppercase font-sans">
          <a href="/" className="hover:text-[#c5a059] transition-colors">
            Home
          </a>
          <a href="/#legacy" className="hover:text-[#c5a059] transition-colors">
            Legacy
          </a>
          <a href="/#menu" className="hover:text-[#c5a059] transition-colors">
            Menu
          </a>
          <a
            href="/#gallery"
            className="hover:text-[#c5a059] transition-colors"
          >
            Gallery
          </a>
          <a
            href="/#contact"
            className="hover:text-[#c5a059] transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="hidden lg:inline-block relative group">
          <button
            className="bg-white text-[#d62828] font-bold px-8 py-3 uppercase tracking-widest text-xs hover:bg-gray-100 transition-all shadow-lg"
            onClick={() => setIsOrderOpen((v) => !v)}
          >
            Order Online
          </button>
          <div
            className={`absolute left-0 top-full translate-y-1 ${
              isOrderOpen ? "block" : "hidden"
            } group-hover:block bg-white/95 backdrop-blur-sm rounded-none shadow-xl p-3 border border-gray-200 w-full`}
          >
            <div className="flex flex-col items-center space-y-3">
              <a
                href="https://www.swiggy.com/menu/45256?source=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/logo/swiggy.svg"
                  alt="Swiggy"
                  className="h-8"
                />
              </a>
              <a
                href="https://zomato.onelink.me/xqzv/4clvu9ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/logo/zomato.svg"
                  alt="Zomato"
                  className="h-8"
                />
              </a>
            </div>
          </div>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a192f] text-white absolute top-full left-0 w-full py-6 px-4 flex flex-col space-y-4 shadow-xl border-t border-gray-800">
          <a href="/" className="block hover:text-[#c5a059]">
            Home
          </a>
          <a href="/#legacy" className="block hover:text-[#c5a059]">
            Legacy
          </a>
          <a href="/#menu" className="block hover:text-[#c5a059]">
            Menu
          </a>
          <a href="/#gallery" className="block hover:text-[#c5a059]">
            Gallery
          </a>
          <a href="/#contact" className="block hover:text-[#c5a059]">
            Contact
          </a>
          <div className="pt-4 relative">
            <button
              className="bg-white text-[#d62828] font-bold px-6 py-3 w-full uppercase tracking-widest text-xs"
              onClick={() => setIsOrderOpen((v) => !v)}
            >
              Order Online
            </button>
            {isOrderOpen && (
              <div className="mt-2 bg-white/95 backdrop-blur-sm rounded-none shadow-xl p-3 border border-gray-200 w-full">
                <div className="flex flex-col items-center space-y-3">
                  <a
                    href="https://www.swiggy.com/menu/45256?source=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-fit hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="/images/logo/swiggy.svg"
                      alt="Swiggy"
                      className="h-8"
                    />
                  </a>
                  <a
                    href="https://zomato.onelink.me/xqzv/4clvu9ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-fit hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="/images/logo/zomato.svg"
                      alt="Zomato"
                      className="h-8"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
