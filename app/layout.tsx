import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prometainsaat.com.tr"),
  title: "PROMETA — Elite Architectural Facade Systems & Fabrication",
  description:
    "PROMETA engineers, fabricates, and installs elite architectural facade claddings, structural glass, and precision metalwork for landmark developments across healthcare, aviation, retail, hospitality, and corporate sectors worldwide.",
  openGraph: {
    title: "PROMETA — Elite Architectural Facade Systems & Fabrication",
    description:
      "Global engineering and fabrication of premium facade claddings, structural glass, and architectural metalwork.",
    siteName: "PROMETA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
