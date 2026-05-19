export interface Product {
  id: string;
  name: string;
  platform: "Amazon" | "Flipkart" | "eBay" | "Walmart" | "Best Buy";
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  productUrl: string;
  isBestDeal: boolean;
  availability: "In Stock" | "Limited Stock" | "Out of Stock";
}

export interface SearchResult {
  query: string;
  products: Product[];
  aiSummary?: string;
}