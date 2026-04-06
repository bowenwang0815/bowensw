import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bowenwang.vercel.app"),
  title: "Bowen Wang | Software Engineer",
  description:
    "Portfolio for Bowen Wang, a UC Irvine developer building full-stack products, community tools, and practical software.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Bowen Wang | Software Engineer",
    description:
      "Full-stack developer focused on useful products, reliable systems, and thoughtful user experiences.",
    url: "https://bowenwang.vercel.app",
    siteName: "Bowen Wang",
    images: [
      {
        url: "/me.jpg",
        width: 800,
        height: 600,
        alt: "Bowen Wang portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bowen Wang | Software Engineer",
    description:
      "Full-stack developer focused on useful products, reliable systems, and thoughtful user experiences.",
    images: ["/me.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">{children}</body>
    </html>
  );
}
