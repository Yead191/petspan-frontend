"use client";

interface ExploreButtonProps {
  targetId: string;
}

export default function ExploreButton({ targetId }: ExploreButtonProps) {
  const handleScroll = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition absolute bottom-0 right-5 cursor-pointer hover:scale-115 duration-300"
    >
      <span className="relative">
        Explore
        <span
          className="absolute left-0 -bottom-1 h-px
         w-0 bg-white transition-all duration-300 group-hover:w-full"
        />
      </span>

      <span className="transition-transform duration-300 group-hover:translate-y-1">
        ↓
      </span>
    </button>
  );
}
