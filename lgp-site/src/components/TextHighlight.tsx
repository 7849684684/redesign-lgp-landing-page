interface TextHighlightProps {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "blue";
}

const bgMap = {
  yellow: "linear-gradient(104deg, rgba(255,241,118,0) 0.9%, rgba(255,241,118,1) 2.4%, rgba(255,241,118,0.5) 5.8%, rgba(255,241,118,0.15) 93%, rgba(255,241,118,0.7) 96%, rgba(255,241,118,0) 98%)",
  pink: "linear-gradient(104deg, rgba(255,184,198,0) 0.9%, rgba(255,184,198,1) 2.4%, rgba(255,184,198,0.5) 5.8%, rgba(255,184,198,0.15) 93%, rgba(255,184,198,0.7) 96%, rgba(255,184,198,0) 98%)",
  blue: "linear-gradient(104deg, rgba(184,212,255,0) 0.9%, rgba(184,212,255,1) 2.4%, rgba(184,212,255,0.5) 5.8%, rgba(184,212,255,0.15) 93%, rgba(184,212,255,0.7) 96%, rgba(184,212,255,0) 98%)",
};

export default function TextHighlight({
  children,
  color = "yellow",
}: TextHighlightProps) {
  return (
    <mark
      className="relative inline rounded-sm px-1 py-0.5 text-ink bg-transparent"
      style={{
        backgroundImage: bgMap[color],
        WebkitBoxDecorationBreak: "clone",
        boxDecorationBreak: "clone",
      }}
    >
      {children}
    </mark>
  );
}
