import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, GitBranch } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

function ProjectMockup({ project }) {
  return (
    <div style={{ borderRadius: 13.2, overflow: "hidden", background: project.accent, height: "100%", minHeight: 260 }}>
      <img src={project.image} alt={project.title}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
        onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
      <div style={{ display: "none", width: "100%", height: "100%", minHeight: 260, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 11, background: project.accent }}>
        <span style={{ fontSize: 39.6 }}>🖥️</span>
        <span style={{ fontSize: 13.2, color: project.color, fontFamily: "'DM Mono',monospace" }}>Add screenshot</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => { setDirection(-1); setCurrent(c => (c - 1 + projects.length) % projects.length); };
  const next = () => { setDirection(1); setCurrent(c => (c + 1) % projects.length); };
  const goTo = (i) => { setDirection(i > current ? 1 : -1); setCurrent(i); };

  const project = projects[current];

  const variants = {
    enter: dir => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit: dir => ({ opacity: 0, x: dir > 0 ? -50 : 50 }),
  };

  return (
    <section id="projects" style={{ padding: "96.8px 0", background: "#fafafa" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 22px" }}>
        <SectionHeader label="Featured Projects" title="Things I've Built"
          subtitle="Production-grade applications with real architecture decisions and engineering depth." />

        {/* Slider wrapper — extra horizontal padding for arrow buttons */}
        <div className="projects-slider-wrap" style={{ position: "relative", padding: "0 30.8px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={project.id} custom={direction} variants={variants}
              initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>

              <div className="project-card-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", borderRadius: 22, overflow: "hidden", border: "1px solid #e8eaed", background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>

                {/* Image side */}
                <div style={{ background: project.accent, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, overflow: "hidden" }}>
                  <div style={{ width: "100%", borderRadius: 13.2, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.15)" }}>
                    <ProjectMockup project={project} />
                    <div style={{ background: "#fff", padding: "7.7px 13.2px", borderTop: "1px solid #e8eaed", display: "flex", gap: 8.8, alignItems: "center" }}>
                      <div style={{ width: 7.7, height: 7.7, borderRadius: "50%", background: "#22c55e" }} />
                      <span style={{ fontSize: 12.1, color: "#9ca3af", fontFamily: "'DM Mono',monospace" }}>Live · {project.type}</span>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="project-content" style={{ padding: "39.6px 35.2px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ marginBottom: 13.2 }}>
                    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12.1,
                      color: project.type === "Freelance Project" ? "#92400e" : project.color,
                      background: project.type === "Freelance Project" ? "#fef3c7" : project.accent,
                      border: project.type === "Freelance Project" ? "1px solid #fcd34d" : "none",
                      padding: "4.4px 13.2px", borderRadius: 5, fontWeight: 600 }}>
                      {project.type === "Freelance Project" ? "✦ Freelance Project" : project.type}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: "clamp(20px,2.5vw,26px)", color: "#0f1117", letterSpacing: "-0.02em", marginBottom: 6.6 }}>{project.title}</h3>
                  <p style={{ fontSize: 15.4, color: "#718096", marginBottom: 15.4, fontWeight: 500 }}>{project.subtitle}</p>
                  <p style={{ fontSize: 14.9, color: "#4a5568", lineHeight: 1.75, marginBottom: 22 }}>{project.description}</p>

                  <div style={{ marginBottom: 19.8 }}>
                    <p style={{ fontSize: 11, color: "#9ca3af", fontFamily: "'DM Mono',monospace", letterSpacing: "0.08em", marginBottom: 8.8, textTransform: "uppercase" }}>Key Features</p>
                    <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6.6 }}>
                      {project.features.map(f => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: 6.6 }}>
                          <div style={{ width: 5.5, height: 5.5, borderRadius: "50%", background: project.color, flexShrink: 0 }} />
                          <span style={{ fontSize: 13.8, color: "#4a5568" }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6.6, marginBottom: 24.2 }}>
                    {project.tech.map(t => (
                      <span key={t} style={{ padding: "3.3px 11px", borderRadius: 6, background: "#f4f5f7", border: "1px solid #e8eaed", fontSize: 13.2, color: "#374151", fontFamily: "'DM Mono',monospace" }}>{t}</span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 11, flexWrap: "wrap" }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 7.7, padding: "11px 19.8px", borderRadius: 8, textDecoration: "none", background: "#0f1117", color: "#fff", fontSize: 14.3, fontWeight: 600, fontFamily: "'Manrope',sans-serif", transition: "background 0.15s" }}
                        onMouseEnter={e => e.currentTarget.style.background = "#1f2937"}
                        onMouseLeave={e => e.currentTarget.style.background = "#0f1117"}
                      ><GitBranch size={15.4} /> GitHub</a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 7.7, padding: "11px 19.8px", borderRadius: 8, textDecoration: "none", border: "1.5px solid #e8eaed", color: "#4a5568", fontSize: 14.3, fontWeight: 600, fontFamily: "'Manrope',sans-serif", transition: "all 0.15s" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = project.color; e.currentTarget.style.color = project.color; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eaed"; e.currentTarget.style.color = "#4a5568"; }}
                      ><ExternalLink size={15.4} /> Live Demo</a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          {[{fn:prev,side:"left",Icon:ChevronLeft},{fn:next,side:"right",Icon:ChevronRight}].map(({fn,side,Icon})=>(
            <button key={side} onClick={fn}
              className={`proj-arrow-${side}`} style={{ position:"absolute",[side]:0,top:"50%",transform:"translateY(-50%)",zIndex:10,width: 44,height: 44,borderRadius:"50%",background:"#fff",border:"1px solid #e8eaed",boxShadow:"0 4px 14px rgba(0,0,0,0.1)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.15s" }}
              onMouseEnter={e=>{e.currentTarget.style.background="#2563eb";e.currentTarget.style.borderColor="#2563eb";}}
              onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.borderColor="#e8eaed";}}
            ><Icon size={19.8} color="#4a5568" /></button>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 17.6, marginTop: 30.8 }}>
          <span style={{ fontSize: 13.2, color: "#9ca3af", fontFamily: "'DM Mono',monospace" }}>
            {String(current+1).padStart(2,"0")} / {String(projects.length).padStart(2,"0")}
          </span>
          <div style={{ display: "flex", gap: 8.8 }}>
            {projects.map((_,i) => (
              <button key={i} onClick={()=>goTo(i)}
                style={{ width:i===current?24:8,height: 8.8,borderRadius:4,background:i===current?"#2563eb":"#e2e8f0",border:"none",cursor:"pointer",transition:"all 0.25s ease",padding:0 }} />
            ))}
          </div>
          <span style={{ fontSize: 13.2, color: "#9ca3af", fontFamily: "'DM Mono',monospace" }}>{project.title}</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .project-card-inner { grid-template-columns: 1fr !important; }
          .project-content { padding: 24px 20px !important; }
          .features-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 479px) {
          .projects-slider-wrap { padding: 0 !important; }
          .proj-arrow-left { left: 4px !important; }
          .proj-arrow-right { right: 4px !important; }
        }
      `}</style>
    </section>
  );
}
