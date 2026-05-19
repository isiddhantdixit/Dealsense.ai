"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, TrendingDown, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

export default function Hero() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "96px 24px 64px" }}>

      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: "24px" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "999px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "14px", color: "#8892a4" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#06b6d4", display: "inline-block" }} />
          Powered by Gemini AI · Compare 50M+ products
        </span>
      </motion.div>

      <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
        style={{ fontFamily: "Syne, sans-serif", textAlign: "center", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em", maxWidth: "900px", marginBottom: "24px", color: "#f0f4ff" }}>
        Find the{" "}
        <span style={{ background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          smartest deal
        </span>
        {" "}in seconds
      </motion.h1>

      <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
        style={{ textAlign: "center", fontSize: "18px", color: "#8892a4", maxWidth: "600px", lineHeight: 1.7, marginBottom: "40px" }}>
        DealSense AI scans thousands of products, compares prices across platforms, and gives you an AI-generated summary.
      </motion.p>

      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" style={{ width: "100%", maxWidth: "640px", marginBottom: "16px" }}>
        <div style={{ position: "relative", display: "flex", alignItems: "center", borderRadius: "16px", background: "rgba(13,17,23,0.8)", border: focused ? "1px solid rgba(59,130,246,0.6)" : "1px solid rgba(255,255,255,0.08)", boxShadow: focused ? "0 0 40px rgba(59,130,246,0.15)" : "none", transition: "all 0.3s" }}>
          <Search size={20} style={{ position: "absolute", left: "20px", color: focused ? "#3b82f6" : "#4a5568" }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Try Sony WH-1000XM5 or MacBook Pro M3"
            style={{ width: "100%", background: "transparent", padding: "20px 160px 20px 56px", color: "#f0f4ff", fontSize: "16px", border: "none", outline: "none" }}
          />
          <button
            disabled={!query.trim()}
            style={{ position: "absolute", right: "12px", padding: "10px 20px", background: "#3b82f6", color: "white", borderRadius: "10px", border: "none", cursor: "pointer", opacity: query.trim() ? 1 : 0.4, fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", gap: "6px" }}>
            <Sparkles size={14} /> Analyze
          </button>
        </div>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "12px", flexWrap: "wrap" }}>
          {["AirPods Pro 2", "iPhone 16", "Samsung 4K TV", "RTX 4070"].map((term) => (
            <button key={term} onClick={() => setQuery(term)}
              style={{ padding: "6px 14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "999px", color: "#8892a4", fontSize: "12px", cursor: "pointer" }}>
              {term}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
        style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "32px" }}>
        {[
          { icon: Sparkles, label: "AI-powered analysis" },
          { icon: TrendingDown, label: "Real-time price drops" },
          { icon: ShieldCheck, label: "Verified deals only" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", color: "#8892a4", fontSize: "14px" }}>
            <Icon size={15} style={{ color: "#06b6d4" }} /> {label}
          </div>
        ))}
      </motion.div>

      <motion.p custom={5} variants={fadeUp} initial="hidden" animate="visible"
        style={{ marginTop: "32px", fontSize: "14px", color: "#4a5568", textAlign: "center" }}>
        Trusted by <span style={{ color: "#8892a4", fontWeight: 500 }}>12,400+</span> shoppers this week
      </motion.p>

    </section>
  );
}