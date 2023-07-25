import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Lost Ark Nexus",
  description: "Lost Ark Nexus",
  openGraph: {
    title: "Lost Ark Nexus",
    description: "Community Guide Hub supporting dynamic links to guides.",
    url: "lostark.nexus",
    siteName: "Lost Ark Nexus",
    authors: ["carried", "poyo" ,  "civo"],
  },
  metadataBase : new URL("https://lostark.nexus")
    
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
       
    </html>
  );
}
