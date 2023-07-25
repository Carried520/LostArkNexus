import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html suppressHydrationWarning lang="en">
      <Head  />
      <body suppressHydrationWarning style={{ backgroundColor: '#141418' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}