"use client";

// useRef gives us a reference to a DOM element
// so Framer Motion knows WHICH element to watch
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// This is our data — easy to update later
const stats = [
  { value: "50M+", label: "Products tracked" },
  { value: "₹2.4Cr", label: "Saved by users" },
  { value: "12K+", label: "Active shoppers" },
  { value: "99.2%", label: "Deal accuracy" },
];

export default function StatsBar() {
  // useRef attaches to the div below
  // useInView watches if that div is on screen
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // once:true = animate only first time

  return (
    <section ref={ref} style={{ padding: "0 24px 80px" }}>
      <div style={{
        maxWidth: "1152px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1px", // gap creates the divider lines
        background: "rgba(255,255,255,0.06)", // this becomes the divider color
        borderRadius: "16px", overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",
      }}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            // Each stat animates with a slight delay based on index
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              padding: "32px 24px", textAlign: "center",
              background: "rgba(13,17,23,0.9)", // fills the gap → creates dividers
            }}
          >
            <p style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "32px", fontWeight: 700,
              background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              marginBottom: "6px",
            }}>
              {stat.value}
            </p>
            <p style={{ fontSize: "13px", color: "#8892a4" }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}