
export default function SectionDivider() {
  return (
    <div className="relative w-full h-0 z-[100]">
      <div
        className="absolute -top-32 left-0 w-full h-64 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,1) 40%,
              rgba(0,0,0,1) 60%,
              rgba(0,0,0,0) 100%
            )
          `,
        }}
      />

      {/* Red atmospheric glow */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1000px] h-10 blur-[60px] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(180,20,20,0.8) 0%, rgba(0,0,0,0) 20%)",
        }}
      />
    </div>
  );
}