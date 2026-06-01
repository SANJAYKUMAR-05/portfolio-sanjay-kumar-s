import { motion } from "framer-motion";
import { Trophy, Code2, Cloud, Shield, Award, Lightbulb, Users } from "lucide-react";
import { achievements } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const iconMap = { code: Code2, azure: Cloud, google: Shield, cisco: Shield, trophy: Trophy, patent: Lightbulb, teach: Users };
const colors = [
  { color: "#2563eb", bg: "#eff6ff" }, { color: "#0369a1", bg: "#f0f9ff" },
  { color: "#15803d", bg: "#f0fdf4" }, { color: "#0369a1", bg: "#f0f9ff" },
  { color: "#b45309", bg: "#fffbeb" }, { color: "#7c3aed", bg: "#f5f3ff" },
  { color: "#be185d", bg: "#fdf2f8" },
];

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: "96.8px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 22px" }}>
        <SectionHeader label="Recognition" title="Achievements & Certifications"
          subtitle="A record of technical accomplishments, certifications, and competitive milestones." />

        <div className="achieve-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 15.4 }}>
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            const { color, bg } = colors[i % colors.length];
            return (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(0,0,0,0.07)" }}
                style={{ padding: "22px", borderRadius: 17.6, border: "1px solid #e8eaed", background: "#fff", cursor: "default", display: "flex", flexDirection: "column", gap: 13.2 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={19.8} color={color} />
                  </div>
                  <span style={{ padding: "2.2px 8.8px", borderRadius: 22, background: bg, color, fontSize: 11, fontWeight: 600, fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em", textAlign: "right" }}>{item.tag}</span>
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: 15.4, color: "#0f1117", marginBottom: 5.5 }}>{item.title}</h4>
                  <p style={{ fontSize: 13.8, color: "#718096", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .achieve-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px)  { .achieve-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  { .achieve-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
