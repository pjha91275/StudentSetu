// src/app/layout.tsx - StudentSetu Root Layout
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'StudentSetu | Centralized & Verified Student Records',
  description: 'A centralized, evidence-aware, and appropriately verified student activity and development record.',
  icons: {
    icon: [
      { url: '/favicon.ico?v=6' },
      { url: '/favicon.png?v=6', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png?v=6', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png?v=6' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
