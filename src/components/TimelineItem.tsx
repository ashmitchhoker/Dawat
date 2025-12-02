interface TimelineItemProps {
  badge: string;
  title: string;
  description: string;
  isDark?: boolean;
}

export const TimelineItem = ({ badge, title, description, isDark = false }: TimelineItemProps) => {
  return (
    <div className="relative">
      <div
        className={`absolute -left-[41px] ${
          isDark
            ? "bg-[#0a192f] text-[#c5a059] border border-[#c5a059]"
            : "bg-[#c5a059] text-[#0a192f]"
        } font-bold rounded-full w-8 h-8 flex items-center justify-center text-xs`}
      >
        {badge}
      </div>
      <h3 className="text-xl font-serif text-[#0a192f] mb-2 font-bold">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
