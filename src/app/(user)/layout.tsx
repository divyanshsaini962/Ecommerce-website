import type { Metadata } from "next";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar";
import PageButton from "@/components/PageButton";
import "slick-carousel/slick/slick.css";
import Footer from '@/components/Footer';
import Layout from '@/components/Layout'



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
        <Layout>
            <Navbar />
            <PageButton />
            {children}
             <Footer />
        </Layout>
        </body>
    </html>
  );
}
