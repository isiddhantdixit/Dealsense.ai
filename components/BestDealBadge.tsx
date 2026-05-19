export default function BestDealBadge() {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      padding: "4px 10px", borderRadius: "999px",
      background: "rgba(16, 185, 129, 0.15)",
      border: "1px solid rgba(16, 185, 129, 0.4)",
      fontSize: "11px", fontWeight: 600,
      color: "#10b981", letterSpacing: "0.05em",
      textTransform: "uppercase",
    }}>
      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
      Best Deal
    </div>
  );
}