import { motion } from "framer-motion";
import { Code2, Server, Brain, Shield, Users, GraduationCap} from "lucide-react";
import { personal, stats } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const qualities = [
  { Icon: Code2, title: "Full Stack Engineering", desc: "React.js frontend with Spring Boot backend — end-to-end ownership of product development.", color: "#2563eb", bg: "#eff6ff" },
  { Icon: Server, title: "Backend Architecture", desc: "REST APIs, JWT authentication, role-based systems, and scalable service design.", color: "#7c3aed", bg: "#f5f3ff" },
  { Icon: Brain, title: "Algorithmic Thinking", desc: "600+ problems solved. Strong foundation in data structures, graphs, trees, and DP.", color: "#0369a1", bg: "#f0f9ff" },
  { Icon: Users, title: "Leadership & Collaboration", desc: "Led team collaborations during hackathons and academic projects with strong communication and problem-solving skills.", color: "#dc2626", bg: "#fef2f2" },
  { Icon: GraduationCap, title: "Teaching & Mentorship", desc: "Passionate about simplifying complex technical concepts and helping peers learn full-stack development and DSA effectively.", color: "#ca8a04", bg: "#fefce8" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  return (
    <section id="about" style={{ padding: "96.8px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 22px" }}>
        <SectionHeader label="About Me" title="The Engineer Behind the Code" />

        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52.8, alignItems: "start" }}>
          {/* Left */}
          <motion.div {...fadeUp(0)}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 17.6, marginBottom: 30.8, padding: 20, borderRadius: 17.6, background: "#fafafa", border: "1px solid #e8eaed" }}>
              <div style={{ width: 99.0, height: 110.0, borderRadius: 15.4, flexShrink: 0, background: "linear-gradient(135deg, #dbeafe, #e9d5ff)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <img src="/profile.jpg" alt="Sanjay Kumar S" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
                <div style={{ display: "none", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 26.4, color: "#fff", background: "linear-gradient(135deg,#2563eb,#7c3aed)" }}>SK</div>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: 18.7, color: "#0f1117", marginBottom: 4.4 }}>{personal.name}</h3>
                <p style={{ fontSize: 15.4, color: "#2563eb", fontWeight: 500, marginBottom: 6.6 }}>{personal.role}</p>
                <p style={{ fontSize: 14.3, color: "#718096", lineHeight: 1.5 }}>{personal.college}</p>
                <p style={{ fontSize: 13.2, color: "#9ca3af", fontFamily: "'DM Mono',monospace", marginTop: 4.4 }}>CGPA: {personal.cgpa} · {personal.batch}</p>
              </div>
            </div>

            <p style={{ color: "#4a5568", lineHeight: 1.8, marginBottom: 17.6, fontSize: "0.95rem" }}>
              I'm a final-year Computer Science student at Sri Krishna College of Engineering and Technology, specializing in Cyber Security. My engineering journey has been driven by a deep interest in building systems that are both technically sound and practically useful.
            </p>
            <p style={{ color: "#4a5568", lineHeight: 1.8, marginBottom: 30.8, fontSize: "0.95rem" }}>
              On the backend, I architect REST APIs and microservices with Spring Boot, implement JWT-based authentication, and design normalized database schemas. On the frontend, I build clean React applications with a product-minded approach.
            </p>

            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11 }}>
              {stats.map(({ value, label }) => (
                <div key={label} style={{ padding: "15.4px 19.8px", borderRadius: 13.2, background: "#fafafa", border: "1px solid #e8eaed" }}>
                  <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 22, color: "#2563eb", marginBottom: 2 }}>{value}</p>
                  <p style={{ fontSize: 14.3, color: "#718096" }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div {...fadeUp(0.1)} style={{ display: "grid", gridTemplateColumns: "1fr", gap: 13.2 }}>
            {qualities.map(({ Icon, title, desc, color, bg }, i) => (
              <motion.div key={title} {...fadeUp(0.1 + i * 0.07)}
                style={{ padding: "19.8px 22px", borderRadius: 15.4, border: "1px solid #e8eaed", background: "#fff", display: "flex", alignItems: "flex-start", gap: 15.4, cursor: "default" }}
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.07)" }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={20.9} color={color} />
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 600, fontSize: 16.0, color: "#0f1117", marginBottom: 4.4 }}>{title}</h4>
                  <p style={{ fontSize: 14.3, color: "#718096", lineHeight: 1.6 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
