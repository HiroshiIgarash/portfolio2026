import type { Metadata } from "next";
import {
  Caveat,
  JetBrains_Mono,
  Kalam,
  Klee_One,
  Noto_Sans_JP,
  Nunito,
} from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const kleeOne = Klee_One({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-klee",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const fontVariables = [
  nunito.variable,
  notoSansJP.variable,
  caveat.variable,
  kleeOne.variable,
  kalam.variable,
  jetBrainsMono.variable,
].join(" ");

export const metadata: Metadata = {
  title: "HIROSHI IGARASHI · 五十嵐 大士 — Web Engineer Portfolio",
  description:
    "東京を拠点に活動するWeb系エンジニア・五十嵐 大士のポートフォリオ。フロントエンドを中心に、バックエンド・インフラまで横断的に開発しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
