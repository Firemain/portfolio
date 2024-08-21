import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Firmin THIERY - IT Consultant & Web Developer",
  description: "Explore the portfolio of Firmin THIERY, an aspiring IT consultant and web developer with experience in AI, augmented reality, and software development.",
  keywords: "Firmin THIERY, IT consulting, web development, portfolio, Centralien, software development, augmented reality, AI",
  openGraph: {
    title: "Firmin THIERY - IT Consultant & Web Developer Portfolio",
    description: "Discover Firmin THIERY's portfolio showcasing his skills and experience in IT consulting, web development, and more.",
    url: "https://your-portfolio-url.com",
    images: [
      {
        url: "/images/logo.png", // Replace with the actual image path
        width: 800,
        height: 600,
        alt: "Firmin THIERY Portfolio Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firmin THIERY - IT Consultant & Web Developer Portfolio",
    description: "Explore Firmin THIERY's portfolio showcasing his skills and projects in IT consulting and web development.",
    images: ["/images/logo.png"], // Replace with the actual image path
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
