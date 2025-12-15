import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '星禧水晶 - 五行水晶手串',
  description: '专业的五行水晶手串跨境电商平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
