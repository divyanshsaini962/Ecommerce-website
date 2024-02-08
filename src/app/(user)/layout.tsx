import type { Metadata } from "next";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Saini Industry",
  description: "Whole sale product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="font-display">
        <Navbar />
        {children}</body>
    </html>
  );
}
