"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Hooks
   ───────────────────────────────────────────── */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─────────────────────────────────────────────
   SVG Illustrations (replacing emojis)
   ───────────────────────────────────────────── */

function GearIcon({ size = 48, color = "var(--factory-yellow)", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M50 15 L55 25 L65 20 L63 32 L75 32 L68 42 L78 48 L68 52 L75 62 L63 58 L65 70 L55 65 L50 75 L45 65 L35 70 L37 58 L25 62 L32 52 L22 48 L32 42 L25 32 L37 32 L35 20 L45 25 Z" fill={color} stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="50" cy="45" r="10" fill="var(--factory-cream)" stroke="var(--factory-dark)" strokeWidth="2.5" />
    </svg>
  );
}

function FactoryIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" className={className} aria-hidden="true">
      {/* Chimney */}
      <rect x="12" y="8" width="10" height="24" rx="2" fill="var(--factory-coral)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <rect x="28" y="16" width="8" height="16" rx="2" fill="var(--factory-orange)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      {/* Smoke puffs */}
      <circle cx="17" cy="6" r="4" fill="var(--factory-dark)" opacity="0.12" />
      <circle cx="22" cy="3" r="3" fill="var(--factory-dark)" opacity="0.08" />
      {/* Main building */}
      <rect x="4" y="32" width="64" height="32" rx="4" fill="var(--factory-yellow)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      {/* Roof accent */}
      <path d="M4 36 L68 36" stroke="var(--factory-dark)" strokeWidth="2.5" />
      {/* Windows */}
      <rect x="12" y="42" width="10" height="10" rx="2" fill="var(--factory-cream)" stroke="var(--factory-dark)" strokeWidth="2" />
      <rect x="31" y="42" width="10" height="10" rx="2" fill="var(--factory-cream)" stroke="var(--factory-dark)" strokeWidth="2" />
      <rect x="50" y="42" width="10" height="10" rx="2" fill="var(--factory-cream)" stroke="var(--factory-dark)" strokeWidth="2" />
      {/* Door */}
      <rect x="28" y="54" width="16" height="12" rx="2" fill="var(--factory-blue)" stroke="var(--factory-dark)" strokeWidth="2" />
    </svg>
  );
}

function LightbulbIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M20 4 C12 4 6 10 6 18 C6 23 9 27 13 29 L13 34 L27 34 L27 29 C31 27 34 23 34 18 C34 10 28 4 20 4Z" fill="var(--factory-yellow)" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="14" y="34" width="12" height="3" rx="1.5" fill="var(--factory-dark)" />
      {/* Rays */}
      <line x1="20" y1="0" x2="20" y2="2" stroke="var(--factory-orange)" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="6" x2="32" y2="7.5" stroke="var(--factory-orange)" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="6" x2="8" y2="7.5" stroke="var(--factory-orange)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M18 2 L6 18 H15 L13 30 L26 14 H17 Z" fill="var(--factory-orange)" stroke="var(--factory-dark)" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function StarShape({ size = 24, color = "var(--factory-yellow)", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 2 L13.5 9.5 L21 9.5 L15 14 L17 21.5 L12 17 L7 21.5 L9 14 L3 9.5 L10.5 9.5 Z" fill={color} stroke="var(--factory-dark)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function CrossShape({ size = 16, color = "var(--factory-pink)", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M8 1 L8 15 M1 8 L15 8" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function CircleShape({ size = 20, color = "var(--factory-blue)", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="8" fill="none" stroke={color} strokeWidth="3" />
    </svg>
  );
}

function TriangleShape({ size = 18, color = "var(--factory-mint)", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" className={className} aria-hidden="true">
      <polygon points="9,2 16,16 2,16" fill={color} stroke="var(--factory-dark)" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M6 16 H24 M18 10 L24 16 L18 22" fill="none" stroke="var(--factory-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Section-specific icons */
function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <rect x="3" y="6" width="30" height="26" rx="4" fill="var(--factory-blue)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <rect x="3" y="6" width="30" height="9" rx="4" fill="var(--factory-coral)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <line x1="10" y1="3" x2="10" y2="9" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="3" x2="26" y2="9" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="8" y="19" width="5" height="4" rx="1" fill="var(--factory-cream)" />
      <rect x="16" y="19" width="5" height="4" rx="1" fill="var(--factory-cream)" />
      <rect x="24" y="19" width="5" height="4" rx="1" fill="var(--factory-cream)" />
      <rect x="8" y="26" width="5" height="4" rx="1" fill="var(--factory-cream)" />
      <rect x="16" y="26" width="5" height="4" rx="1" fill="var(--factory-cream)" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <rect x="9" y="3" width="18" height="30" rx="4" fill="var(--factory-pink)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <rect x="12" y="7" width="12" height="18" rx="1" fill="var(--factory-cream)" />
      <circle cx="18" cy="29" r="2" fill="var(--factory-dark)" />
    </svg>
  );
}

function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <path d="M4 6 H32 V24 H16 L8 30 V24 H4 Z" rx="4" fill="var(--factory-orange)" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="12" cy="15" r="2" fill="var(--factory-dark)" />
      <circle cx="18" cy="15" r="2" fill="var(--factory-dark)" />
      <circle cx="24" cy="15" r="2" fill="var(--factory-dark)" />
    </svg>
  );
}

function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <circle cx="18" cy="18" r="14" fill="var(--factory-yellow)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <ellipse cx="18" cy="18" rx="6" ry="14" fill="none" stroke="var(--factory-dark)" strokeWidth="1.5" />
      <line x1="4" y1="18" x2="32" y2="18" stroke="var(--factory-dark)" strokeWidth="1.5" />
      <line x1="7" y1="10" x2="29" y2="10" stroke="var(--factory-dark)" strokeWidth="1" />
      <line x1="7" y1="26" x2="29" y2="26" stroke="var(--factory-dark)" strokeWidth="1" />
    </svg>
  );
}

function ChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <rect x="3" y="3" width="30" height="30" rx="4" fill="var(--factory-mint)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <rect x="8" y="18" width="5" height="12" rx="1" fill="var(--factory-dark)" />
      <rect x="16" y="12" width="5" height="18" rx="1" fill="var(--factory-dark)" />
      <rect x="24" y="8" width="5" height="22" rx="1" fill="var(--factory-dark)" />
    </svg>
  );
}

function BookIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <rect x="6" y="4" width="24" height="28" rx="3" fill="var(--factory-lavender)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <rect x="10" y="4" width="20" height="28" rx="2" fill="var(--factory-cream)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <line x1="14" y1="11" x2="26" y2="11" stroke="var(--factory-dark)" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="17" x2="24" y2="17" stroke="var(--factory-dark)" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="23" x2="22" y2="23" stroke="var(--factory-dark)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}


/* ─────────────────────────────────────────────
   Sections
   ───────────────────────────────────────────── */

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots" />

      {/* Decorative shapes */}
      <GearIcon size={90} className="absolute top-10 left-6 md:left-16 animate-spin-slow opacity-80" />
      <GearIcon size={55} color="var(--factory-pink)" className="absolute top-28 right-8 md:right-20 animate-spin-slow-reverse opacity-80" />
      <GearIcon size={35} color="var(--factory-blue)" className="absolute bottom-36 left-10 animate-spin-slow opacity-60" />

      <StarShape size={30} className="absolute top-24 left-1/4 animate-float" color="var(--factory-orange)" />
      <CrossShape size={20} className="absolute top-44 right-1/4 animate-float-delay-1" />
      <CircleShape size={24} className="absolute bottom-44 right-1/3 animate-float-delay-2" />
      <TriangleShape size={22} className="absolute top-1/3 left-12 animate-float-delay-2" />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className={`mb-8 transition-all duration-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <FactoryIcon className="mx-auto" />
        </div>

        <h1 className={`transition-all duration-700 delay-200 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ fontFamily: "var(--font-dela-gothic)" }}>
          <span className="block text-base md:text-lg text-factory-orange font-bold tracking-widest mb-4 uppercase">
            あったらいいなが自分で作れる！
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-factory-dark leading-[1.1]">
            妄想実現
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl mt-2 leading-[1.1]">
            <span className="relative inline-block">
              <span className="relative z-10 text-factory-dark">ファクトリー</span>
              <span className="absolute bottom-2 md:bottom-3 left-[-4px] right-[-4px] h-4 md:h-6 bg-factory-yellow -skew-x-2" />
            </span>
          </span>
        </h1>

        <p className={`mt-10 text-lg md:text-xl text-factory-dark/80 font-medium leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-500 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          プログラミングができなくても大丈夫。
          <br className="hidden sm:block" />
          AIエージェントと一緒に、
          <span className="relative inline-block font-bold text-factory-dark">
            アイデアを形にできる
            <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 8 Q50 2 100 7 Q150 12 198 4" fill="none" stroke="var(--factory-pink)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          時代がきた。
        </p>

        <div className={`mt-12 transition-all duration-700 delay-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <a href="#what" className="neu-btn inline-flex items-center gap-3 bg-factory-pink text-white font-bold text-lg md:text-xl px-10 py-4 rounded-2xl">
            どういうこと？
            <ArrowRight />
          </a>
        </div>
      </div>

      {/* Conveyor belt */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-factory-dark flex items-center overflow-hidden neu-border border-b-0 border-l-0 border-r-0">
        <div className="animate-conveyor flex whitespace-nowrap">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="inline-flex items-center mx-5 text-sm font-bold gap-2">
              <BoltIcon size={16} />
              <span className="text-factory-yellow">妄想</span>
              <span className="text-white/50">→</span>
              <span className="text-factory-cream">現実</span>
              <StarShape size={12} color="var(--factory-pink)" className="ml-3" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatSection() {
  const { ref, visible } = useReveal();

  const cards = [
    { text: "こんなアプリがあったら便利なのにな…", icon: <LightbulbIcon />, bg: "bg-factory-yellow" },
    { text: "業務のこの作業、自動化できないかな…", icon: <GearIcon size={40} color="var(--factory-pink)" />, bg: "bg-factory-pink" },
    { text: "ITに詳しい人に頼むと高いし時間かかる…", icon: <BoltIcon size={36} />, bg: "bg-factory-blue" },
    { text: "自分のアイデア、形にできたらなぁ…", icon: <StarShape size={36} color="var(--factory-orange)" />, bg: "bg-factory-orange" },
  ];

  return (
    <section id="what" ref={ref} className="relative py-24 md:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            こんなこと、思ったこと
            <br />
            <span className="text-factory-pink">ありませんか？</span>
          </h2>
        </div>

        <div className="mt-14 md:mt-20 grid gap-6 md:grid-cols-2">
          {cards.map((item, i) => (
            <div
              key={i}
              className={`bg-factory-cream p-7 rounded-2xl neu-border neu-shadow-sm card-hover ${visible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.3 + i * 0.12}s` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${item.bg}/20 mb-4`}>
                {item.icon}
              </div>
              <p className="text-lg md:text-xl font-bold leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className={`mt-20 text-center transition-all duration-700 delay-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="inline-block bg-factory-yellow px-10 py-6 rounded-2xl neu-border neu-shadow animate-wiggle">
            <p className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-dela-gothic)" }}>
              それ、全部<span className="text-factory-coral">自分で</span>作れます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowSection() {
  const { ref, visible } = useReveal();

  const steps = [
    {
      num: "01",
      title: "妄想する",
      desc: "「こんなの欲しいな」を日本語で考えるだけ。設計書もコードも不要。",
      icon: <LightbulbIcon />,
      color: "bg-factory-yellow",
    },
    {
      num: "02",
      title: "AIに話しかける",
      desc: "AIエージェントに「こういうの作って」と伝えるだけ。会話するように。",
      icon: <ChatIcon />,
      color: "bg-factory-pink",
    },
    {
      num: "03",
      title: "完成！",
      desc: "AIがコードを書いて、動くものを作ってくれる。あなたは監督するだけ。",
      icon: <StarShape size={40} color="var(--factory-blue)" />,
      color: "bg-factory-blue",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pattern-grid" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <span className="inline-block bg-factory-dark text-factory-yellow px-5 py-2 rounded-full text-sm font-bold mb-5 neu-border border-factory-dark -rotate-1">
            かんたん3ステップ
          </span>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            作り方は<span className="text-factory-orange">びっくりするほど</span>
            <br />シンプル
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <div key={i} className={`relative ${visible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
              {i < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-5 z-10 -translate-y-1/2">
                  <ArrowRight />
                </div>
              )}
              <div className={`${step.color} p-8 rounded-3xl neu-border neu-shadow text-center h-full`}>
                <div className="mx-auto w-16 h-16 flex items-center justify-center mb-5">
                  {step.icon}
                </div>
                <div className="text-5xl font-black text-factory-dark/15 mb-2" style={{ fontFamily: "var(--font-dela-gothic)" }}>
                  {step.num}
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-dela-gothic)" }}>{step.title}</h3>
                <p className="text-base leading-relaxed font-medium text-factory-dark/80">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExamplesSection() {
  const { ref, visible } = useReveal();

  const examples = [
    { title: "自社専用の予約管理アプリ", desc: "お客様の予約をスマホで管理。自分の業務フローにピッタリのものが作れる。", icon: <CalendarIcon />, tag: "業務効率化", color: "border-factory-blue", tagBg: "bg-factory-blue" },
    { title: "自動でSNS投稿を作成", desc: "毎日のSNS投稿文を自動生成。あなたの口調や世界観に合わせてカスタマイズ。", icon: <PhoneIcon />, tag: "マーケティング", color: "border-factory-pink", tagBg: "bg-factory-pink" },
    { title: "お客様対応チャットボット", desc: "よくある質問に24時間自動で回答。夜中の問い合わせにも対応できる。", icon: <ChatIcon />, tag: "顧客対応", color: "border-factory-orange", tagBg: "bg-factory-orange" },
    { title: "オリジナルWebサイト", desc: "テンプレートじゃない、自分だけのサイトを一から構築。このサイトも実はそう。", icon: <GlobeIcon />, tag: "Web制作", color: "border-factory-yellow", tagBg: "bg-factory-yellow text-factory-dark" },
    { title: "データ分析ダッシュボード", desc: "売上データやアクセス解析を見やすくまとめる。経営判断をサポート。", icon: <ChartIcon />, tag: "データ活用", color: "border-factory-mint", tagBg: "bg-factory-mint text-factory-dark" },
    { title: "業務マニュアル自動生成", desc: "散らばった知識やノウハウを、わかりやすいマニュアルに自動整理。", icon: <BookIcon />, tag: "ナレッジ管理", color: "border-factory-lavender", tagBg: "bg-factory-lavender text-factory-dark" },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-5 pattern-diagonal opacity-50" />

      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            たとえば、こんなものが
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">作れちゃう</span>
              <span className="absolute bottom-0 left-[-4px] right-[-4px] h-3 md:h-4 bg-factory-mint -skew-x-1" />
            </span>
          </h2>
          <p className="mt-5 text-lg text-factory-dark/60 font-medium">
            これ全部、プログラミング経験ゼロでも作った人がいます
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex, i) => (
            <div
              key={i}
              className={`bg-factory-cream p-6 rounded-2xl neu-border border-b-[6px] ${ex.color} neu-shadow-sm card-hover ${visible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-5">
                {ex.icon}
                <span className={`${ex.tagBg} text-white text-xs font-bold px-3 py-1.5 rounded-full neu-border`}>
                  {ex.tag}
                </span>
              </div>
              <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-dela-gothic)" }}>{ex.title}</h3>
              <p className="text-sm leading-relaxed text-factory-dark/70">{ex.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyNowSection() {
  const { ref, visible } = useReveal();

  const reasons = [
    { title: "外注コストが激減する", desc: "数十万〜数百万かかっていた開発が、自分の手で実現できる。浮いた予算を本業に回せる。", color: "bg-factory-yellow" },
    { title: "スピードが段違い", desc: "「見積もり→発注→開発→修正」に数ヶ月かかっていたことが、数時間〜数日で完成する。", color: "bg-factory-pink" },
    { title: "自分のビジネスを一番わかってるのは自分", desc: "他人に説明して作ってもらうより、自分で直接形にした方が理想に近いものができる。", color: "bg-factory-blue" },
    { title: "AI技術の進化が加速中", desc: "今日できなかったことが明日できるようになる世界。早く触り始めた人ほど得をする。", color: "bg-factory-orange" },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 bg-factory-dark text-white overflow-hidden">
      <div className="absolute top-10 right-10 opacity-[0.07]">
        <GearIcon size={140} color="white" className="animate-spin-slow" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-[0.07]">
        <GearIcon size={100} color="white" className="animate-spin-slow-reverse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`text-center transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            なぜ<span className="text-factory-yellow">今</span>なのか
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {reasons.map((item, i) => (
            <div
              key={i}
              className={`${item.color} text-factory-dark p-7 rounded-2xl neu-border neu-shadow-sm card-hover ${visible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.3 + i * 0.12}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-black opacity-20" style={{ fontFamily: "var(--font-dela-gothic)" }}>0{i + 1}</span>
                <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-dela-gothic)" }}>{item.title}</h3>
              </div>
              <p className="text-factory-dark/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VoicesSection() {
  const { ref, visible } = useReveal();

  const voices = [
    { text: "え、マジで動いた！って声が出ました。自分でアプリ作れるなんて思ってなかった。", name: "個人サロン経営", role: "40代女性", accent: "border-factory-pink" },
    { text: "外注に出してた業務ツールを自分で作り直せた。年間100万以上の節約になってます。", name: "Web制作会社経営", role: "30代男性", accent: "border-factory-blue" },
    { text: "プログラミングは全くわかりません。でも今では自分のサービスのプロトタイプを作って人に見せてます。", name: "コンサルタント", role: "50代男性", accent: "border-factory-orange" },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 relative">
      <div className="absolute inset-0 pattern-dots" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            やってみた人の<span className="text-factory-coral">声</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {voices.map((v, i) => (
            <div
              key={i}
              className={`bg-white p-7 rounded-2xl neu-border ${v.accent} border-l-[6px] neu-shadow-sm ${visible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.3 + i * 0.12}s` }}
            >
              {/* Quote mark */}
              <svg width="28" height="20" viewBox="0 0 28 20" className="mb-4 opacity-20" aria-hidden="true">
                <path d="M0 20V12C0 5.4 2.8 1.6 8.4 0L10 2.8C7.2 4 5.6 6 5.2 8.8H10V20H0ZM16 20V12C16 5.4 18.8 1.6 24.4 0L26 2.8C23.2 4 21.6 6 21.2 8.8H26V20H16Z" fill="var(--factory-dark)" />
              </svg>
              <p className="text-base leading-relaxed mb-5">{v.text}</p>
              <div className="border-t-2 border-factory-dark/10 pt-4">
                <p className="text-sm font-bold">{v.name}</p>
                <p className="text-xs text-factory-dark/50 mt-0.5">{v.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConveyorBelt() {
  return (
    <div className="bg-factory-dark py-4 overflow-hidden neu-border border-l-0 border-r-0">
      <div className="animate-conveyor flex whitespace-nowrap">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="inline-flex items-center mx-6 text-base font-bold gap-3">
            <span className="text-factory-yellow">妄想</span>
            <span className="text-white/40">→</span>
            <span className="text-factory-pink">設計</span>
            <span className="text-white/40">→</span>
            <span className="text-factory-blue">製造</span>
            <span className="text-white/40">→</span>
            <span className="text-factory-mint">完成</span>
            <StarShape size={14} color="var(--factory-orange)" className="ml-4" />
          </span>
        ))}
      </div>
    </div>
  );
}

function CTASection() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <FactoryIcon className="mx-auto mb-8 animate-float" />
          <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            あなたの妄想、
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-factory-coral">形にしませんか？</span>
              <span className="absolute bottom-1 left-[-4px] right-[-4px] h-4 md:h-5 bg-factory-yellow/40 -skew-x-1" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-factory-dark/70 leading-relaxed mb-12 max-w-xl mx-auto">
            「自分には無理」と思っていたものづくりが、AIエージェントの力で、
            <span className="font-bold text-factory-dark">誰でもできる時代</span>になりました。
            <br /><br />
            まずは一つ、小さな妄想から始めてみませんか？
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-5 justify-center items-center transition-all duration-700 delay-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <a href="#" className="neu-btn inline-flex items-center gap-3 bg-factory-coral text-white font-bold text-lg md:text-xl px-10 py-5 rounded-2xl">
            はじめてみる
            <ArrowRight />
          </a>
          <a href="#" className="neu-btn inline-block bg-factory-cream text-factory-dark font-bold text-lg px-8 py-5 rounded-2xl">
            もっと詳しく知る
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-factory-dark text-white py-12 px-4 neu-border border-b-0 border-l-0 border-r-0">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FactoryIcon className="[&_rect]:fill-factory-yellow [&_circle]:fill-factory-dark" />
          <span className="text-xl text-factory-yellow" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            妄想実現ファクトリー
          </span>
        </div>
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} 妄想実現ファクトリー. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatSection />
      <HowSection />
      <ExamplesSection />
      <WhyNowSection />
      <VoicesSection />
      <ConveyorBelt />
      <CTASection />
      <Footer />
    </>
  );
}
