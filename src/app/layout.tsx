import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StagewiseToolbar } from '@stagewise/toolbar-next';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio Glassmorphism",
  description: "Modern glassmorphism portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <StagewiseToolbar
          config={{
            plugins: [], // 커스텀 플러그인을 여기에 추가
          }}
        />
        {children}
      </body>
    </html>
  );
}
