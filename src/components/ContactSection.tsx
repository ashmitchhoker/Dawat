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
              <h3 className="text-2xl font-normal text-gray-800">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=23.196036,72.6333888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors underline"
                  aria-label="Get directions to Dawat Restaurant"
                >
                  Click for Directions
                </a>
              </h3>
              <MapPin className="text-gray-800" size={24} />
            </div>
            <div className="w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps?q=Dawat%20Restaurant&ll=23.196036,72.6333888&z=17&output=embed"
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
              <HourRow day="Monday" time="11:30 AM – 3:30 PM, 6:30 – 11 PM" />
              <HourRow day="Tuesday" time="11:30 AM – 3:30 PM, 6:30 – 11 PM" />
              <HourRow
                day="Wednesday"
                time="11:30 AM – 3:30 PM, 6:30 – 11 PM"
              />
              <HourRow day="Thursday" time="11:30 AM – 3:30 PM, 6:30 – 11 PM" />
              <HourRow day="Friday" time="11:30 AM – 3:30 PM, 6:30 – 11 PM" />
              <HourRow day="Saturday" time="11:30 AM – 3:30 PM, 6:30 – 11 PM" />
              <HourRow day="Sunday" time="11:30 AM – 3:30 PM, 6:30 – 11 PM" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
