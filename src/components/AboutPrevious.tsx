export default function AboutPrevious() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        .ap-cell {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .ap-cell img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
          filter: brightness(0.68) saturate(0.75);
          transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.5s ease;
        }
        .ap-cell:hover img { transform: scale(1.07); filter: brightness(0.85) saturate(1.0); }

        .ap-grad {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.08) 55%, transparent 100%);
          pointer-events: none;
        }
        .ap-txt {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 8px 10px 11px;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.67rem; line-height: 1.6;
          letter-spacing: 0.025em;
          color: rgba(255,255,255,0.88);
          z-index: 2;
        }
        .ap-cell::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #c0392b, transparent);
          opacity: 0; z-index: 6; transition: opacity 0.3s;
        }
        .ap-cell:hover::before { opacity: 1; }
        .ap-cell::after {
          content: '';
          position: absolute; bottom: 0; right: 0;
          width: 14px; height: 14px;
          border-bottom: 1.5px solid rgba(192,57,43,0.7);
          border-right:  1.5px solid rgba(192,57,43,0.7);
          opacity: 0; z-index: 6; transition: opacity 0.3s;
        }
        .ap-cell:hover::after { opacity: 1; }
      `}</style>

      <section style={{ background: "#080808", padding: "56px 40px 64px", position: "relative", overflow: "hidden" }}>

        {/* bg glow */}
        <div style={{
          position:"absolute", top:"25%", left:"50%", transform:"translate(-50%,-50%)",
          width:"900px", height:"500px",
          background:"radial-gradient(ellipse, rgba(120,0,0,0.1) 0%, transparent 70%)",
          filter:"blur(55px)", pointerEvents:"none",
        }}/>

        {/* Header */}
        <div style={{ position:"relative", zIndex:10, marginBottom:"28px" }}>
          <h2 className="font-god" style={{
            fontFamily:"", fontWeight:900,
            fontSize:"clamp(1.4rem,2.5vw,2rem)", color:"#c0392b",
            letterSpacing:"0.08em", textTransform:"uppercase",
            marginBottom:"6px", textShadow:"0 0 28px rgba(180,30,30,0.4)",
          }}>
            About Deviathon 2025
          </h2>
          <p style={{
            fontFamily:"'Share Tech Mono', monospace",
            fontSize:"clamp(0.7rem,1.1vw,0.88rem)",
            color:"rgba(255,255,255,0.5)", letterSpacing:"0.1em",
          }}>
            Where Ideas Turned Into Real Products
          </p>
          <div style={{ marginTop:"10px", height:"1.5px", width:"70px", background:"linear-gradient(90deg,#c0392b,transparent)" }}/>
        </div>

        {/* Unified 4-Column Grid Layout Matching Figma */}
        <div style={{
          position:"relative", zIndex:10,
          display:"grid",
          gridTemplateColumns:"repeat(4, 1fr)",
          gridTemplateRows:"400px 300px", /* Adjust height as needed to fit your overall page */
          gap:"8px",
        }}>

          {/* 1 — Top Left: Spans 2 columns, 1 row */}
          <div className="ap-cell" style={{ gridColumn:"1 / 3", gridRow:"1" }}>
            <img src="/prev1.png" alt="Deviathon 2025 event"/>
            <div className="ap-grad"/>
            <div className="ap-txt">
              Mentorship, Creativity, And Chaos Blended Into One Unforgettable Tech Experience.
            </div>
          </div>

          {/* 2 — Bottom Left 1: Spans 1 column, 1 row */}
          <div className="ap-cell" style={{ gridColumn:"1", gridRow:"2" }}>
            <img src="/prev2.png" alt="Deviathon 2025 event"/>
            <div className="ap-grad"/>
            <div className="ap-txt">
              Developers, Designers, And Dreamers Collaborated To Turn Ideas Into Reality.
            </div>
          </div>

          {/* 3 — Bottom Left 2: Spans 1 column, 1 row */}
          <div className="ap-cell" style={{ gridColumn:"2", gridRow:"2" }}>
            <img src="/prev3.png" alt="Deviathon 2025 event"/>
            <div className="ap-grad"/>
            <div className="ap-txt">
              Teams Competed, Learned, And Shipped Projects Under Intense, Real-World Pressure.
            </div>
          </div>

          {/* 4 — Middle Vertical: Spans 1 column, BUT 2 rows (Tall) */}
          <div className="ap-cell" style={{ gridColumn:"3", gridRow:"1 / 3" }}>
            <img src="/prev4.png" alt="Deviathon 2025 event"/>
            <div className="ap-grad"/>
            <div className="ap-txt">
              From Late-Night Debugging To Final Pitches— Pure Innovation And Energy Throughout.
            </div>
          </div>

          {/* 5 — Top Right: Spans 1 column, 1 row */}
          <div className="ap-cell" style={{ gridColumn:"4", gridRow:"1" }}>
            <img src="/prev5.png" alt="Deviathon 2025 event"/>
            <div className="ap-grad"/>
            <div className="ap-txt">
              Mentorship, Creativity, And Chaos Blended Into One Unforgettable Tech Experience.
            </div>
          </div>

          {/* 6 — Bottom Right: Spans 1 column, 1 row */}
          <div className="ap-cell" style={{ gridColumn:"4", gridRow:"2" }}>
            <img src="/prev6.png" alt="Deviathon 2025 event"/>
            <div className="ap-grad"/>
            <div className="ap-txt">
              Not Just A Hackathon—This Was A Launchpad For Future Builders.
            </div>
          </div>

        </div>

      </section>
    </>
  );
}