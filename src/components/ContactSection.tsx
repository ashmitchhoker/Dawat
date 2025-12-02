import { Clock, MapPin } from "lucide-react";
import { HourRow } from "./HourRow";

export const ContactSection = () => {
  return (
    <section className="relative py-24 bg-[#0a192f]" id="contact">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-white mb-2">Visit Us</h2>
          <div className="h-0.5 w-12 bg-[#c5a059] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-normal text-gray-800">Location</h3>
              <MapPin className="text-gray-800" size={24} />
            </div>
            <div className="w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4116521323063!2d78.4722880751662!3d17.36680408351582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6e118329%3A0x6339903c735d4621!2sHotel%20Shadab!5e0!3m2!1sen!2sin!4v1709658000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Location"
              ></iframe>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p className="font-semibold text-gray-900">
                Dawat Restaurant (Infocity)
              </p>
              <p>Infocity, Gandhinagar,</p>
              <p>Gujarat 382007</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-2xl flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-normal text-gray-800">Hours</h3>
              <Clock className="text-gray-800" size={24} />
            </div>

            <div className="space-y-4 flex-grow">
              <HourRow day="Monday" time="05:00 AM - 11:00 PM" />
              <HourRow day="Tuesday" time="05:00 AM - 11:00 PM" isHighlight />
              <HourRow day="Wednesday" time="05:00 AM - 11:00 PM" />
              <HourRow day="Thursday" time="05:00 AM - 11:00 PM" />
              <HourRow day="Friday" time="05:00 AM - 11:00 PM" />
              <HourRow day="Saturday" time="05:00 AM - 11:00 PM" />
              <HourRow day="Sunday" time="05:00 AM - 11:00 PM" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
