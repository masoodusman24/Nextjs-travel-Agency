import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { Children } from "react";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";


const font = Poppins ({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Usmans Travel Agency",
  description: "Travel With Usman and his team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}>
          <ResponsiveNav/>
          {children}
          <Footer />
          <ScrollToTop />
      </body>
    </html>
  );
}
