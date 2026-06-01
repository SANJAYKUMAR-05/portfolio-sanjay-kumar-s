import { GitBranch, Link2, Mail, ArrowUp, Code2 } from "lucide-react";
import { personal } from "../data/portfolio";

const sections = ["Home","About","Skills","DSA","Projects","Achievements","Education","Gallery","Contact"];

export default function Footer() {
  const scrollTo = id => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "#0f1117", color: "#e5e7eb", padding: "61.6px 0 30.8px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 22px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 44, marginBottom: 44 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 15.4 }}>
              <div style={{ width: 35.2, height: 35.2, borderRadius: 8, background: "linear-gradient(135deg,#2563eb,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 15.4 }}>S</div>
              <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: 16.5, color: "#fff" }}>Sanjay Kumar S</span>
            </div>
            <p style={{ fontSize: 14.3, color: "#6b7280", lineHeight: 1.7, maxWidth: 286, marginBottom: 19.8 }}>
              Java Full Stack Developer · B.E. CSE (Cyber Security) · 2027 Graduate from SKCET
            </p>
            <div style={{ display: "flex", gap: 8.8, flexWrap: "wrap" }}>
              {[{href:personal.github,Icon:GitBranch},{href:personal.linkedin,Icon:Link2},{href:`mailto:${personal.email}`,Icon:Mail},{href:personal.leetcode,Icon:Code2}].map(({href,Icon},i)=>(
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 37.4,height: 37.4,borderRadius:8,background:"#1f2937",display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280",textDecoration:"none",transition:"all 0.15s ease" }}
                  onMouseEnter={e=>{e.currentTarget.style.background="#2563eb";e.currentTarget.style.color="#fff";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="#1f2937";e.currentTarget.style.color="#6b7280";}}>
                  <Icon size={15.4} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 13.2, color: "#fff", marginBottom: 15.4, letterSpacing: "0.05em" }}>NAVIGATION</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7.7 }}>
              {sections.map(s => (
                <button key={s} onClick={() => scrollTo(s)}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14.9, color: "#6b7280", textAlign: "left", padding: 0, transition: "color 0.15s", fontFamily: "'DM Sans',sans-serif" }}
                  onMouseEnter={e=>e.target.style.color="#e5e7eb"}
                  onMouseLeave={e=>e.target.style.color="#6b7280"}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 13.2, color: "#fff", marginBottom: 15.4, letterSpacing: "0.05em" }}>INFO</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 9.9 }}>
              {[
                { label: "Status", val: "Open to Opportunities" },
                { label: "Phone", val: personal.phone },
                { label: "Education", val: "SKCET, 2023–2027" },
                { label: "Location", val: "Tamil Nadu, India" },
                { label: "Stack", val: "Java · Spring · React" },
              ].map(({ label, val }) => (
                <div key={label}>
                  <p style={{ fontSize: 11, color: "#4b5563", fontFamily: "'DM Mono',monospace", marginBottom: 1 }}>{label}</p>
                  <p style={{ fontSize: 14.3, color: "#9ca3af" }}>{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1f2937", paddingTop: 22, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 11 }}>
          <p style={{ fontSize: 13.2, color: "#4b5563", fontFamily: "'DM Mono',monospace" }}>© 2025 Sanjay Kumar S · {personal.email}</p>
          <button onClick={scrollTop}
            style={{ display: "flex", alignItems: "center", gap: 6.6, background: "#1f2937", border: "none", cursor: "pointer", padding: "7.7px 15.4px", borderRadius: 8, color: "#6b7280", fontSize: 13.2, fontFamily: "'DM Mono',monospace", transition: "all 0.15s" }}
            onMouseEnter={e=>{e.currentTarget.style.background="#2563eb";e.currentTarget.style.color="#fff";}}
            onMouseLeave={e=>{e.currentTarget.style.background="#1f2937";e.currentTarget.style.color="#6b7280";}}>
            <ArrowUp size={13.2} /> Back to top
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
