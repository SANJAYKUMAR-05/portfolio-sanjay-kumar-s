import { motion } from "framer-motion";
import { timeline, personal } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const typeColors = {
  edu: { color: "#2563eb", bg: "#eff6ff" }, skill: { color: "#7c3aed", bg: "#f5f3ff" },
  dev: { color: "#0369a1", bg: "#f0f9ff" }, project: { color: "#15803d", bg: "#f0fdf4" },
  achieve: { color: "#b45309", bg: "#fffbeb" },
};
const typeLabels = { edu:"Education", skill:"Skill Growth", dev:"Development", project:"Project", achieve:"Achievement" };

export default function Education() {
  return (
    <section id="education" style={{ padding: "96.8px 0", background: "#fafafa" }}>
      <div style={{ maxWidth: 946, margin: "0 auto", padding: "0 22px", width: "100%" }}>
        <SectionHeader label="Journey" title="Education & Growth"
          subtitle="A timeline of my engineering journey — learning, building, and growing." />

        {/* Education card */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: "#fff", border: "1px solid #e8eaed", borderRadius: 17.6, padding: "26.4px 30.8px", marginBottom: 52.8, display: "flex", alignItems: "flex-start", gap: 22 }}>
          <div style={{ width: 52.8, height: 52.8, borderRadius: 15.4, background: "linear-gradient(135deg,#dbeafe,#e9d5ff)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 22 }}>🎓</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 12.1, color: "#9ca3af", fontFamily: "'DM Mono',monospace", marginBottom: 4.4 }}>{personal.batch}</p>
            <h3 style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: "clamp(15px,2vw,18px)", color: "#0f1117", marginBottom: 3.3 }}>{personal.degree}</h3>
            <p style={{ fontSize: 15.4, color: "#4a5568", marginBottom: 8.8 }}>{personal.college}</p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8.8, background: "#eff6ff", padding: "4.4px 15.4px", borderRadius: 8 }}>
              <span style={{ fontSize: 13.2, color: "#2563eb", fontFamily: "'DM Mono',monospace" }}>CGPA: {personal.cgpa}</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 2, background: "#e8eaed" }} />
          {timeline.map((item, i) => {
            const { color, bg } = typeColors[item.type] || typeColors.edu;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{ display: "flex", gap: 22, marginBottom: i === timeline.length - 1 ? 0 : 28, position: "relative" }}>
                <div style={{ width: 41.8, height: 41.8, borderRadius: "50%", background: bg, border: `2px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative", zIndex: 1 }}>
                  <div style={{ width: 9.9, height: 9.9, borderRadius: "50%", background: color }} />
                </div>
                <div style={{ flex: 1, background: "#fff", border: "1px solid #e8eaed", borderRadius: 13.2, padding: "17.6px 22px", marginTop: 4.4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8.8, marginBottom: 6.6, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12.1, color, background: bg, padding: "2.2px 8.8px", borderRadius: 5 }}>{item.year}</span>
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#9ca3af" }}>{typeLabels[item.type]}</span>
                  </div>
                  <h4 style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: 16.0, color: "#0f1117", marginBottom: 5.5 }}>{item.title}</h4>
                  <p style={{ fontSize: 14.3, color: "#718096", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
