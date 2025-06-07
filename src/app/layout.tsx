import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BreakpointTracker from "@/components/BreakpointTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Gilroy font
const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gilroy-Medium.woff2',
      weight: '500',
      style: 'normal',
    }
  ],
  variable: '--font-gilroy',
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

// Add Abominable font
const abominable = localFont({
  src: [
    {
      path: '../../public/fonts/Abominable-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Abominable-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-abominable',
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

// Custom local font configuration
const customFont = localFont({
  src: [
    {
      path: '../../public/fonts/custom-font.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/custom-font-bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-custom',
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: "SnapShack - Instant Photo Memories",
  description: "One scan, instant memories. Capture, share, and relive your special moments with our QR code photo sharing platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${customFont.variable} ${gilroy.variable} ${abominable.variable} antialiased font-gilroy`}
        suppressHydrationWarning={true}
      >
        <BreakpointTracker />
        {children}
      </body>
    </html>
  );
}
