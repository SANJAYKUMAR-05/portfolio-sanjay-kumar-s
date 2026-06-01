import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import SectionHeader from "./SectionHeader";
import neoGroup from "../assets/gallery/neocodeGroup.jpg";
import citGroup from "../assets/gallery/citgroup.jpg";
import kpr from "../assets/gallery/kprprice.jpg";
import neoprice from "../assets/gallery/neoprice.jpg";
import iamcert from "../assets/gallery/iamcert.jpg";
import citpaper from "../assets/gallery/citpaper.jpg";
import mtrmhack from "../assets/gallery/mtrmhack.jpg";
import Leetcode from "../assets/gallery/Leetcode.png";
import bootcamp from "../assets/gallery/bootcamp.jpg";
import teammeet from "../assets/gallery/teammeet.jpg";
import aaryaa1 from "../assets/gallery/aaryaa1.jpg";
import Azure from "../assets/gallery/Azure.png";

const galleryItems = [
 { image: neoGroup, title: "Neocodeathon", tag: "Achievement", tagColor: "#0369a1", tagBg: "#f0f9ff" },
  { image: citGroup, title: "Paper Presentation", tag: "Experience", tagColor: "#15803d", tagBg: "#f0fdf4" },  
  { image: kpr, title: "KPR Paper Presentation", tag: "Achievement", tagColor: "#15803d", tagBg: "#f0fdf4" },
  { image: neoprice, title: "Neocodeathon Reward", tag: "Achievement", tagColor: "#15803d", tagBg: "#f0fdf4" },
  { image: Leetcode, title: "Leetcode Profile", tag: "Achievement", tagColor: "#7c3aed", tagBg: "#f5f3ff" },
  { image: aaryaa1, title: "AaryaaNetwork Work", tag: "Experience", tagColor: "#7c3aed", tagBg: "#f5f3ff" },
  { image: teammeet, title: "Team Meeting", tag: "Experience", tagColor: "#15803d", tagBg: "#f0fdf4" },
  { image: iamcert, title: "IAM Certification", tag: "Certification", tagColor: "#0369a1", tagBg: "#f0f9ff" },
  { image: Azure, title: "Azure Certification", tag: "Certification", tagColor: "#0369a1", tagBg: "#f0f9ff" },
  { image: citpaper, title: "CIT Paper Presentation", tag: "Experience", tagColor: "#15803d", tagBg: "#f0fdf4" },
  { image: mtrmhack, title: "Maatram Hackathon", tag: "Experience", tagColor: "#15803d", tagBg: "#f0fdf4" },
  { image: bootcamp, title: "Maatram Bootcamp", tag: "Experience", tagColor: "#7c3aed", tagBg: "#f5f3ff" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const sliderRef = useRef(null);

  const scroll = dir => sliderRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  const closeLightbox = () => setLightbox(null);
  const prevLight = () => setLightbox(i => (i - 1 + galleryItems.length) % galleryItems.length);
  const nextLight = () => setLightbox(i => (i + 1) % galleryItems.length);

  return (
    <section id="gallery" style={{ padding: "96.8px 0", background: "#fafafa" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 22px" }}>
        <SectionHeader label="My Journey" title="Moments & Milestones"
          subtitle="Certifications, achievements, and memories captured along the way." />

        <div style={{ position: "relative" }}>
          {/* Arrows — hidden on very small screens */}
          <button onClick={() => scroll(-1)} className="gallery-arrow gallery-arrow-left"
            style={{ position:"absolute",left:-16,top:"45%",transform:"translateY(-50%)",zIndex:10,width: 41.8,height: 41.8,borderRadius:"50%",background:"#fff",border:"1px solid #e8eaed",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer" }}
            onMouseEnter={e=>e.currentTarget.style.background="#2563eb"}
            onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
            <ChevronLeft size={18.7} color="#4a5568" />
          </button>

          {/* Scrollable track */}
          <div ref={sliderRef} style={{ display:"flex",gap: 17.6,overflowX:"auto",scrollbarWidth:"none",msOverflowStyle:"none",paddingBottom: 4.4,scrollSnapType:"x mandatory" }}>
            <style>{`div::-webkit-scrollbar{display:none}`}</style>
            {galleryItems.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setLightbox(i)}
                style={{ flexShrink:0,width: 286,borderRadius: 15.4,overflow:"hidden",cursor:"pointer",border:"1px solid #e8eaed",background:"#fff",scrollSnapAlign:"start",boxShadow:"0 2px 12px rgba(0,0,0,0.04)" }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}
              >
                <div style={{ position:"relative",height: 187.0,background:item.tagBg,overflow:"hidden" }}>
                  <img src={item.image} alt={item.title}
                    style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",display:"block" }}
                    onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="flex";}} />
                  <div style={{ display:"none",position:"absolute",inset:0,alignItems:"center",justifyContent:"center",background:item.tagBg,flexDirection:"column",gap: 8.8 }}>
                    <span style={{ fontSize: 35.2 }}>🖼️</span>
                    <span style={{ fontSize: 12.1,color:item.tagColor,fontFamily:"'DM Mono',monospace" }}>Add image</span>
                  </div>
                  <div style={{ position:"absolute",inset:0,background:"rgba(0,0,0,0.35)",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,transition:"opacity 0.2s" }}
                    onMouseEnter={e=>e.currentTarget.style.opacity=1}
                    onMouseLeave={e=>e.currentTarget.style.opacity=0}>
                    <ZoomIn size={28.6} color="#fff" />
                  </div>
                </div>
                <div style={{ padding: "13.2px 15.4px" }}>
                  <span style={{ fontSize: 11,fontFamily:"'DM Mono',monospace",color:item.tagColor,background:item.tagBg,padding: "2.2px 7.7px",borderRadius:4,fontWeight:500 }}>{item.tag}</span>
                  <p style={{ marginTop: 7.7,fontSize: 14.3,fontWeight:600,color:"#0f1117",fontFamily:"'Manrope',sans-serif",lineHeight:1.4 }}>{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button onClick={() => scroll(1)} className="gallery-arrow gallery-arrow-right"
            style={{ position:"absolute",right:-16,top:"45%",transform:"translateY(-50%)",zIndex:10,width: 41.8,height: 41.8,borderRadius:"50%",background:"#fff",border:"1px solid #e8eaed",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer" }}
            onMouseEnter={e=>e.currentTarget.style.background="#2563eb"}
            onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
            <ChevronRight size={18.7} color="#4a5568" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
          onClick={closeLightbox}
          style={{ position:"fixed",inset:0,zIndex:999,background:"rgba(0,0,0,0.88)",display:"flex",alignItems:"center",justifyContent:"center",padding:16 }}>
          <button onClick={closeLightbox} style={{ position:"absolute",top:16,right:16,background:"rgba(255,255,255,0.1)",border:"none",borderRadius:"50%",width: 41.8,height: 41.8,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff" }}>
            <X size={19.8} />
          </button>
          <button onClick={e=>{e.stopPropagation();prevLight();}} style={{ position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:"50%",width: 46.2,height: 46.2,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff" }}>
            <ChevronLeft size={22} />
          </button>
          <motion.div key={lightbox} initial={{scale:0.93,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.2}}
            onClick={e=>e.stopPropagation()} style={{ maxWidth: 880.0,width:"100%",borderRadius: 15.4,overflow:"hidden" }}>
            <img src={galleryItems[lightbox].image} alt={galleryItems[lightbox].title}
              style={{ width:"100%",maxHeight:"72vh",objectFit:"contain",display:"block",background:"#1a1a2e" }} />
            <div style={{ background:"#fff",padding: "15.4px 19.8px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap: 8.8 }}>
              <div>
                <span style={{ fontSize: 11,fontFamily:"'DM Mono',monospace",color:galleryItems[lightbox].tagColor,background:galleryItems[lightbox].tagBg,padding: "2.2px 7.7px",borderRadius:4 }}>{galleryItems[lightbox].tag}</span>
                <p style={{ marginTop: 5.5,fontSize: 15.4,fontWeight:600,fontFamily:"'Manrope',sans-serif",color:"#0f1117" }}>{galleryItems[lightbox].title}</p>
              </div>
              <span style={{ fontSize: 13.2,color:"#9ca3af",fontFamily:"'DM Mono',monospace" }}>{lightbox+1} / {galleryItems.length}</span>
            </div>
          </motion.div>
          <button onClick={e=>{e.stopPropagation();nextLight();}} style={{ position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:"50%",width: 46.2,height: 46.2,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff" }}>
            <ChevronRight size={22} />
          </button>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 480px) {
          .gallery-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
