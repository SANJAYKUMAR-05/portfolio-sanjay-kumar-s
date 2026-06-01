import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, GitBranch, Link2, Code2, Send, MapPin } from "lucide-react";
import { personal } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const links = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}`, color: "#2563eb", bg: "#eff6ff" },
    { icon: GitBranch, label: "GitHub", value: "github.com/SANJAYKUMAR-05", href: personal.github, color: "#0f1117", bg: "#f4f5f7" },
    { icon: Link2, label: "LinkedIn", value: "linkedin.com/in/sanjay4136", href: personal.linkedin, color: "#0a66c2", bg: "#e8f4fd" },
    { icon: Code2, label: "LeetCode", value: "leetcode.com/u/kumar413607", href: personal.leetcode, color: "#f59e0b", bg: "#fffbeb" },
  ];

  const inputStyle = { width: "100%", padding: "12.1px 15.4px", borderRadius: 10, border: "1.5px solid #e8eaed", fontSize: 15.4, fontFamily: "'DM Sans',sans-serif", color: "#0f1117", background: "#fff", outline: "none", transition: "border-color 0.15s", boxSizing: "border-box" };

  return (
    <section id="contact" style={{ padding: "96.8px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1210, margin: "0 auto", padding: "0 22px" }}>
        <SectionHeader label="Contact" title="Let's Work Together"
          subtitle="Open to full-time roles, internships, and interesting engineering conversations." />

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 44, alignItems: "start" }}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div style={{ padding: "26.4px", borderRadius: 17.6, background: "linear-gradient(135deg,#f0f4ff,#fafafa)", border: "1px solid #e8eaed", marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 13.2 }}>
                <MapPin size={16.5} color="#2563eb" />
                <span style={{ fontSize: 15.4, color: "#4a5568" }}>Tamil Nadu, India</span>
              </div>
              <h3 style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: 18.7, color: "#0f1117", marginBottom: 8.8 }}>Available for Opportunities</h3>
              <p style={{ fontSize: 14.9, color: "#718096", lineHeight: 1.7 }}>
                Final-year student graduating in 2027. Looking for impactful software engineering roles where I can build scalable systems and grow as an engineer.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9.9 }}>
              {links.map(({ icon: Icon, label, value, href, color, bg }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  style={{ display: "flex", alignItems: "center", gap: 13.2, padding: "13.2px 17.6px", borderRadius: 13.2, border: "1px solid #e8eaed", background: "#fff", textDecoration: "none", transition: "border-color 0.15s ease" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = color}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "#e8eaed"}>
                  <div style={{ width: 39.6, height: 39.6, borderRadius: 9, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={17.6} color={color} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12.1, color: "#9ca3af", fontFamily: "'DM Mono',monospace", marginBottom: 2 }}>{label}</p>
                    <p style={{ fontSize: 14.3, color: "#374151", fontWeight: 500 }}>{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
            <div style={{ padding: "35.2px", borderRadius: 22, border: "1px solid #e8eaed", background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: 20.9, color: "#0f1117", marginBottom: 6.6 }}>Send a Message</h3>
              <p style={{ fontSize: 14.9, color: "#9ca3af", marginBottom: 26.4 }}>I'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 15.4 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12.1, color: "#718096", marginBottom: 5.5, fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em" }}>NAME</label>
                  <input style={inputStyle} placeholder="Your name" value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    onFocus={e => e.target.style.borderColor = "#2563eb"}
                    onBlur={e => e.target.style.borderColor = "#e8eaed"} required />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12.1, color: "#718096", marginBottom: 5.5, fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em" }}>EMAIL</label>
                  <input type="email" style={inputStyle} placeholder="your@email.com" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={e => e.target.style.borderColor = "#2563eb"}
                    onBlur={e => e.target.style.borderColor = "#e8eaed"} required />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12.1, color: "#718096", marginBottom: 5.5, fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em" }}>MESSAGE</label>
                  <textarea style={{ ...inputStyle, minHeight: 120, resize: "vertical" }} placeholder="Your message..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={e => e.target.style.borderColor = "#2563eb"}
                    onBlur={e => e.target.style.borderColor = "#e8eaed"} required />
                </div>
                <button type="submit"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8.8, padding: "13.2px 26.4px", borderRadius: 10, border: "none", background: sent ? "#15803d" : "linear-gradient(135deg,#2563eb,#3b82f6)", color: "#fff", cursor: "pointer", fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 15.4, boxShadow: "0 4px 14px rgba(37,99,235,0.2)", transition: "all 0.2s ease" }}
                  onMouseEnter={e => !sent && (e.currentTarget.style.transform = "translateY(-1px)")}
                  onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                  <Send size={15.4} />{sent ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
