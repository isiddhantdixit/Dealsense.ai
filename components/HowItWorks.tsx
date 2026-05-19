"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Cpu, ShoppingBag } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search any product",
    desc: "Type a product name — headphones, laptop, phone, anything. DealSense instantly scans across all major platforms.",
    color: "#3b82f6",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI analyzes the data",
    desc: "Our Gemini AI reads prices, reviews, and deal history. It identifies the best value and flags suspicious listings.",
    color: "#8b5cf6",
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Buy with confidence",
    desc: "See a clear comparison, read the AI summary, and click Buy — knowing you got the best possible price.",
    color: "#06b6d4",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span style={{
            display: "inline-block", marginBottom: "16px",
            padding: "6px 16px", borderRadius: "999px",
            background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)",
            fontSize: "12px", fontWeight: 600, color: "#06b6d4",
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            How it works
          </span>

          <h2 style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700,
            color: "#f0f4ff", lineHeight: 1.15, marginBottom: "16px",
          }}>
            Three steps to the{" "}
            <span style={{
              background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              best deal
            </span>
          </h2>

          <p style={{ fontSize: "16px", color: "#8892a4", maxWidth: "440px", margin: "0 auto", lineHeight: 1.7 }}>
            From search to checkout in under 30 seconds.
          </p>
        </motion.div>

        {/* Steps — horizontal on desktop */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", position: "relative" }}>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}
              >
                {/* Step number + icon row */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", width: "100%" }}>
                  {/* Big step number */}
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "16px", flexShrink: 0,
                    background: step.color + "15",
                    border: "1px solid " + step.color + "40",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    position: "relative",
                  }}>
                    <Icon size={24} color={step.color} />
                    {/* Small number badge in top-right corner */}
                    <span style={{
                      position: "absolute", top: "-8px", right: "-8px",
                      width: "20px", height: "20px", borderRadius: "50%",
                      background: step.color, color: "white",
                      fontSize: "10px", fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {i + 1}
                    </span>
                  </div>

                  {/* Connector line between steps (hidden on last step) */}
                  {i < steps.length - 1 && (
                    <div style={{
                      flex: 1, height: "1px",
                      background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 4px, transparent 4px, transparent 10px)",
                      // This creates a dotted/dashed line effect using CSS gradient
                    }} />
                  )}
                </div>

                {/* Step text */}
                <div>
                  <h3 style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "18px", fontWeight: 600,
                    color: "#f0f4ff", marginBottom: "10px",
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#8892a4", lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}