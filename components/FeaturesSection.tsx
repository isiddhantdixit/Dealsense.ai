"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap, Brain, TrendingDown, Bell, ShieldCheck, BarChart3
} from "lucide-react";

// Feature data — icon, title, description, accent color
const features = [
  {
    icon: Brain,
    title: "AI-Powered Summaries",
    desc: "Gemini AI reads thousands of reviews and price histories to give you a smart, plain-English verdict on any product.",
    color: "#8b5cf6",
  },
  {
    icon: TrendingDown,
    title: "Real-Time Price Tracking",
    desc: "We monitor prices across Amazon, Flipkart, eBay and more — 24/7. You always see the lowest available price.",
    color: "#3b82f6",
  },
  {
    icon: Zap,
    title: "Instant Comparison",
    desc: "Search once, compare everywhere. No more opening 10 tabs. DealSense pulls all results into one clean view.",
    color: "#06b6d4",
  },
  {
    icon: Bell,
    title: "Deal Alerts",
    desc: "Set a target price and we'll notify you the moment it drops. Never miss a flash sale or limited-time offer.",
    color: "#f59e0b",
  },
  {
    icon: ShieldCheck,
    title: "Verified Listings Only",
    desc: "We filter out fake products, suspicious sellers, and inflated 'original prices' so you only see genuine deals.",
    color: "#10b981",
  },
  {
    icon: BarChart3,
    title: "Price History Charts",
    desc: "See how a product's price has changed over the last 6 months. Know if today's 'sale' is actually a good deal.",
    color: "#f43f5e",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  // margin:"-100px" means: trigger animation 100px BEFORE the element reaches screen edge
  // this makes it feel smoother

  return (
    <section id="features" ref={ref} style={{ padding: "80px 24px", maxWidth: "1152px", margin: "0 auto" }}>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "60px" }}
      >
        {/* Small label above the heading */}
        <span style={{
          display: "inline-block", marginBottom: "16px",
          padding: "6px 16px", borderRadius: "999px",
          background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)",
          fontSize: "12px", fontWeight: 600, color: "#8b5cf6",
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          Everything you need
        </span>

        <h2 style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700,
          color: "#f0f4ff", lineHeight: 1.15, marginBottom: "16px",
        }}>
          Shopping intelligence,{" "}
          <span style={{
            background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            built in
          </span>
        </h2>

        <p style={{ fontSize: "16px", color: "#8892a4", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Every tool you need to stop overpaying and start buying with confidence.
        </p>
      </motion.div>

      {/* Feature grid — 3 columns on desktop, 1 on mobile */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
      }}>
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              // Each card animates slightly after the previous one
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              style={{
                padding: "28px", borderRadius: "16px",
                background: "rgba(13,17,23,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex", flexDirection: "column", gap: "16px",
                // Smooth hover handled via onMouseEnter/Leave
                transition: "border-color 0.3s, transform 0.2s",
                cursor: "default",
              }}
              whileHover={{ y: -4 }}
            >
              {/* Icon container with colored glow background */}
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                background: feature.color + "15", // 15 = ~8% opacity in hex
                border: "1px solid " + feature.color + "30",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={20} color={feature.color} />
              </div>

              <div>
                <h3 style={{
                  fontSize: "16px", fontWeight: 600,
                  color: "#f0f4ff", marginBottom: "8px",
                }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#8892a4", lineHeight: 1.7 }}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}