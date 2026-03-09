import type { Metadata } from "next";
import { Zen_Maru_Gothic, Dela_Gothic_One } from "next/font/google";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
});

const delaGothic = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dela-gothic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "妄想実現ファクトリー | あったらいいなが自分で作れる！",
  description:
    "AIエージェントを使えば、プログラミングができなくても「あったらいいな」を自分で作れる時代。アイデアを形にする方法を楽しく学ぼう。",
  openGraph: {
    title: "妄想実現ファクトリー | あったらいいなが自分で作れる！",
    description:
      "AIエージェントを使えば、プログラミングができなくても「あったらいいな」を自分で作れる時代。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenMaru.variable} ${delaGothic.variable} antialiased`}
        style={{ fontFamily: "var(--font-zen-maru), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
