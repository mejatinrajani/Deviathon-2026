import { useState } from "react";

export default function GetInTouch() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        .git-input {
          width: 100%;
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.85);
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          padding: 10px 14px;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .git-input::placeholder {
          color: rgba(255,255,255,0.28);
          font-size: 0.75rem;
        }
        .git-input:focus {
          border-color: rgba(192,57,43,0.6);
          box-shadow: 0 0 0 1px rgba(192,57,43,0.2);
        }

        .git-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.45);
          display: block;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .git-submit {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 10px 24px;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.45);
          color: rgba(255,255,255,0.88);
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.25s, color 0.25s, border-color 0.25s;
        }
        .git-submit:hover:not(:disabled) {
          background: white;
          color: black;
          border-color: white;
        }
        .git-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        .git-link {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .git-link:hover { color: #c0392b; }

        @keyframes git-spin {
          to { transform: rotate(360deg); }
        }
        .git-spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.2);
          border-top-color: white;
          border-radius: 50%;
          animation: git-spin 0.7s linear infinite;
        }
      `}</style>

      <footer style={{ background: "#0a0a0a", position: "relative", overflow: "hidden" }}>

        {/* Subtle top divider */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(192,57,43,0.35), transparent)" }}/>

        {/* Ambient glow */}
        <div style={{
          position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)",
          width:"700px", height:"250px",
          background:"radial-gradient(ellipse, rgba(120,0,0,0.08) 0%, transparent 70%)",
          filter:"blur(50px)", pointerEvents:"none",
        }}/>

        <div style={{
          position:"relative", zIndex:10,
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"60px",
          padding:"56px 48px 64px",
          maxWidth:"1100px",
          margin:"0 auto",
        }}>

          {/* ── LEFT: contact info ── */}
          <div>
            <h2 className="font-god" style={{
              fontFamily:"", fontWeight:900,
              fontSize:"clamp(1.4rem,2.5vw,1.9rem)", color:"#c0392b",
              letterSpacing:"0.08em", textTransform:"uppercase",
              marginBottom:"10px", textShadow:"0 0 25px rgba(180,30,30,0.4)",
            }}>
              Get In Touch
            </h2>
            <div style={{ height:"1.5px", width:"60px", background:"linear-gradient(90deg,#c0392b,transparent)", marginBottom:"18px" }}/>

            <p style={{
              fontFamily:"'Share Tech Mono', monospace",
              fontSize:"0.78rem", lineHeight:1.75,
              color:"rgba(255,255,255,0.5)", letterSpacing:"0.04em",
              marginBottom:"32px", maxWidth:"380px",
            }}>
              Have Questions, Ideas, Or Ready To Collaborate? Reach Out To The Deviathon Team And We'll Help You Navigate Your Path To The Battlefield Of Innovation.
            </p>

            {/* Contact Information heading */}
            <p style={{
              fontFamily:"'Cinzel', serif", fontWeight:700,
              fontSize:"0.9rem", color:"rgba(255,255,255,0.8)",
              letterSpacing:"0.06em", marginBottom:"16px",
            }}>
              Contact Information
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:"12px", marginBottom:"36px" }}>
              {/* Email */}
              <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" style={{ width:15, height:15, flexShrink:0 }}>
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
                <a href="mailto:Deviathon@Gmail.Com" className="git-link" style={{ fontFamily:"'Share Tech Mono', monospace", fontSize:"0.75rem", letterSpacing:"0.06em" }}>
                  Deviathon@Gmail.Com
                </a>
              </div>

              {/* Phone */}
              <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" style={{ width:15, height:15, flexShrink:0 }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontFamily:"'Share Tech Mono', monospace", fontSize:"0.75rem", letterSpacing:"0.06em", color:"rgba(255,255,255,0.5)" }}>
                  999999990
                </span>
              </div>

              {/* Location */}
              <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" style={{ width:15, height:15, flexShrink:0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span style={{ fontFamily:"'Share Tech Mono', monospace", fontSize:"0.75rem", letterSpacing:"0.06em", color:"rgba(255,255,255,0.5)" }}>
                  GLA University, Mathura
                </span>
              </div>
            </div>

            {/* Follow Us */}
            <p style={{
              fontFamily:"'Cinzel', serif", fontWeight:700,
              fontSize:"0.88rem", color:"rgba(255,255,255,0.8)",
              letterSpacing:"0.06em", marginBottom:"14px",
            }}>
              Follow Us
            </p>
            <div style={{ display:"flex", gap:"16px" }}>
              {/* Instagram */}
              <a href="#" className="git-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width:20, height:20 }}>
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="git-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width:20, height:20 }}>
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" opacity="0.85"/>
                  <circle cx="4" cy="4" r="2" opacity="0.85"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: contact form ── */}
          <div>
            <p style={{
              fontFamily:"'Cinzel', serif", fontWeight:700,
              fontSize:"1rem", color:"rgba(255,255,255,0.8)",
              letterSpacing:"0.08em", marginBottom:"24px",
            }}>
              Send Us A Message
            </p>

            {submitted ? (
              <div style={{
                padding:"32px 24px",
                border:"1px solid rgba(192,57,43,0.35)",
                background:"rgba(192,57,43,0.06)",
                textAlign:"center",
              }}>
                <p style={{
                  fontFamily:"'Cinzel', serif", fontWeight:700,
                  fontSize:"1rem", color:"#c0392b", letterSpacing:"0.06em",
                  marginBottom:"8px",
                }}>Message Sent!</p>
                <p style={{
                  fontFamily:"'Share Tech Mono', monospace",
                  fontSize:"0.72rem", color:"rgba(255,255,255,0.5)",
                  letterSpacing:"0.05em",
                }}>We'll get back to you soon.</p>
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:"18px" }}>

                {/* Name + Email row */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
                  <div>
                    <label className="git-label">Name</label>
                    <input
                      className="git-input"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="git-label">Email</label>
                    <input
                      className="git-input"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="git-label">Message</label>
                  <textarea
                    className="git-input"
                    name="message"
                    placeholder="Type Your Message Here..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    style={{ resize:"vertical", minHeight:"120px" }}
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    className="git-submit"
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.email || !form.message}
                  >
                    {loading ? (
                      <span className="git-spinner"/>
                    ) : (
                      <>
                        SUBMIT
                        {/* Circle arrow */}
                        <span style={{
                          display:"inline-flex", alignItems:"center", justifyContent:"center",
                          width:18, height:18, borderRadius:"50%",
                          border:"1px solid rgba(255,255,255,0.5)",
                          fontSize:"0.7rem",
                        }}>
                          ↗
                        </span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop:"1px solid rgba(255,255,255,0.06)",
          padding:"16px 48px",
          display:"flex", justifyContent:"center",
        }}>
          <p style={{
            fontFamily:"'Share Tech Mono', monospace",
            fontSize:"0.65rem", color:"rgba(255,255,255,0.22)",
            letterSpacing:"0.1em",
          }}>
            © 2026 DEVIATHON · GLA UNIVERSITY · ALL RIGHTS RESERVED
          </p>
        </div>

      </footer>
    </>
  );
}