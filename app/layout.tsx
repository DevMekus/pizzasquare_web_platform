import type { Metadata } from "next";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import "./globals.css";
import '@/styles/main.css'

import LandingNavbar from "@/components/menu/LandingNavbar"
import LandingFooter from "@/components/menu/LandingFooter"


export const metadata: Metadata = {
  title: 'PizzaSquare',
  description: 'PizzaSquare Platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pizzasquare-app">
          <LandingNavbar />
          {children}
          <LandingFooter />
        </div>
      </body>
    </html>
  );
}
