import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// --- Load fonts ---
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

// --- Metadata ---
export const metadata: Metadata = {
  title: "SVKM Ayurveda College, Hospital & Research Center",
  description:
    "Official website of SVKM’s Krutiben Bhupeshbhai Patel Ayurveda College, Hospital & Research Center.",
};

// --- Layout ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${nunito.variable} font-body antialiased bg-ayurvedaBeige text-ayurvedaGreen`}
      >
        <Navbar />
        <main className="pt-40 md:pt-44">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
