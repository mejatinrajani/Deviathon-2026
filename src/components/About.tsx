import { useRef, useState, useEffect } from "react";

/* ─── Typing animation hook ─── */
function useTypewriter(text: string, speed = 35, startDelay = 400) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);
  return displayed;
}
function CrossGrid() {
  const maxCols = 5;

  return (
    <div
      className="absolute -left-10 top-30 h-full flex items-center"
      style={{ width: "50%" }}
    >
      <div className="flex flex-col gap-6 pl-10">
        {Array.from({ length: maxCols }).map((_, rowIndex) => {
          const itemsInRow = maxCols - rowIndex;

          return (
            <div key={rowIndex} className="flex gap-6">
              {Array.from({ length: itemsInRow }).map((_, colIndex) => (
                <img
                  key={colIndex}
                  src="/cross.png"
                  alt="cross"
                  className="w-20 h-20 object-contain invert"
                  style={{ filter: "grayscale(1) brightness(1.5) opacity(1.0)" }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Video thumbnail card ─── */
function VideoCard({ src, poster, isPlayable }: { src?: string; poster?: string, isPlayable?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!isPlayable || !ref.current) return;
    if (playing) { ref.current.pause(); setPlaying(false); }
    else { ref.current.play(); setPlaying(true); }
  };

  return (
    <div
      className={`relative bg-transparent border border-white/30 overflow-hidden ${isPlayable ? 'cursor-pointer group hover:bg-white/5' : ''} transition-colors duration-300 rounded-sm`}
      style={{ width: "110px", height: "150px" }}
      onClick={toggle}
    >
      {isPlayable && src && (
        <video
          ref={ref}
          className={`w-full h-full object-cover transition-opacity duration-300 ${playing ? 'opacity-100' : 'opacity-0'}`}
          poster={poster}
          onEnded={() => setPlaying(false)}
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Play overlay for playable card */}
      {isPlayable && !playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center bg-black/40 group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 24 24" fill="transparent" stroke="white" strokeWidth="1.5" className="w-3 h-3 ml-0.5">
              <path d="M8 5v14l11-7z" fill="white" stroke="none" />
            </svg>
          </div>
        </div>
      )}

      {/* Pause overlay while playing */}
      {isPlayable && playing && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/40">
          <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center bg-black/40">
            <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════
   ABOUT COMPONENT
══════════════════════════════════════════════ */
export default function About() {
  const body = useTypewriter(
    "Enter The Battlefield Of Innovation Where Developers, Designers, And Creators Rise Through Code, AI, And Competition.",
    28,
    600
  );

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Share+Tech+Mono&display=swap');

        .about-section * { box-sizing: border-box; }

        /* Scanline overlay on background */
        .about-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.15) 3px,
            rgba(0,0,0,0.15) 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        /* Pulsing cursor after typewriter */
        .cursor::after {
          content: '|';
          color: #e11d48;
          animation: blink 1s step-end infinite;
          margin-left: 4px;
        }
        @keyframes blink { 50% { opacity: 0; } }

        /* Register button hover */
        .btn-register {
          font-family: 'Share Tech Mono', monospace;
          letter-spacing: 0.18em;
          border: 1px solid rgba(255,255,255,0.4);
          color: white;
          background: transparent;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }
        .btn-register:hover { 
          background: white; 
          color: black; 
        }
        .btn-register:hover .arrow-icon {
          border-color: black;
        }

        /* Explore events link */
        .btn-explore {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.85);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
          text-transform: uppercase;
        }
        .btn-explore:hover { color: #e11d48; }

        /* Thumbnail row scrollbar hidden */
        .thumb-row::-webkit-scrollbar { display: none; }
        .thumb-row { scrollbar-width: none; }
      `}</style>

      <section
        className="about-section relative mt-8 w-full overflow-hidden bg-[#050505]"
        style={{ minHeight: "900px" }} /* Kept your custom minHeight */
      >
        {/* ── Full-bleed background image ── */}
        <div className="about-bg absolute inset-0">
          <img
            src="/bgggg.png" /* Changed to .jpg to match your asset */
            alt="background"
            className="w-full h-full object-cover object-center grayscale"
            style={{ filter: "brightness(1.0) contrast(1.2)" }} /* Darkened to match Figma */
          />
          {/* Heavy dark gradient overlays to match the design's vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90 z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/90 z-0" />
        </div>

        {/* ══ MAIN CONTENT ROW ══ */}
        <div className="relative z-10 flex flex-row w-full max-w-7xl mx-auto" style={{ minHeight: "650px" }}>

          {/* ── LEFT PANEL: cross grid + kratos head + kratos model ── */}
          <div className="relative flex-shrink-0" style={{ width: "50%" }}>

            {/* Cross / runic symbol grid */}
            <CrossGrid />

            {/* Kratos painted head — top-left corner */}
            <div
              className="absolute z-10 bg-black/40 border border-white/5"
              style={{ top: "0px", left: "0px", width: "250px", height: "250px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src="/head.png" /* Changed to .jpg to match your asset */
                alt="Kratos head illustration"
                className="w-full h-full object-cover opacity-60 mix-blend-screen"
              />
            </div>

            {/* Kratos 3-D model — centred, bottom-anchored */}
            <div
              className="absolute bottom-[-70px] ml-40 left-1/2 -translate-x-1/2 z-20" /* Kept your specific positioning */
              style={{ width: "clamp(250px, 35vw, 420px)" }}
            >
              <img
                src="/kratos_model.png"
                alt="Kratos 3D model"
                className="w-full object-contain object-bottom grayscale"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(0,0,0,0.8)) brightness(0.85) contrast(1.1)",
                }}
              />
            </div>
          </div>

          {/* ── RIGHT PANEL: text + buttons + thumbnails ── */}
          <div
            className="relative z-10 flex mt-20 ml-20 flex-col justify-center pr-10 pl-8" /* Kept your custom mt-20 and ml-60 */
            style={{ width: "50%", paddingTop: "60px", paddingBottom: "60px" }}
          >

            {/* Event title */}
            <h2
              style={{
                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 900,
                color: "#e11d48",
                letterSpacing: "0.08em",
                marginBottom: "4px",
                lineHeight: 1.1,
                textTransform: "uppercase"
              }}
            >
              Deviathon 2026
            </h2>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.15em",
                marginBottom: "24px",
              }}
            >
              Code. Conquer. Ascend.
            </p>

            {/* Typewriter body paragraph */}
            <p
              className="cursor"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "clamp(0.75rem, 1.1vw, 0.9rem)",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.8,
                letterSpacing: "0.05em",
                maxWidth: "540px",
                marginBottom: "32px",
                minHeight: "80px",
              }}
            >
              {body}
            </p>

            {/* Location + Date */}
            <div className="flex flex-col gap-3 mb-10">
              {/* Location */}
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="2"
                  className="w-4 h-4 flex-shrink-0"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.08em",
                  }}
                >
                  GLA University, Mathura, Uttar Pradesh
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="2"
                  className="w-4 h-4 flex-shrink-0"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.08em",
                  }}
                >
                  October 10–12, 2026
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-8 mb-10 flex-wrap">
              <button
                className="btn-register px-6 py-3 text-xs font-bold"
              >
                REGISTER NOW
                {/* Circle arrow icon */}
                <span className="arrow-icon inline-flex items-center justify-center w-5 h-5 rounded-full border border-white/60 text-xs transition-colors">
                  ↗
                </span>
              </button>

              <button className="btn-explore text-xs">
                EXPLORE EVENTS
              </button>
            </div>

            {/* ── Thumbnail / video grid row ── */}
            <div
              className="thumb-row flex gap-4 overflow-x-auto"
              style={{ maxWidth: "540px" }}
            >
              {/* First card: Playable video player */}
              <div className="flex-shrink-0">
                <VideoCard src="/deviathon-intro.mp4" isPlayable={true} />
              </div>

              {/* Remaining blank placeholder cards */}
              <div className="flex-shrink-0">
                <VideoCard isPlayable={false} />
              </div>
              <div className="flex-shrink-0">
                <VideoCard isPlayable={false} />
              </div>
              <div className="flex-shrink-0">
                <VideoCard isPlayable={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}