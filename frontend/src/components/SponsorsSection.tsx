import { useState, useMemo } from "react";

// Define the theme colors fitting the "Deviathon" aesthetic
type ThemeGlow = "red" | "gold" | "ash";

interface Sponsor {
  name: string;
  logo: string;
  category: string;
  glow: ThemeGlow;
}

const sponsors: Sponsor[] = [
  { name: "Bodhitva AI", logo: "/11.png", category: "Mentoring Partner", glow: "red" },
  { name: "Samarth.ai", logo: "/1.png", category: "Industry Partner", glow: "red" },
  { name: "Intel", logo: "/3.png", category: "Internship Partner", glow: "ash" },
  { name: "NEC", logo: "/15.png", category: "Mentoring Partner", glow: "red" },
  { name: "GiveMyCertificate", logo: "/7.png", category: "Certification Partner", glow: "ash" },
  { name: "Devnovate", logo: "/5.png", category: "Hosting Partner", glow: "red" },
  { name: "Edulateral Foundation", logo: "/155.png", category: "Mentoring Partner", glow: "ash" },
  { name: "BlockSeBlock", logo: "/13.png", category: "Goodies Partner", glow: "red" },
  { name: "GeeksForGeeks", logo: "/6.png", category: "Goodies Partner", glow: "ash" },
  { name: "SkillCred", logo: "/12.png", category: "Problem Statement Partner", glow: "red" },
  { name: "Where U Elevate", logo: "/10.png", category: "Innovation Partner", glow: "ash" },
  { name: "Karkhana", logo: "/9.png", category: "Industry Partner", glow: "red" },
  { name: "Rabbitt", logo: "/4.png", category: "Innovation Partner", glow: "ash" },
  { name: "GitHub", logo: "/2.png", category: "Supporting Partner", glow: "ash" },
  { name: "W3Grads", logo: "/14.png", category: "Supporting Partner", glow: "gold" },
  { name: "HelaChain", logo: "/15.1111.png", category: "Supporting Partner", glow: "gold" },
  { name: "IntelliWings", logo: "/811.png", category: "Supporting Partner", glow: "gold" },
];

const SponsorCard = ({ sponsor, onMouseEnter, onMouseLeave }: { sponsor: Sponsor, onMouseEnter: () => void, onMouseLeave: () => void }) => {
  const glowStyles = {
    red: "hover:border-[#c0392b] hover:shadow-[0_0_30px_rgba(192,57,43,0.6)]",
    gold: "hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]",
    ash: "hover:border-white/60 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
  };

  return (
    <div
      className="group mx-4 flex-shrink-0 flex flex-col items-center cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className={`relative w-48 h-24 bg-[#080808] border border-white/10 rounded-sm p-4 overflow-hidden transition-all duration-500 flex items-center justify-center ${glowStyles[sponsor.glow]}`}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
        
        <img
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          loading="lazy"
          className="object-contain w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-0"
        />

        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:border-[#c0392b] transition-colors z-20" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:border-[#c0392b] transition-colors z-20" />
      </div>
      
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px] uppercase tracking-widest text-gray-400">
        {sponsor.category}
      </div>
    </div>
  );
};

const MarqueeRow = ({ sponsors, direction, onHoverChange }: { sponsors: Sponsor[], direction: "left" | "right", onHoverChange: (isHovered: boolean) => void }) => {
  const animationClass = direction === "left" ? "animate-slide-left" : "animate-slide-right";
  const duration = sponsors.length * 4;

  return (
    <div
      className="relative w-full overflow-hidden py-2"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {/* Small internal masks for the sides of the marquee */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-black/0 z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-black/0 z-10 pointer-events-none" />

      <div
        className={`flex ${animationClass}`}
        style={{ animationDuration: `${duration}s`, willChange: "transform" }}
      >
        {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
          <SponsorCard
            key={`${sponsor.name}-${index}`}
            sponsor={sponsor}
            onMouseEnter={() => onHoverChange(true)}
            onMouseLeave={() => onHoverChange(false)}
          />
        ))}
      </div>
    </div>
  );
};

export default function SponsorsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const mid = Math.ceil(sponsors.length / 2);
  const row1 = useMemo(() => sponsors.slice(0, mid), [mid]);
  const row2 = useMemo(() => sponsors.slice(mid), [mid]);

  return (
    <section 
      id="sponsors" 
      className="relative w-full z-[100] font-sans bg-black py-10"
    >
      
      {/* Top fade (Bleeds UP into the Hero section) */}
      <div 
        className="absolute bottom-full left-0 w-full h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #000000 0%, rgba(0,0,0,0) 100%)",
          marginBottom: "-2px" /* Physically pulls the flap down slightly to seal any 1px browser gaps */
        }}
      />
      
      {/* Bottom fade (Bleeds DOWN into the About section) */}
      <div 
        className="absolute top-full left-0 w-full h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0) 100%)",
          marginTop: "-2px" /* Physically pulls the flap up slightly to seal any 1px browser gaps */
        }}
      />

      {/* Global Animation Styles */}
      <style>{`
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes slide-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-slide-left { animation: slide-left linear infinite; }
        .animate-slide-right { animation: slide-right linear infinite; }
        .pause-animation .animate-slide-left,
        .pause-animation .animate-slide-right { animation-play-state: paused; }
      `}</style>

      <div className="container mx-auto relative z-10 overflow-hidden">
        {/* Marquee Rows */}
        <div className={`space-y-4 ${isPaused ? "pause-animation" : ""}`}>
          <MarqueeRow sponsors={row1} direction="left" onHoverChange={setIsPaused} />
          <MarqueeRow sponsors={row2} direction="right" onHoverChange={setIsPaused} />
        </div>
      </div>
    </section>
  );
}