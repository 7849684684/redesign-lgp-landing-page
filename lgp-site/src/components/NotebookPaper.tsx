interface NotebookPaperProps {
  children: React.ReactNode;
  className?: string;
  showMargin?: boolean;
  showHoles?: boolean;
}

export default function NotebookPaper({
  children,
  className = "",
  showMargin = true,
  showHoles = true,
}: NotebookPaperProps) {
  return (
    <div
      className={`relative bg-[#FFFEF9] rounded-sm shadow-[0_2px_20px_rgba(0,0,0,0.08)] overflow-hidden ${className}`}
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 27px,
            rgba(0, 51, 153, 0.08) 27px,
            rgba(0, 51, 153, 0.08) 28px
          )
        `,
        backgroundPosition: "0 40px",
      }}
    >
      {/* Red margin line */}
      {showMargin && (
        <div
          className="absolute top-0 bottom-0 w-px bg-red-300/40 z-10"
          style={{ left: "60px" }}
          aria-hidden="true"
        />
      )}
      {/* Hole punches */}
      {showHoles && (
        <div className="absolute left-3 top-0 bottom-0 flex flex-col justify-around py-8 z-10" aria-hidden="true">
          <div className="w-4 h-4 rounded-full border-2 border-gray-300/40 bg-cream" />
          <div className="w-4 h-4 rounded-full border-2 border-gray-300/40 bg-cream" />
          <div className="w-4 h-4 rounded-full border-2 border-gray-300/40 bg-cream" />
        </div>
      )}
      <div className={`relative z-20 ${showMargin ? "pl-20 pr-6 py-10" : "px-6 py-10"}`}>
        {children}
      </div>
    </div>
  );
}
