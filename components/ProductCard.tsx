"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart, TrendingDown } from "lucide-react";
import BestDealBadge from "./BestDealBadge";
import { Product } from "@/lib/types";

const pc: Record<string, string> = {
  Amazon: "#ff9900",
  Flipkart: "#2874f0",
  eBay: "#e53238",
  Walmart: "#0071ce",
  "Best Buy": "#1d3461",
};

function formatINR(usd: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(usd * 83);
}

interface Props { product: Product; index: number; }

export default function ProductCard({ product, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      style={{ borderRadius: "16px", padding: "20px", background: "rgba(13,17,23,0.8)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", gap: "14px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 600, background: pc[product.platform] + "20", color: pc[product.platform] }}>
          {product.platform}
        </span>
        {product.isBestDeal && <BestDealBadge />}
      </div>

      <div style={{ height: "160px", borderRadius: "12px", background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={product.imageUrl} alt={product.name} style={{ maxHeight: "140px", maxWidth: "100%", objectFit: "contain" }} />
      </div>

      <h3 style={{ fontSize: "14px", fontWeight: 500, color: "#f0f4ff", lineHeight: 1.4 }}>
        {product.name}
      </h3>

      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"} color={i < Math.floor(product.rating) ? "#f59e0b" : "#4a5568"} />
        ))}
        <span style={{ fontSize: "12px", color: "#8892a4" }}>{product.rating} ({product.reviewCount.toLocaleString()})</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "20px", fontWeight: 700, color: "#f0f4ff" }}>{formatINR(product.price)}</span>
            {product.discount > 0 && (
              <span style={{ fontSize: "12px", color: "#10b981", fontWeight: 500, display: "flex", alignItems: "center", gap: "2px" }}>
                <TrendingDown size={12} /> -{product.discount}%
              </span>
            )}
          </div>
          <span style={{ fontSize: "12px", color: "#4a5568", textDecoration: "line-through" }}>{formatINR(product.originalPrice)}</span>
        </div>
        <a href={product.productUrl} target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 14px", borderRadius: "8px", background: "#3b82f6", color: "white", fontSize: "13px", fontWeight: 500, textDecoration: "none" }}>
          <ShoppingCart size={13} /> Buy
        </a>
      </div>

      <div style={{ fontSize: "11px", color: product.availability === "In Stock" ? "#10b981" : "#f59e0b", display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
        {product.availability}
      </div>
    </motion.div>
  );
}