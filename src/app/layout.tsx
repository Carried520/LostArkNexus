import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Lost Ark Nexus",
  description: "Lost Ark Nexus",
  viewport : {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable : false
  },
  openGraph: {
    title: "Lost Ark Nexus",
    description: "Community Guide Hub supporting dynamic links to guides.",
    url: "lostark.nexus",
    siteName: "Lost Ark Nexus",
    authors: ["carried", "poyo" , "civo"],
  },
    
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        {children}
    </html>
  );
}
