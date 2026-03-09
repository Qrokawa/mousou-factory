"use client";

import { useEffect, useState } from "react";
import { useReveal, ConveyorBelt, Footer } from "./components/shared";
import {
  GearIcon, FactoryIcon, LightbulbIcon, BoltIcon, StarShape,
  CrossShape, CircleShape, TriangleShape, ArrowRight, ChatIcon,
  CalendarIcon, PhoneIcon, GlobeIcon, ChartIcon, BookIcon, QuoteMark,
} from "./components/icons";

/* ─── Sections ─── */

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-12 pb-20 overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />

      <GearIcon size={90} className="absolute top-10 left-6 md:left-16 animate-spin-slow opacity-80" />
      <GearIcon size={55} color="var(--factory-pink)" className="absolute top-28 right-8 md:right-20 animate-spin-slow-reverse opacity-80" />
      <GearIcon size={35} color="var(--factory-blue)" className="absolute bottom-36 left-10 animate-spin-slow opacity-60" />

      <StarShape size={30} className="absolute top-24 left-1/4 animate-float" color="var(--factory-orange)" />
      <CrossShape size={20} className="absolute top-44 right-1/4 animate-float-delay-1" />
      <CircleShape size={24} className="absolute bottom-44 right-1/3 animate-float-delay-2" />
      <TriangleShape size={22} className="absolute top-1/3 left-12 animate-float-delay-2" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className={`mb-8 transition-all duration-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <FactoryIcon className="mx-auto" />
        </div>

        <h1 className={`transition-all duration-700 delay-200 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ fontFamily: "var(--font-kiwi-maru)" }}>
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
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            こんなこと、思ったこと<br /><span className="text-factory-pink">ありませんか？</span>
          </h2>
        </div>
        <div className="mt-14 md:mt-20 grid gap-6 md:grid-cols-2">
          {cards.map((item, i) => (
            <div key={i} className={`bg-factory-cream p-7 rounded-2xl neu-border neu-shadow-sm card-hover ${visible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${item.bg}/20 mb-4`}>{item.icon}</div>
              <p className="text-lg md:text-xl font-bold leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className={`mt-20 text-center transition-all duration-700 delay-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="inline-block bg-factory-yellow px-10 py-6 rounded-2xl neu-border neu-shadow animate-wiggle">
            <p className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
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
    { num: "01", title: "妄想する", desc: "「こんなの欲しいな」を日本語で考えるだけ。設計書もコードも不要。", icon: <LightbulbIcon />, color: "bg-factory-yellow" },
    { num: "02", title: "AIに話しかける", desc: "AIエージェントに「こういうの作って」と伝えるだけ。会話するように。", icon: <ChatIcon />, color: "bg-factory-pink" },
    { num: "03", title: "完成！", desc: "AIがコードを書いて、動くものを作ってくれる。あなたは監督するだけ。", icon: <StarShape size={40} color="var(--factory-blue)" />, color: "bg-factory-blue" },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pattern-grid" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <span className="inline-block bg-factory-dark text-factory-yellow px-5 py-2 rounded-full text-sm font-bold mb-5 neu-border border-factory-dark -rotate-1">
            かんたん3ステップ
          </span>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            作り方は<span className="text-factory-orange">びっくりするほど</span><br />シンプル
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <div key={i} className={`relative ${visible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
              {i < 2 && <div className="hidden md:flex absolute top-1/2 -right-5 z-10 -translate-y-1/2"><ArrowRight /></div>}
              <div className={`${step.color} p-8 rounded-3xl neu-border neu-shadow text-center h-full`}>
                <div className="mx-auto w-16 h-16 flex items-center justify-center mb-5">{step.icon}</div>
                <div className="text-5xl font-black text-factory-dark/15 mb-2" style={{ fontFamily: "var(--font-kiwi-maru)" }}>{step.num}</div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-kiwi-maru)" }}>{step.title}</h3>
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
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            たとえば、こんなものが<br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">作れちゃう</span>
              <span className="absolute bottom-0 left-[-4px] right-[-4px] h-3 md:h-4 bg-factory-mint -skew-x-1" />
            </span>
          </h2>
          <p className="mt-5 text-lg text-factory-dark/60 font-medium">これ全部、プログラミング経験ゼロでも作った人がいます</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex, i) => (
            <div key={i} className={`bg-factory-cream p-6 rounded-2xl neu-border border-b-[6px] ${ex.color} neu-shadow-sm card-hover ${visible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
              <div className="flex items-start justify-between mb-5">
                {ex.icon}
                <span className={`${ex.tagBg} text-white text-xs font-bold px-3 py-1.5 rounded-full neu-border`}>{ex.tag}</span>
              </div>
              <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-kiwi-maru)" }}>{ex.title}</h3>
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
      <div className="absolute top-10 right-10 opacity-[0.07]"><GearIcon size={140} color="white" className="animate-spin-slow" /></div>
      <div className="absolute bottom-10 left-10 opacity-[0.07]"><GearIcon size={100} color="white" className="animate-spin-slow-reverse" /></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`text-center transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            なぜ<span className="text-factory-yellow">今</span>なのか
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {reasons.map((item, i) => (
            <div key={i} className={`${item.color} text-factory-dark p-7 rounded-2xl neu-border neu-shadow-sm card-hover ${visible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-black opacity-20" style={{ fontFamily: "var(--font-kiwi-maru)" }}>0{i + 1}</span>
                <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-kiwi-maru)" }}>{item.title}</h3>
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
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            やってみた人の<span className="text-factory-coral">声</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {voices.map((v, i) => (
            <div key={i} className={`bg-white p-7 rounded-2xl neu-border ${v.accent} border-l-[6px] neu-shadow-sm ${visible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
              <QuoteMark className="mb-4 opacity-20" />
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

function CTASection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <FactoryIcon className="mx-auto mb-8 animate-float" />
          <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            あなたの妄想、<br />
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
          <a href="/contact" className="neu-btn inline-flex items-center gap-3 bg-factory-coral text-white font-bold text-lg md:text-xl px-10 py-5 rounded-2xl">
            はじめてみる
            <ArrowRight />
          </a>
          <a href="/learn-more" className="neu-btn inline-block bg-factory-cream text-factory-dark font-bold text-lg px-8 py-5 rounded-2xl cursor-pointer">
            もっと詳しく知る
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */

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
