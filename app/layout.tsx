import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { PostHogProvider } from "@/lib/analytics/posthog";
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
  title: "Football Player Market | Virtual Trading Platform",
  description:
    "Trade virtual shares of world-class football players with real-time order books, performance indexing, and portfolio tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
        "pk_test_Y2xlcmsuZXhhbXBsZS5jb20k"
      }
      appearance={{
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#141416",
          colorInputBackground: "#1c1c1f",
          colorInputText: "#f4f4f5",
          colorText: "#f4f4f5",
          colorTextSecondary: "#a1a1aa",
        },
      }}
    >
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-base text-text-primary antialiased`}
        >
          <PostHogProvider>{children}</PostHogProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
