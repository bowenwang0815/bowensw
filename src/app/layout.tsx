import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bowen Wang",
  description: "Personal website of Bowen Wang",
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  // Open Graph metadata for better link previews
  openGraph: {
    title: 'Bowen Wang',
    description: 'Full Stack Developer passionate about creating innovative solutions',
    url: 'https://bowenwang.vercel.app',
    siteName: 'Bowen Wang',
    images: [
      {
        url: '/me.jpg', // Using your profile picture
        width: 800,
        height: 600,
        alt: 'Bowen Wang',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Bowen Wang',
    description: 'Full Stack Developer passionate about creating innovative solutions',
    images: ['/me.jpg'], // Using your profile picture
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section data-aos="fade-up">...</section>
        <div data-aos="zoom-in">...</div>
        {children}
      </body>
    </html>
  );
}
