import { Geist, Geist_Mono } from "next/font/google";
import { TestimonialsProvider } from "./providers/TestimonialsProvider";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TestimonialsProvider>
          {children}
        </TestimonialsProvider>
      </body>
    </html>
  );
}
