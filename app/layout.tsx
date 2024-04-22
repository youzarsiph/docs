import type { Metadata } from 'next'
import '@/app/styles/globals.css'
import { Fonts } from '@/app/styles'

export const metadata: Metadata = {
  title: 'Docs',
  description: 'Docs: A document editor.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={Fonts.sans['Noto Sans'].className}>{children}</body>
    </html>
  )
}
