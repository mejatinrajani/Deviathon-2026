import { useState, useRef, useEffect, useCallback } from "react";

/* ── Team data — swap images/names/roles as needed ── */
const TEAM = [
  { name: "John Babu",    role: "Student Coordinator", img: "/team1.jpg" },
  { name: "Priya Sharma", role: "Tech Lead",            img: "/team2.jpg" },
  { name: "Aryan Singh",  role: "Design Head",          img: "/team3.jpg" },
  { name: "Neha Gupta",   role: "Event Manager",        img: "/team4.jpg" },
  { name: "Ravi Kumar",   role: "Marketing Lead",       img: "/team5.jpg" },
  { name: "Sneha Patel",  role: "Logistics Head",       img: "/team6.jpg" },
];

/* Number of cards visible at once */
const VISIBLE = 4;

/* ── Rune / decorative SVG corner ── */
function RuneCorner({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="absolute w-5 h-5 text-red-700 opacity-70"
      style={{
        top: flip ? "auto" : 8,
        bottom: flip ? 8 : "auto",
        left: flip ? "auto" : 8,
        right: flip ? 8 : "auto",
        transform: flip ? "rotate(180deg)" : "none",
      }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 3 L10 3 L3 10 Z" />
    </svg>
  );
}

/* ── Individual card ── */
function TeamCard({
  member,
  active,
}: {
  member: (typeof TEAM)[0];
  active: boolean;
}) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden transition-all duration-500 ease-out"
      style={{
        width: active ? "260px" : "210px",
        height: active ? "340px" : "290px",
        transform: `
          translateY(${active ? -18 : 0}px)
          scale(${active ? 1.04 : 1})
        `,
        zIndex: active ? 20 : 10,
        transition: "all 0.45s cubic-bezier(0.34,1.2,0.64,1)",
      }}
    >
      {/* Outer border frame */}
      <div
        className="absolute inset-0 rounded-sm pointer-events-none z-30"
        style={{
          border: active
            ? "1.5px solid rgba(200,30,30,0.75)"
            : "1px solid rgba(255,255,255,0.12)",
          boxShadow: active
            ? "0 0 30px rgba(180,20,20,0.45), inset 0 0 20px rgba(180,20,20,0.08)"
            : "none",
          transition: "all 0.45s ease",
        }}
      />

      {/* Active top-bar accent */}
      {active && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5 z-30"
          style={{ background: "linear-gradient(90deg, transparent, #c0392b, transparent)" }}
        />
      )}

      {/* Rune corners on active card */}
      {active && (
        <>
          <RuneCorner />
          <RuneCorner flip />
        </>
      )}

      {/* Photo */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500"
          style={{
            transform: active ? "scale(1.06)" : "scale(1.0)",
            filter: active
              ? "brightness(0.88) contrast(1.08) saturate(0.85)"
              : "brightness(0.55) saturate(0.4) contrast(0.9)",
          }}
          onError={(e) => {
            /* Fallback placeholder if image missing */
            const t = e.currentTarget;
            t.style.display = "none";
            const parent = t.parentElement!;
            parent.style.background =
              "linear-gradient(160deg,#1a1a2e,#0d0d0d)";
          }}
        />
        {/* Bottom gradient for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 40%, transparent 75%)",
          }}
        />
      </div>

      {/* Scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 3px)",
        }}
      />

      {/* Name + role */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4">
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            fontSize: active ? "1rem" : "0.85rem",
            color: active ? "#ffffff" : "rgba(255,255,255,0.7)",
            letterSpacing: "0.06em",
            marginBottom: "3px",
            transition: "all 0.4s ease",
            textShadow: active ? "0 0 12px rgba(200,40,40,0.5)" : "none",
          }}
        >
          {member.name}
        </p>
        <p
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: active ? "0.72rem" : "0.62rem",
            color: active ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.35)",
            letterSpacing: "0.1em",
            transition: "all 0.4s ease",
          }}
        >
          {member.role}
        </p>

        {/* Active underline accent */}
        {active && (
          <div
            className="mt-2"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, #c0392b, transparent)",
              width: "60%",
            }}
          />
        )}
      </div>
    </div>
  );
}

