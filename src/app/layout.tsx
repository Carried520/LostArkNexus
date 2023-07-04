export const metadata = {
  title: 'Lost Ark Nexus',
  description: 'Lost Ark Nexus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
