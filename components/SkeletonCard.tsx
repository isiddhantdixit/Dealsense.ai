export default function SkeletonCard() {
  return (
    <div style={{
      borderRadius: "16px", padding: "20px",
      background: "rgba(13,17,23,0.8)",
      border: "1px solid rgba(255,255,255,0.06)",
      display: "flex", flexDirection: "column", gap: "12px",
    }}>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%);
          background-size: 400px 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }
      `}</style>
      <div className="shimmer" style={{ height: "180px", borderRadius: "12px" }} />
      <div className="shimmer" style={{ height: "14px", width: "60%" }} />
      <div className="shimmer" style={{ height: "12px", width: "40%" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="shimmer" style={{ height: "24px", width: "30%" }} />
        <div className="shimmer" style={{ height: "32px", width: "35%", borderRadius: "8px" }} />
      </div>
    </div>
  );
}