"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: scrolled ? "12px 24px" : "20px 24px",
        background: scrolled ? "rgba(13,17,23,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.3s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
    >
      <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
        <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Zap size={16} color="white" fill="white" />
        </div>
        <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "18px", color: "#f0f4ff" }}>
          DealSense <span style={{ background: "linear-gradient(135deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI</span>
        </span>
      </a>

      <div style={{ display: "flex", gap: "8px" }}>
        {["Features", "How it works", "Pricing"].map((l) => (
          <a key={l} href="#" style={{ padding: "8px 14px", fontSize: "14px", color: "#8892a4", textDecoration: "none" }}>{l}</a>
        ))}
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <a href="#" style={{ fontSize: "14px", color: "#8892a4", textDecoration: "none" }}>Sign in</a>
        <a href="#" style={{ padding: "8px 16px", fontSize: "14px", fontWeight: 500, background: "#3b82f6", color: "white", borderRadius: "8px", textDecoration: "none" }}>Try free</a>
      </div>
    </motion.header>
  );
}