"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, X } from "lucide-react";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";
import { Product } from "@/lib/types";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "1", name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    platform: "Amazon", price: 279.99, originalPrice: 349.99, discount: 20,
    rating: 4.8, reviewCount: 24350, isBestDeal: true, availability: "In Stock",
    imageUrl: "https://placehold.co/300x200/1a1a2e/60a5fa?text=Sony+XM5",
    productUrl: "https://amazon.com",
  },
  {
    id: "2", name: "Sony WH-1000XM5 Wireless Headphones — Midnight Blue",
    platform: "Walmart", price: 298.00, originalPrice: 349.99, discount: 15,
    rating: 4.7, reviewCount: 8920, isBestDeal: false, availability: "In Stock",
    imageUrl: "https://placehold.co/300x200/1a1a2e/60a5fa?text=Sony+XM5",
    productUrl: "https://walmart.com",
  },
  {
    id: "3", name: "Sony WH-1000XM5 Premium Noise Cancellation Headset",
    platform: "Best Buy", price: 319.99, originalPrice: 349.99, discount: 9,
    rating: 4.6, reviewCount: 5430, isBestDeal: false, availability: "Limited Stock",
    imageUrl: "https://placehold.co/300x200/1a1a2e/60a5fa?text=Sony+XM5",
    productUrl: "https://bestbuy.com",
  },
  {
    id: "4", name: "Sony WH1000XM5 Over-Ear Bluetooth Headphones (Refurbished)",
    platform: "eBay", price: 219.00, originalPrice: 349.99, discount: 37,
    rating: 4.3, reviewCount: 1820, isBestDeal: false, availability: "Limited Stock",
    imageUrl: "https://placehold.co/300x200/1a1a2e/f59e0b?text=Refurbished",
    productUrl: "https://ebay.com",
  },
  {
    id: "5", name: "Sony WH-1000XM5 with Carrying Case Bundle",
    platform: "Flipkart", price: 289.99, originalPrice: 349.99, discount: 17,
    rating: 4.5, reviewCount: 3210, isBestDeal: false, availability: "In Stock",
   imageUrl: "https://placehold.co/300x200/1a1a2e/60a5fa?text=Sony+XM5",
    productUrl: "https://flipkart.com",
  },
  {
    id: "6", name: "Sony WH-1000XM5 Silver Edition Wireless Headphones",
    platform: "Amazon", price: 299.99, originalPrice: 349.99, discount: 14,
    rating: 4.7, reviewCount: 11200, isBestDeal: false, availability: "In Stock",
    imageUrl: "https://placehold.co/300x200/1a1a2e/60a5fa?text=Sony+XM5",
    productUrl: "https://amazon.com",
  },
];

const AI_SUMMARY = "The Sony WH-1000XM5 hits a sweet spot between noise cancellation and battery life. The best price right now is on Amazon at $279.99 — that's 20% off the usual price and the lowest we've seen in 3 months. The eBay refurbished option at $219 is even cheaper but carries more risk. Avoid the Best Buy listing unless you need in-store pickup.";

export default function ProductGrid() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    setShowSummary(false);
    setProducts([]);
    await new Promise((r) => setTimeout(r, 1800));
    setProducts(MOCK_PRODUCTS);
    setLoading(false);
    setTimeout(() => setShowSummary(true), 400);
  };

  const clearSearch = () => {
    setQuery(""); setSearched(false);
    setProducts([]); setShowSummary(false);
  };

  return (
    <section style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px 96px" }}>

      {/* Section search bar */}
      <form onSubmit={handleSearch} style={{ marginBottom: "40px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          background: "rgba(13,17,23,0.8)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px", padding: "14px 20px",
        }}>
          <Search size={18} color="#4a5568" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search any product — e.g. "iPhone 16" or "RTX 4090"'
            style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: "15px", color: "#f0f4ff" }}
          />
          {query && (
            <button type="button" onClick={clearSearch} style={{ background: "none", border: "none", cursor: "pointer", color: "#4a5568" }}>
              <X size={16} />
            </button>
          )}
          <button type="submit" style={{
            padding: "8px 20px", background: "#3b82f6", color: "white",
            border: "none", borderRadius: "8px", fontSize: "14px",
            fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: "6px",
          }}>
            <Sparkles size={14} /> Compare
          </button>
        </div>
      </form>

      {/* AI Summary */}
      <AnimatePresence>
        {showSummary && (
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            style={{
              marginBottom: "32px", padding: "20px 24px", borderRadius: "14px",
              background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <Sparkles size={16} color="#3b82f6" />
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#3b82f6", textTransform: "uppercase", letterSpacing: "0.05em" }}>AI Summary</span>
            </div>
            <p style={{ fontSize: "14px", color: "#8892a4", lineHeight: 1.7 }}>{AI_SUMMARY}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results header */}
      {searched && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <p style={{ fontSize: "14px", color: "#8892a4" }}>
            {loading ? "Scanning platforms..." : `Found ${products.length} results for "${query}"`}
          </p>
          {!loading && products.length > 0 && (
            <p style={{ fontSize: "12px", color: "#4a5568" }}>Sorted by best value</p>
          )}
        </div>
      )}

      {/* Skeleton loaders */}
      {loading && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      )}

      {/* Product cards */}
      {!loading && products.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && !searched && (
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
          <p style={{ fontSize: "18px", color: "#8892a4", marginBottom: "8px" }}>Search for any product above</p>
          <p style={{ fontSize: "14px", color: "#4a5568" }}>We'll compare prices across Amazon, Flipkart, eBay, Walmart and more</p>
        </div>
      )}

    </section>
  );
}