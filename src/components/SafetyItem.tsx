import React from "react";

interface SafetyItemProps {
  icon: React.ReactElement;
  text: string;
}

export const SafetyItem = ({ icon, text }: SafetyItemProps) => (
  <div className="flex flex-col items-center text-center group">
    <div className="w-16 h-16 rounded-full border border-[#c5a059] flex items-center justify-center text-[#c5a059] mb-4 group-hover:bg-[#c5a059] group-hover:text-[#0a192f] transition-all">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <span className="text-xs md:text-sm text-gray-300 font-medium max-w-[120px]">
      {text}
    </span>
  </div>
);
