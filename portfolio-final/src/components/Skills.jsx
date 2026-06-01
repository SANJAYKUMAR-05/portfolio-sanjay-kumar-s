import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const techIcons = {
  "React JS":"","JavaScript":"","HTML5":"","CSS3":"","Tailwind CSS":"",
  "Java":"","Spring Boot":"","REST APIs":"","Microservices":"",
  "JWT Auth":"","Role-Based Access":"","Cyber Security":"","OAuth2":"",
  "MySQL":"","JPA / Hibernate":"","Query Optimization":"",
  "Git":"","GitHub":"","VS Code":"","Postman":"","IntelliJ IDEA":"",
  "C++":"","Data Structures":"","Algorithms":"","Competitive Programming":"",
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "96.8px 0", background: "#fafafa" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 22px" }}>
        <SectionHeader label="Technical Skills" title="Engineering Stack"
          subtitle="A curated set of technologies I use to build production-grade full stack applications." />

        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 17.6 }}>
          {skills.map(({ category, color, bg, items }, i) => (
            <motion.div key={category}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              style={{ background: "#fff", borderRadius: 17.6, border: "1px solid #e8eaed", padding: "24.2px", cursor: "default" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 19.8 }}>
                <div style={{ width: 8.8, height: 8.8, borderRadius: "50%", background: color, flexShrink: 0 }} />
                <h3 style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: 14.9, color: "#0f1117" }}>{category}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7.7 }}>
                {items.map(skill => (
                  <motion.div key={skill} whileHover={{ scale: 1.03 }}
                    style={{ display: "flex", alignItems: "center", gap: 6.6, padding: "6.6px 13.2px", borderRadius: 8, background: bg, border: `1px solid ${color}22`, cursor: "default" }}>
                    <span style={{ fontSize: 14.3, fontWeight: 500, color: "#374151", fontFamily: "'DM Sans',sans-serif" }}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ textAlign: "center", marginTop: 44 }}>
          <p style={{ fontSize: 14.9, color: "#9ca3af", fontFamily: "'DM Mono',monospace", letterSpacing: "0.03em" }}>
            Continuously learning · Staying current with modern engineering practices
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
