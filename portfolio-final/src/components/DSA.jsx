import { useState } from "react";
import { motion } from "framer-motion";
import { dsaAlgorithms, dsaStats } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import leetcodeIcon from "../assets/leetcode.png";
import gfgIcon from "../assets/gfg.png";

function CodeBlock({ code }) {
  const lines = code.split("\n");
  const tokenize = (line) => {
    if (line.trim().startsWith("//")) return <span style={{ color: "#6a9955" }}>{line}</span>;
    return <span dangerouslySetInnerHTML={{ __html: line
      .replace(/(&|<|>)/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]))
      .replace(/\/\/.*/g, m => `<span style="color:#6a9955">${m}</span>`)
      .replace(/\b(int|void|boolean|return|while|for|if|else|true|false|new)\b/g, m => `<span style="color:#569cd6">${m}</span>`)
      .replace(/\b(List|Queue|LinkedList|Integer|Math|String)\b/g, m => `<span style="color:#4ec9b0">${m}</span>`)
      .replace(/\b(\d+)\b/g, m => `<span style="color:#b5cea8">${m}</span>`)
    }} />;
  };
  return (
    <div style={{ background: "#1e1e2e", borderRadius: "0 0 12px 12px", padding: "17.6px 0", overflowX: "auto" }}>
      <pre style={{ fontFamily: "'DM Mono',monospace", fontSize: 13.2, lineHeight: 1.7, color: "#cdd6f4", margin: 0, padding: "0 17.6px" }}>
        {lines.map((line, i) => (
          <div key={i} style={{ display: "flex", gap: 13.2 }}>
            <span style={{ color: "#45475a", userSelect: "none", minWidth: 18, textAlign: "right", fontSize: 11 }}>{i + 1}</span>
            {tokenize(line)}
          </div>
        ))}
      </pre>
    </div>
  );
}

