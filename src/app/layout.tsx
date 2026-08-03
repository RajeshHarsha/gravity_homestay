import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: "Gravity Homestays | Luxury Boutique Stays in Kerala",
    template: "%s | Gravity Homestays"
  },
  description: "Experience luxury that feels like home at Gravity Homestays in Kerala. Boutique stays with Normal Rooms (₹2,000/night) and Deluxe Rooms (₹3,000/night). Book your perfect getaway today.",
  keywords: ["luxury homestay", "boutique hotel", "Kerala homestay", "budget luxury rooms", "Gravity Homestays", "Kerala accommodation", "boutique stays", "heritage homestay"],
  authors: [{ name: "Gravity Homestays" }],
  creator: "Gravity Homestays",
  publisher: "Gravity Homestays",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gravityhomestays.com",
    title: "Gravity Homestays | Luxury Boutique Stays in Kerala",
    description: "Experience luxury that feels like home. Boutique stays crafted with warmth, comfort, and timeless elegance.",
    siteName: "Gravity Homestays",
    images: [
      {
        url: "/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Gravity Homestays Luxury Room with Sunset View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gravity Homestays | Luxury Boutique Stays in Kerala",
    description: "Experience luxury that feels like home. Boutique stays crafted with warmth, comfort, and timeless elegance.",
    images: ["/hero-bg.webp"],
    creator: "@gravityhomestays",
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: "/manifest.json",
  metadataBase: new URL('https://gravityhomestays.com'),
  alternates: {
    canonical: "https://gravityhomestays.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFBF5' },
    { media: '(prefers-color-scheme: dark)', color: '#001E3C' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} w-full overflow-x-hidden`} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-gold focus:text-primary-bg focus:rounded"
        >
          Skip to main content
        </a>
        <div id="main-content" className="w-full mx-auto">
          {children}
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
