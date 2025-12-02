interface HourRowProps {
  day: string;
  time: string;
  isHighlight?: boolean;
}

export const HourRow = ({ day, time, isHighlight = false }: HourRowProps) => (
  <div className="flex justify-between items-center text-sm md:text-base border-b border-gray-100 last:border-0 pb-2">
    <span
      className={`font-medium ${
        isHighlight ? "text-[#ff5252]" : "text-gray-800"
      }`}
    >
      {day}
    </span>
    <span className={`${isHighlight ? "text-[#ff5252]" : "text-gray-500"}`}>
      {time}
    </span>
  </div>
);
