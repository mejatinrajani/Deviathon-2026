import { useRef, useState } from "react";
import { CircleArrowOutUpRight } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden font-['Cinzel',serif]">

      <div
        className="absolute inset-0 opacity-65 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bgg.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/55" />

      {/* ── NAVBAR ── */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4">
        {/* GLA University Logo (top-left) */}
        <div className="flex items-center gap-2">
          <img
            src="/gla.png"
            alt="GLA University"
            className="h-20 object-contain"
          />
        </div>

        {/* Nav links (centre) */}
        <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase">
          {["Home", "About", "Team", "Events", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`transition-colors duration-200 ${
                  item === "Home"
                    ? "text-[#c0392b] font-semibold border-b border-[#c0392b] pb-0.5"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* God of War Omega logo (top-right) */}
        <div className="flex items-center">
          <img
            src="/omega.png"
            alt="Omega Logo"
            className="h-20 w-10 object-contain opacity-90"
          />
        </div>
      </nav>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 -mt-8">

        {/* ── DEVIATHON title ── */}
        <div className="relative w-full flex items-center justify-center select-none mb-6">
          {/* The giant text */}
          <h1
            className="text-[clamp(4rem,13vw,12rem)] font-black font-god tracking-[0.04em] uppercase leading-none text-center z-0"
            style={{
              fontFamily: "",
              color: "#f8f8f8", /* Solid off-white fill */
              WebkitTextStroke: "0.5px #b91c1c", /* Dark red outline */
              textShadow:
                "0 0 5px rgba(220, 38, 38, 0.6), 0 10px 30px rgba(0,0,0,0.9)", /* Red glow and depth shadow */
              letterSpacing: "0.15em",
            }}
          >
            DEVIATHON
          </h1>

          {/* Kratos + Atreus overlaid on the title — centred */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ height: "clamp(280px, 55vw, 520px)" }}
          >
            <img
              src="/kratos_and_atreus.png"
              alt="Kratos and Atreus"
              className="h-[1000px] -mt-2 ml-10 w-auto object-contain object-bottom"
              style={{ filter: "drop-shadow(0 0 40px rgba(0,0,0,0.95))" }}
            />
          </div>
        </div>

        {/* ── Bottom row: REGISTER button + Video player ── */}
        <div className="w-full max-w-7xl flex items-end justify-between px-4 mt-4">

          {/* REGISTER button & Logos (bottom-left) */}
          <div className="flex flex-col items-start mt-20 gap-6 relative -left-20 lg:-left-36">
            <button
              className="px-8 py-3 border border-white/80 text-white text-sm tracking-[0.25em] uppercase font-semibold
                         bg-black/30 hover:bg-white hover:text-black transition-all duration-300
                         backdrop-blur-sm flex items-center gap-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Register Now
              <CircleArrowOutUpRight className="w-5 h-5" />
            </button>

            {/* Logos moved here, aligned left, sizes fixed */}
            <div className="flex items-center mt-12 gap-6 ml-1">
              <img
                src="/gla.png"
                alt="GLA University"
                className="h-20 w-auto object-contain"
              />
              <img
                src="/ghumi_ghumi.png"
                alt="Ghumi Ghumi"
                className="h-28 w-auto object-contain"
              />
            </div>
          </div>

          {/* Video player (bottom-right) */}
          <div
            className="relative bg-black/70 -left-20 z-50 top-15 border border-white overflow-hidden"
            style={{ width: "clamp(240px, 30vw, 370px)", aspectRatio: "16/9" }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
              playsInline
            >
              {/* Place your video file in /public and update the src below */}
              <source src="/deviathon-intro.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>

            {/* Play / Pause overlay button */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayPause}
                  className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center
                             bg-black/40 hover:bg-white/20 transition-all duration-200"
                  aria-label="Play video"
                >
                  {/* Play triangle */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            )}

            {/* Pause button (visible while playing, subtle) */}
            {isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
                aria-label="Pause video"
              >
                <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/40">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Google Fonts import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cinzel+Decorative:wght@700;900&display=swap');
      `}</style>
    </div>
  );
}