export const metadata = {
  title: 'Lost Ark Nexus',
  description: 'Lost Ark Nexus',
  openGraph : {
    title : 'Lost Ark Nexus',
    description: '',
    authors : ['carried' , 'civo']
  }
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
