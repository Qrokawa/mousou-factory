"use client";

import { useReveal, SiteHeader, Footer } from "../components/shared";
import {
  FactoryIcon, StarShape, CrossShape, CircleShape, GearIcon,
  ArrowRight, ChatIcon, BoltIcon, LightbulbIcon,
} from "../components/icons";

/* ─── LINE Icon ─── */

function LineIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#06C755" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <path d="M24 10C16.268 10 10 15.15 10 21.5c0 5.18 4.3 9.67 10.4 10.94.4.09.96.27 1.1.62.12.32.08.82.04 1.14l-.18 1.06c-.06.32-.26 1.24 1.08.68 1.34-.56 7.24-4.26 9.88-7.3C34.76 26 38 23.96 38 21.5 38 15.15 31.732 10 24 10zm-7.2 14.8h-2.4a.6.6 0 01-.6-.6v-5.8a.6.6 0 01.6-.6.6.6 0 01.6.6v5.2h1.8a.6.6 0 010 1.2zm3-0a.6.6 0 01-.6-.6v-5.8a.6.6 0 011.2 0v5.8a.6.6 0 01-.6.6zm7.2 0a.6.6 0 01-.48-.24l-3.12-4.26v3.9a.6.6 0 01-1.2 0v-5.8a.6.6 0 01.48-.24h.12a.6.6 0 01.36.18l3.12 4.26v-3.84a.6.6 0 011.2 0v5.8a.6.6 0 01-.48.24zm4.8-4.6a.6.6 0 010 1.2h-1.8v1.2h1.8a.6.6 0 010 1.2h-2.4a.6.6 0 01-.6-.6v-5.8a.6.6 0 01.6-.6h2.4a.6.6 0 010 1.2h-1.8v1.2h1.8z" fill="white" />
    </svg>
  );
}

/* ─── Hero ─── */

function ContactHero() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <GearIcon size={70} className="absolute top-8 left-10 animate-spin-slow opacity-60" />
      <StarShape size={28} className="absolute top-20 right-16 animate-float" color="var(--factory-orange)" />
      <CrossShape size={18} className="absolute bottom-24 left-1/4 animate-float-delay-1" />
      <CircleShape size={22} className="absolute bottom-16 right-20 animate-float-delay-2" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <span className="inline-block bg-[#06C755] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 neu-border border-factory-dark -rotate-1">
            LINE公式アカウント
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            まずは<span className="text-factory-coral">気軽に</span>
            <br />
            話しかけてください
          </h1>
          <p className="text-lg md:text-xl text-factory-dark/70 leading-relaxed max-w-2xl mx-auto">
            「何から始めればいいの？」「こんなの作れる？」
            <br className="hidden md:block" />
            どんな小さな疑問でも大丈夫。LINEでお気軽にどうぞ。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── LINE CTA ─── */

function LineCTASection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className={`bg-[#06C755]/5 p-8 md:p-12 rounded-3xl neu-border border-[#06C755] border-b-[6px] neu-shadow text-center transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <LineIcon className="mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            LINE友だち追加で
            <br />
            <span className="text-[#06C755]">無料相談</span>スタート
          </h2>
          <p className="text-factory-dark/70 leading-relaxed mb-8 max-w-md mx-auto">
            友だち追加するだけでOK。
            <br />
            あなたの「作りたい」を一緒に考えます。
          </p>
          <a
            href="https://lin.ee/XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-btn inline-flex items-center gap-3 bg-[#06C755] text-white font-bold text-lg md:text-xl px-10 py-5 rounded-2xl hover:brightness-110 transition-all"
          >
            LINEで友だち追加する
            <ArrowRight />
          </a>
          <p className="mt-4 text-sm text-factory-dark/40">※ 無料・いつでもブロックできます</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Benefits ─── */

function BenefitsSection() {
  const { ref, visible } = useReveal();
  const benefits = [
    {
      title: "あなたの妄想を無料でヒアリング",
      desc: "「こんなの作りたい」をLINEで送るだけ。実現可能性やおすすめのアプローチを一緒に考えます。",
      icon: <ChatIcon />,
      color: "bg-factory-yellow",
    },
    {
      title: "AIものづくりの始め方がわかる",
      desc: "何のツールを使えばいいか、どこから手をつけるか。あなたの状況に合わせたアドバイスをお届け。",
      icon: <LightbulbIcon />,
      color: "bg-factory-pink",
    },
    {
      title: "最新のAI活用情報をお届け",
      desc: "日々進化するAIエージェントの最新情報や、役立つTipsを定期的に配信します。",
      icon: <BoltIcon />,
      color: "bg-factory-blue",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 relative">
      <div className="absolute inset-0 pattern-grid" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            友だち追加すると<span className="text-factory-orange">こんないいこと</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`${item.color} p-7 rounded-2xl neu-border neu-shadow-sm card-hover ${visible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-kiwi-maru)" }}>{item.title}</h3>
              <p className="text-factory-dark/70 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Flow ─── */

function FlowSection() {
  const { ref, visible } = useReveal();
  const steps = [
    { num: "1", text: "下のボタンからLINE友だち追加", color: "bg-factory-yellow" },
    { num: "2", text: "「はじめまして」とメッセージを送る", color: "bg-factory-pink" },
    { num: "3", text: "あなたの「作りたい」を教えてください", color: "bg-factory-blue" },
    { num: "4", text: "一緒に実現方法を考えましょう！", color: "bg-factory-orange" },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            かんたん<span className="text-factory-pink">4ステップ</span>
          </h2>
        </div>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-center gap-5 ${step.color} p-5 rounded-2xl neu-border neu-shadow-sm ${visible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.12}s` }}
            >
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-factory-dark text-white rounded-xl text-xl font-black" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
                {step.num}
              </span>
              <p className="text-lg font-bold">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */

function FinalCTASection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <FactoryIcon className="mx-auto mb-8 animate-float" />
          <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            妄想は、
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-factory-coral">話すことから始まる</span>
              <span className="absolute bottom-1 left-[-4px] right-[-4px] h-4 md:h-5 bg-factory-yellow/40 -skew-x-1" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-factory-dark/70 leading-relaxed mb-12 max-w-xl mx-auto">
            一人で悩まなくて大丈夫。
            <br />
            まずはLINEで気軽に相談してみてください。
            <br />
            <span className="font-bold text-factory-dark">あなたの「あったらいいな」、一緒に形にしましょう。</span>
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-5 justify-center items-center transition-all duration-700 delay-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <a
            href="https://lin.ee/XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="neu-btn inline-flex items-center gap-3 bg-[#06C755] text-white font-bold text-lg md:text-xl px-10 py-5 rounded-2xl hover:brightness-110 transition-all"
          >
            LINEで友だち追加する
            <ArrowRight />
          </a>
          <a href="/" className="neu-btn inline-block bg-factory-cream text-factory-dark font-bold text-lg px-8 py-5 rounded-2xl cursor-pointer">
            トップページに戻る
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <ContactHero />
      <LineCTASection />
      <BenefitsSection />
      <FlowSection />
      <FinalCTASection />
      <Footer />
    </>
  );
}
