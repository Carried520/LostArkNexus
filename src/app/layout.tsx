import "../pages/global.css";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lost Ark Nexus",
  description: "Lost Ark Nexus",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#f3f3f3",
  openGraph: {
    title: "Lost Ark Nexus",
    description:
      "Lost Ark Nexus is a dynamic hub for community-driven Lost Ark guides.",
    siteName: "Lost Ark Nexus",
    url: "https://www.lostark.nexus/",
    authors: ["carried", "poyo", "civo", "haste"],
    locale: "en_US",
    images: [
      {
        url: "https://www.lostark.nexus/nexusog.jpg",
        alt: "Lost Ark Nexus",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body style={{ backgroundColor: "#141418" }}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
