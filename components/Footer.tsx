import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#060810" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
          
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={16} color="white" fill="white" />
              </div>
              <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "18px", color: "#f0f4ff" }}>
                DealSense{" "}
                <span style={{ background: "linear-gradient(135deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI</span>
              </span>
            </div>
            <p style={{ fontSize: "14px", color: "#8892a4", lineHeight: 1.7 }}>
              AI-powered product comparison for smart shoppers.
            </p>
          </div>

          {/* Links */}
          {[
            { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
            { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4a5568", marginBottom: "16px" }}>{title}</p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ fontSize: "14px", color: "#8892a4", textDecoration: "none" }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "12px", color: "#4a5568" }}>© 2025 DealSense AI. Built with Next.js + Gemini.</p>
          <p style={{ fontSize: "12px", color: "#4a5568" }}>Made with ❤️ for smarter shoppers</p>
        </div>
      </div>
    </footer>
  );
}