/* ── Arrow button ── */
function ArrowBtn({
  dir,
  onClick,
  disabled,
}: {
  dir: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 select-none"
      style={{
        border: "1.5px solid rgba(255,255,255,0.25)",
        background: disabled ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.5)",
        color: disabled ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.8)",
        cursor: disabled ? "not-allowed" : "pointer",
        backdropFilter: "blur(4px)",
      }}
      aria-label={dir === "left" ? "Previous" : "Next"}
    >
      {dir === "left" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

/* ══════════════════════════════════
   OUR TEAM COMPONENT
══════════════════════════════════ */
export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (animating) return;
      setAnimating(true);
      setActiveIndex((prev) => {
        const next = prev + dir;
        if (next < 0 || next >= TEAM.length) return prev;
        return next;
      });
      setTimeout(() => setAnimating(false), 500);
    },
    [animating]
  );

  /* Auto-advance every 3.5 s */
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1 >= TEAM.length ? 0 : prev + 1));
    }, 3500);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  /* Reset auto-timer on manual nav */
  const manualGo = (dir: 1 | -1) => {
    if (autoRef.current) clearInterval(autoRef.current);
    go(dir);
    autoRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1 >= TEAM.length ? 0 : prev + 1));
    }, 3500);
  };

  /* Visible window: show VISIBLE cards centred around activeIndex */
  const half = Math.floor(VISIBLE / 2);
  let startIdx = activeIndex - half;
  if (startIdx < 0) startIdx = 0;
  if (startIdx + VISIBLE > TEAM.length) startIdx = Math.max(0, TEAM.length - VISIBLE);
  const visible = TEAM.slice(startIdx, startIdx + VISIBLE);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Share+Tech+Mono&display=swap');
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{
          background: "#0a0a0a",
          padding: "64px 0 72px",
          minHeight: "480px",
        }}
      >
        {/* ── Ambient red glow in background ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "30%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "700px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(140,0,0,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* ── Section header ── */}
        <div className="relative z-10 font-god px-12 mb-10">
          <h2
            style={{
              fontFamily: "",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "#c0392b",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              lineHeight: 1,
              marginBottom: "8px",
              textShadow: "0 0 30px rgba(180,30,30,0.45)",
            }}
          >
            Our Team
          </h2>
          <p
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.12em",
            }}
          >
            Meet The Minds Behind The Event
          </p>

          {/* Red underline */}
          <div
            className="mt-3"
            style={{
              height: "1.5px",
              width: "80px",
              background: "linear-gradient(90deg, #c0392b, transparent)",
            }}
          />
        </div>

        {/* ── Slider row ── */}
        <div className="relative z-10 flex items-center gap-5 px-10">

          {/* Left arrow */}
          <ArrowBtn dir="left" onClick={() => manualGo(-1)} disabled={activeIndex === 0} />

          {/* Cards */}
          <div
            className="flex items-end gap-4 overflow-visible"
            style={{ flex: 1, justifyContent: "center", minHeight: "360px" }}
          >
            {visible.map((member, i) => {
              const realIdx = startIdx + i;
              return (
                <TeamCard
                  key={member.name + realIdx}
                  member={member}
                  active={realIdx === activeIndex}
                />
              );
            })}
          </div>

          {/* Right arrow */}
          <ArrowBtn dir="right" onClick={() => manualGo(1)} disabled={activeIndex === TEAM.length - 1} />
        </div>

        {/* ── Dot indicators ── */}
        <div className="relative z-10 flex justify-center gap-2 mt-8">
          {TEAM.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (autoRef.current) clearInterval(autoRef.current);
                setActiveIndex(i);
                autoRef.current = setInterval(() => {
                  setActiveIndex((p) => (p + 1 >= TEAM.length ? 0 : p + 1));
                }, 3500);
              }}
              aria-label={`Go to member ${i + 1}`}
              style={{
                width: i === activeIndex ? "28px" : "8px",
                height: "8px",
                borderRadius: i === activeIndex ? "4px" : "50%",
                background: i === activeIndex ? "#c0392b" : "rgba(255,255,255,0.2)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.34,1.2,0.64,1)",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}