export default function DSA() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="dsa" style={{ padding: "96.8px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 22px" }}>
        <SectionHeader label="Problem Solving" title="Algorithmic Thinking"
          subtitle="Strong DSA foundation built through consistent competitive programming and real-world problem solving." />

        <div className="dsa-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 39.6, alignItems: "start" }}>
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, marginBottom: 26.4 }}>
              {dsaStats.map(({ value, label }) => (
                <div key={label} style={{ padding: "17.6px 19.8px", borderRadius: 13.2, border: "1px solid #e8eaed", background: "#fafafa" }}>
                  <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 800, fontSize: 19.8, color: "#2563eb", marginBottom: 3.3 }}>{value}</p>
                  <p style={{ fontSize: 13.2, color: "#718096", fontFamily: "'DM Mono',monospace" }}>{label}</p>
                </div>
              ))}
            </motion.div>

            {[
              { name: "Arrays & Strings", problems: "180+", tag: "Foundation", color: "#2563eb", bg: "#eff6ff" },
              { name: "Trees & Graphs", problems: "150+", tag: "Core DSA", color: "#7c3aed", bg: "#f5f3ff" },
              { name: "Dynamic Programming", problems: "60+", tag: "Advanced", color: "#0369a1", bg: "#f0f9ff" },
              { name: "Backtracking", problems: "160+", tag: "Algorithms", color: "#15803d", bg: "#f0fdf4" },
              { name: "Stacks & Queues", problems: "70+", tag: "Data Structures", color: "#b45309", bg: "#fffbeb" },
            ].map((topic, i) => (
              <motion.div key={topic.name}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13.2px 17.6px", borderRadius: 10, border: "1px solid #e8eaed", background: "#fff", marginBottom: 8.8, cursor: "default" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                  <div style={{ width: 8.8, height: 8.8, borderRadius: "50%", background: topic.color }} />
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 14.9, color: "#0f1117", fontFamily: "'Manrope',sans-serif" }}>{topic.name}</p>
                    <p style={{ fontSize: 12.1, color: "#718096" }}>{topic.tag}</p>
                  </div>
                </div>
                <span style={{ padding: "3.3px 11px", borderRadius: 6, background: topic.bg, color: topic.color, fontSize: 13.2, fontWeight: 600, fontFamily: "'DM Mono',monospace" }}>{topic.problems}</span>
              </motion.div>
            ))}
          </div>

          {/* Right: Editor */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}>
            <div className="dsa-code" style={{ borderRadius: 13.2, border: "1px solid #2d2d3d", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
              <div style={{ background: "#181825", padding: "11px 15.4px", display: "flex", alignItems: "center", gap: 11 }}>
                <div style={{ display: "flex", gap: 6.6 }}>
                  {["#f38ba8","#fab387","#a6e3a1"].map(c => <div key={c} style={{ width: 12.1, height: 12.1, borderRadius: "50%", background: c }} />)}
                </div>
                <span style={{ fontSize: 13.2, color: "#6c7086", fontFamily: "'DM Mono',monospace", flex: 1, textAlign: "center" }}>Solution.java</span>
              </div>

              <div style={{ background: "#1e1e2e", borderBottom: "1px solid #2d2d3d", display: "flex", overflowX: "auto" }}>
                {dsaAlgorithms.map((algo, i) => (
                  <button key={algo.name} onClick={() => setActiveTab(i)}
                    style={{ padding: "7.7px 13.2px", background: activeTab === i ? "#1e1e2e" : "#181825", border: "none", borderBottom: activeTab === i ? `2px solid ${algo.color}` : "2px solid transparent", borderRight: "1px solid #2d2d3d", color: activeTab === i ? "#cdd6f4" : "#6c7086", cursor: "pointer", fontSize: 12.1, fontFamily: "'DM Mono',monospace", transition: "all 0.15s", whiteSpace: "nowrap" }}>
                    {algo.name}
                  </button>
                ))}
              </div>

              <div style={{ background: "#1e1e2e", padding: "8.8px 17.6px", borderBottom: "1px solid #2d2d3d", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12.1, color: "#6c7086", fontFamily: "'DM Mono',monospace" }}>Java</span>
                <span style={{ fontSize: 12.1, padding: "2.2px 8.8px", borderRadius: 4, background: `${dsaAlgorithms[activeTab].color}22`, color: dsaAlgorithms[activeTab].color, fontFamily: "'DM Mono',monospace" }}>{dsaAlgorithms[activeTab].tag}</span>
              </div>
              <CodeBlock code={dsaAlgorithms[activeTab].code} />
            </div>

            <div style={{ marginTop: 17.6, padding: "15.4px 19.8px", borderRadius: 13.2, background: "#fafafa", border: "1px solid #e8eaed", display: "flex", alignItems: "center", gap: 13.2 }}>
              <img src={leetcodeIcon} alt="LeetCode" style={{ width: 24.2, height: 24.2, objectFit: "contain", flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 600, fontSize: 14.9, color: "#0f1117", fontFamily: "'Manrope',sans-serif" }}>500+ Problems · LeetCode</p>
                <p style={{ fontSize: 13.2, color: "#718096" }}>Maintained a 330+ day LeetCode streak with consistent problem-solving.</p>
              </div>
            </div>
            <div style={{ marginTop: 13.2, padding: "15.4px 19.8px", borderRadius: 13.2, background: "#fafafa", border: "1px solid #e8eaed", display: "flex", alignItems: "center", gap: 13.2 }}>
              <img src={gfgIcon} alt="GeeksforGeeks" style={{ width: 24.2, height: 24.2, objectFit: "contain", flexShrink: 0 }} />
              <div>
                <p style={{ fontWeight: 600, fontSize: 14.9, color: "#0f1117", fontFamily: "'Manrope',sans-serif" }}>150+ Problems · GeeksforGeeks</p>
                <p style={{ fontSize: 13.2, color: "#718096" }}>Strong DSA practice across arrays, trees, graphs, and dynamic programming.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .dsa-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 639px) {
          .dsa-code pre { font-size: 11px !important; }
        }
      `}</style>
    </section>
  );
}
