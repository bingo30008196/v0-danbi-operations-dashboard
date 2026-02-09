import React from "react"
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR, Geist_Mono } from 'next/font/google'

import './globals.css'

const _notoSansKr = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '단비 운영본부 | Danbi Operations HQ',
  description: '단비 운영본부 대시보드 — 농업 바이오 기업 운영 관리 시스템',
}

export const viewport: Viewport = {
  themeColor: '#020617',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
