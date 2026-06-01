import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const navLinks = [
  { href: "home", label: "Home" }, { href: "about", label: "About" },
  { href: "skills", label: "Skills" }, { href: "dsa", label: "DSA" },
  { href: "projects", label: "Projects" }, { href: "achievements", label: "Achievements" },
  { href: "education", label: "Education" }, { href: "gallery", label: "Gallery" },
  { href: "contact", label: "Contact" },
];

const sections = navLinks.map(l => l.href);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(sections);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(250,250,250,0.93)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #e8eaed" : "1px solid transparent",
          transition: "all 0.3s ease" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 22px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 66 }}>
          <button onClick={() => scrollTo("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 9.9 }}>
            <div style={{ width: 33, height: 33, borderRadius: 8, background: "linear-gradient(135deg,#2563eb,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 14.3 }}>S</div>
            <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: 15.4, color: "#0f1117" }}>Sanjay Kumar</span>
          </button>

          {/* Desktop */}
          <div className="desktop-nav" style={{ display: "flex", gap: 2, alignItems: "center" }}>
            {navLinks.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)}
                style={{ background: active === link.href ? "#eff6ff" : "none", border: "none", cursor: "pointer", padding: "5.5px 13.2px", borderRadius: 7, fontSize: 14.9, fontWeight: active === link.href ? 600 : 400, color: active === link.href ? "#2563eb" : "#4a5568", transition: "all 0.15s ease", fontFamily: "'DM Sans',sans-serif" }}
                onMouseEnter={e => { if (active !== link.href) { e.target.style.color = "#0f1117"; e.target.style.background = "#f4f5f7"; } }}
                onMouseLeave={e => { e.target.style.color = active === link.href ? "#2563eb" : "#4a5568"; e.target.style.background = active === link.href ? "#eff6ff" : "none"; }}>
                {link.label}
              </button>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 6 }}>
            {mobileOpen ? <X size={22} color="#0f1117" /> : <Menu size={22} color="#0f1117" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            style={{ position: "fixed", top: 66, left: 0, right: 0, zIndex: 99, background: "#fff", borderBottom: "1px solid #e8eaed", padding: "11px 22px 17.6px", display: "flex", flexDirection: "column", gap: 3.3 }}>
            {navLinks.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)}
                style={{ background: active === link.href ? "#eff6ff" : "none", border: "none", cursor: "pointer", padding: "11px 13.2px", borderRadius: 8, fontSize: 16.5, fontWeight: active === link.href ? 600 : 400, color: active === link.href ? "#2563eb" : "#4a5568", textAlign: "left", fontFamily: "'DM Sans',sans-serif" }}>
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
