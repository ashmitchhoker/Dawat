import { Phone, Mail } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white pt-20 pb-8 border-t border-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="border-t border-[#c5a059]/30 mb-12 w-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: Order Online */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Order Online</h4>
            <div className="space-y-4">
              <a
                href="https://www.swiggy.com/menu/45256?source=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/logo/swiggy.svg"
                  alt="Swiggy"
                  className="h-10"
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
                  className="h-10 transform origin-left"
                  style={{ transform: "scaleX(1.15)" }}
                />
              </a>
            </div>
          </div>

          {/* Middle: Quick links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick links</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-300">
              <li>
                <a href="#" className="hover:text-[#c5a059] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#legacy"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Catering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a059] transition-colors">
                  Franchise
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#c5a059] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">
              Connect With us
            </h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <p className="leading-relaxed">
                  Infocity, Gandhinagar,
                  <br />
                  Gujarat 382007
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-[#c5a059]" size={16} />
                <p>9574442121</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-[#c5a059]" size={16} />
                <p>info@dawatreastaurant.com</p>
              </div>

              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#"
                  className="block w-fit hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/logo/Instagram.svg"
                    alt="Instagram"
                    className="h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 pt-8 border-t border-gray-900/50">
          &copy; Copyright 2025 | All Rights Reserved to Dawat Restaurant
        </div>
      </div>
    </footer>
  );
};
