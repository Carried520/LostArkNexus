import { Metadata } from "next";
import "../styles/globals.css";
import "../pages/global.css";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Lost Ark Nexus",
  description: "Lost Ark Nexus",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: "Lost Ark Nexus",
    description: "Community Guide Hub supporting dynamic links to guides.",
    url: "lostark.nexus",
    siteName: "Lost Ark Nexus",
    authors: ["carried", "poyo", "civo"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ backgroundColor: "#141418" }}>
        <Providers>
        <Navbar/>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
