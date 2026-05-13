import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zinway — Where Intelligence Meets Influence",
  description: "AI-driven digital marketing agency website experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
