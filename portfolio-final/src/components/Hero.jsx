import { motion } from "framer-motion";
import { ArrowDown, GitBranch, Link2, FileText } from "lucide-react";
import { personal } from "../data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      paddingTop: 88, paddingBottom: 44,
      background: "linear-gradient(160deg, #fafafa 0%, #f0f4ff 60%, #fafafa 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position:"absolute",inset:0,opacity:0.4,backgroundImage:"radial-gradient(circle,#d1d5db 1px,transparent 1px)",backgroundSize:"32px 32px",pointerEvents:"none" }} />
      <div style={{ position:"absolute",top:"10%",right:"5%",width: 462.0,height: 462.0,background:"radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%)",borderRadius:"50%",pointerEvents:"none" }} />
      <div style={{ position:"absolute",bottom:"15%",left:"0%",width: 352,height: 352,background:"radial-gradient(circle,rgba(124,58,237,0.05) 0%,transparent 70%)",borderRadius:"50%",pointerEvents:"none" }} />

      <div style={{ maxWidth: 1320,margin:"0 auto",padding: "0 22px",width:"100%",position:"relative" }}>
        <div className="hero-grid" style={{ display:"grid",gridTemplateColumns:"1fr 462px",gap: 70.4,alignItems:"center" }}>

          {/* Left */}
          <div>
            <motion.div {...fadeUp(0.1)} style={{ marginBottom: 22 }}>
              <span style={{ display:"inline-flex",alignItems:"center",gap: 8.8,background:"#eff6ff",border:"1px solid #bfdbfe",padding: "6.6px 15.4px",borderRadius: 110.0,fontFamily:"",fontSize: 13.2,color:"#2563eb",letterSpacing:"0.05em" }}>
                <span style={{ width: 7.7,height: 7.7,borderRadius:"50%",background:"#22c55e",display:"inline-block" }} />
                Available for opportunities · 2027 Grad
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} style={{ fontFamily:"'Manrope',sans-serif",fontSize:"clamp(2rem,5vw,3.6rem)",fontWeight:800,lineHeight:1.12,color:"#0f1117",marginBottom: 17.6,letterSpacing:"-0.02em" }}>
              {personal.name.split(" ").slice(0,2).join(" ")}
              <br />
              <span className="gradient-text">{personal.name.split(" ").slice(2).join(" ")}</span>
            </motion.h1>

            <motion.p {...fadeUp(0.3)} style={{ fontSize:"clamp(1rem,2vw,1.1rem)",color:"#4a5568",fontWeight:500,marginBottom: 11,fontFamily:"'Manrope',sans-serif" }}>
              {personal.role}
            </motion.p>

            <motion.p {...fadeUp(0.35)} style={{ fontSize:"0.95rem",color:"#718096",marginBottom: 30.8,maxWidth: 572,lineHeight:1.7 }}>
              {personal.bio}
            </motion.p>

            <motion.div {...fadeUp(0.4)} style={{ display:"flex",flexWrap:"wrap",gap: 8.8,marginBottom: 30.8 }}>
              {["Java","Spring Boot","React.js","DSA","JWT","MySQL"].map(t => (
                <span key={t} style={{ padding: "4.4px 13.2px",borderRadius:6,background:"#f4f5f7",border:"1px solid #e8eaed",fontSize: 14.3,color:"#4a5568",fontWeight:500,fontFamily:"'DM Mono',monospace" }}>{t}</span>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.45)} style={{ display:"flex",flexWrap:"wrap",gap: 11,marginBottom: 39.6 }}>
              <button onClick={() => scrollTo("projects")} style={{ background:"linear-gradient(135deg,#2563eb,#3b82f6)",color:"#fff",border:"none",cursor:"pointer",padding: "13.2px 26.4px",borderRadius:10,fontFamily:"'Manrope',sans-serif",fontWeight:600,fontSize: 15.4,boxShadow:"0 4px 14px rgba(37,99,235,0.25)",transition:"all 0.2s ease" }}
                onMouseEnter={e=>e.currentTarget.style.transform="translateY(-1px)"}
                onMouseLeave={e=>e.currentTarget.style.transform="none"}
              >View Projects</button>
              <a href="/resume.pdf" download style={{ display:"inline-flex",alignItems:"center",gap: 7.7,background:"#fff",color:"#0f1117",border:"1.5px solid #e8eaed",cursor:"pointer",padding: "12.1px 24.2px",borderRadius:10,fontFamily:"'Manrope',sans-serif",fontWeight:600,fontSize: 15.4,textDecoration:"none",transition:"all 0.2s ease" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#2563eb";e.currentTarget.style.color="#2563eb";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#e8eaed";e.currentTarget.style.color="#0f1117";}}
              ><FileText size={16.5} /> Resume</a>
              <button onClick={() => scrollTo("contact")} style={{ background:"none",color:"#4a5568",border:"1.5px solid #e8eaed",cursor:"pointer",padding: "12.1px 24.2px",borderRadius:10,fontFamily:"'Manrope',sans-serif",fontWeight:600,fontSize: 15.4,transition:"all 0.2s ease" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#4a5568";e.currentTarget.style.color="#0f1117";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#e8eaed";e.currentTarget.style.color="#4a5568";}}
              >Contact Me</button>
            </motion.div>

            <motion.div {...fadeUp(0.5)} style={{ display:"flex",gap: 17.6,alignItems:"center",flexWrap:"wrap" }}>
              <span style={{ fontSize: 14.3,color:"#9ca3af",fontFamily:"'DM Mono',monospace" }}>Find me on</span>
              {[{href:personal.github,Icon:GitBranch,label:"GitHub"},{href:personal.linkedin,Icon:Link2,label:"LinkedIn"}].map(({href,Icon,label})=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ display:"flex",alignItems:"center",gap: 6.6,color:"#4a5568",textDecoration:"none",fontSize: 14.3,fontWeight:500,transition:"color 0.15s" }}
                  onMouseEnter={e=>e.currentTarget.style.color="#2563eb"}
                  onMouseLeave={e=>e.currentTarget.style.color="#4a5568"}
                ><Icon size={17.6} /> {label}</a>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:0.7,delay:0.3,ease:[0.22,1,0.36,1]}}
            style={{ display:"flex",flexDirection:"column",alignItems:"center",gap: 26.4 }}
          >
            <div style={{ position:"relative" }}>
              <div className="hero-profile-img" style={{ width: 286,height: 330,borderRadius: 26.4,background:"linear-gradient(135deg,#dbeafe 0%,#e9d5ff 100%)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",boxShadow:"0 20px 60px rgba(0,0,0,0.1),0 0 0 1px rgba(255,255,255,0.8)",overflow:"hidden" }}>
                <img src="/profile.jpg" alt="Sanjay Kumar S" style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"top" }}
                  onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="flex";}} />
                <div style={{ display:"none",width:"100%",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",gap: 13.2 }}>
                  <div style={{ width: 99.0,height: 99.0,borderRadius:"50%",background:"linear-gradient(135deg,#2563eb,#7c3aed)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize: 39.6,fontWeight:800,fontFamily:"'Manrope',sans-serif" }}>SK</div>
                </div>
              </div>
              <div className="hero-stat-badge" style={{ position:"absolute",bottom:-14,right:-14,background:"#fff",border:"1px solid #e8eaed",borderRadius: 13.2,padding: "11px 17.6px",boxShadow:"0 4px 20px rgba(0,0,0,0.08)" }}>
                <p style={{ fontSize: 12.1,color:"#718096",fontFamily:"'DM Mono',monospace",letterSpacing:"0.05em" }}>CGPA</p>
                <p style={{ fontSize: 24.2,fontWeight:800,fontFamily:"'Manrope',sans-serif",color:"#0f1117" }}>8.34</p>
              </div>
              <div className="hero-stat-badge-tl" style={{ position:"absolute",top:-14,left:-14,background:"#fff",border:"1px solid #e8eaed",borderRadius: 13.2,padding: "11px 17.6px",boxShadow:"0 4px 20px rgba(0,0,0,0.08)" }}>
                <p style={{ fontSize: 12.1,color:"#718096",fontFamily:"'DM Mono',monospace" }}>DSA Solved</p>
                <p style={{ fontSize: 24.2,fontWeight:800,fontFamily:"'Manrope',sans-serif",color:"#2563eb" }}>600+</p>
              </div>
            </div>
            <div style={{ textAlign:"center" }}>
              <p style={{ fontSize: 14.3,color:"#718096",fontFamily:"'DM Sans',sans-serif" }}>{personal.college}</p>
              <p style={{ fontSize: 13.2,color:"#9ca3af",fontFamily:"'DM Mono',monospace" }}>B.E. CSE · {personal.batch}</p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} style={{ display:"flex",justifyContent:"center",marginTop: 52.8 }}>
          <motion.div animate={{y:[0,6,0]}} transition={{duration:2,repeat:Infinity,ease:"easeInOut"}}
            onClick={()=>scrollTo("about")} style={{ cursor:"pointer",color:"#9ca3af",display:"flex",flexDirection:"column",alignItems:"center",gap: 6.6 }}>
            <span style={{ fontSize: 12.1,fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em" }}>SCROLL</span>
            <ArrowDown size={17.6} />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-grid > div:last-child { order: -1; }
        }
        @media (max-width: 480px) {
          .hero-profile-img { width: 210px !important; height: 250px !important; }
          .hero-stat-badge { bottom: -10px !important; right: -10px !important; }
          .hero-stat-badge-tl { top: -10px !important; left: -10px !important; }
        }
        @media (max-width: 375px) {
          .hero-profile-img { width: 180px !important; height: 215px !important; }
        }
      `}</style>
    </section>
  );
}
