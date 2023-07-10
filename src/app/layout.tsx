
export const metadata = {
  title: "Lost Ark Nexus",
  description: "Lost Ark Nexus",
  openGraph: {
    title: "Lost Ark Nexus",
    description: "Community Guide Hub supporting dynamic links to guides.",
    url: "lostark.nexus",
    siteName: "Lost Ark Nexus",
    authors: ["carried", "civo"],
  },
    
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        {children}
    </html>
  );
}
