import type { Metadata } from "next";
import { Inter, Merriweather, Exo } from "next/font/google";
import "./globals.css";
import { Box } from '@mui/material'; // ← Cambiar Container por Box
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayout from "./ClientLayout";

import { Playfair_Display } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ['300', '400', '700'], // Incluye 400 que es el que usa Figma
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Hussaini Legal Group",
  description: "Web site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} ${exo.variable}`}>
        <ClientLayout>
          <Header />
          <Box
            component="main"
            sx={{
              margin: 0,
              padding: 0,
              width: '100%',
              minHeight: '80vh'
            }}
          >
            {children}
          </Box>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}