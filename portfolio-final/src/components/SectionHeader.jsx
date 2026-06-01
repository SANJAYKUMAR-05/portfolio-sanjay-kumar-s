import { motion } from "framer-motion";

export default function SectionHeader({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ marginBottom: 61.6, textAlign: "center" }}
    >
      {label && (
        <p className="section-label" style={{ marginBottom: 13.2 }}>{label}</p>
      )}
      <h2 style={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
        fontWeight: 800,
        color: "#0f1117",
        letterSpacing: "-0.02em",
        marginBottom: subtitle ? 15.4 : 0,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: "1rem",
          color: "#718096",
          maxWidth: 572,
          margin: "0 auto",
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
