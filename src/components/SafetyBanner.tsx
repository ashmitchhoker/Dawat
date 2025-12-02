import { ShieldCheck, Thermometer, Package, Truck } from "lucide-react";
import { SafetyItem } from "./SafetyItem";

export const SafetyBanner = () => {
  return (
    <section className="bg-[#0a192f] py-12 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-white font-serif mb-2">
            Order food without worries.
          </h2>
          <p className="text-gray-400">Your safety is ensured.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <SafetyItem icon={<ShieldCheck />} text="Mandatory hand wash" />
          <SafetyItem
            icon={<Thermometer />}
            text="Regular temperature check"
          />
          <SafetyItem icon={<Package />} text="Properly sealed packages" />
          <SafetyItem icon={<Truck />} text="Contactless delivery" />
        </div>
      </div>
    </section>
  );
};
