export interface Testimonial {
  id: string;
  customerName: string;
  platform: string; // e.g., Google, Facebook
  rating: number; // 1–5
  reviewText: string;
  imageUrl?: string;
  createdAt: string;
}

