"use client";

import { useState } from "react";
import { Metadata } from "next";
import { useReveal, SiteHeader, ConveyorBelt, Footer } from "../components/shared";
import {
  GearIcon, FactoryIcon, LightbulbIcon, BoltIcon, StarShape,
  CrossShape, CircleShape, ArrowRight, ChatIcon, CalendarIcon,
  GlobeIcon, ChartIcon, QuoteMark, ShieldIcon, ClockIcon,
  WalletIcon, ToolIcon, ChevronDown,
} from "../components/icons";

/* ─── Hero ─── */

function PageHero() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pattern-grid" />
      <GearIcon size={70} className="absolute top-8 right-10 animate-spin-slow opacity-60" />
      <StarShape size={28} className="absolute top-16 left-16 animate-float" color="var(--factory-orange)" />
      <CrossShape size={18} className="absolute bottom-20 right-1/4 animate-float-delay-1" />
      <CircleShape size={22} className="absolute bottom-16 left-20 animate-float-delay-2" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <span className="inline-block bg-factory-pink text-white px-5 py-2 rounded-full text-sm font-bold mb-6 neu-border border-factory-dark -rotate-1">
            もっと詳しく知る
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            AIエージェントって、
            <br />
            <span className="text-factory-blue">結局なに？</span>
          </h1>
          <p className="text-lg md:text-xl text-factory-dark/70 leading-relaxed max-w-2xl mx-auto">
            プログラミングなしで「ものづくり」ができる仕組みを、
            <br className="hidden md:block" />
            わかりやすく解説します。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── What is AI Agent ─── */

function WhatIsSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            AIエージェントを<span className="text-factory-orange">知ろう</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before card */}
          <div className={`bg-factory-cream p-8 rounded-2xl neu-border neu-shadow-sm ${visible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-5">
              <ChatIcon />
              <span className="bg-factory-dark/10 text-factory-dark text-sm font-bold px-4 py-1.5 rounded-full">従来のAI</span>
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-dela-gothic)" }}>
              質問すると答えが返ってくる
            </h3>
            <p className="text-factory-dark/70 leading-relaxed">
              「〇〇について教えて」と聞くと、テキストで回答してくれる。便利だけど、それ以上のことはしてくれない。あくまで「おしゃべり相手」。
            </p>
          </div>

          {/* After card */}
          <div className={`bg-factory-yellow p-8 rounded-2xl neu-border neu-shadow-sm ${visible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "0.35s" }}>
            <div className="flex items-center gap-3 mb-5">
              <ToolIcon />
              <span className="bg-factory-dark text-factory-yellow text-sm font-bold px-4 py-1.5 rounded-full">AIエージェント</span>
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-dela-gothic)" }}>
              指示すると、実際に作業してくれる
            </h3>
            <p className="text-factory-dark/80 leading-relaxed">
              「予約管理アプリを作って」と伝えると、自分で考えて、コードを書いて、ファイルを作って、テストまでしてくれる。「一緒に働く仲間」。
            </p>
          </div>
        </div>

        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="text-lg md:text-xl text-factory-dark/70 leading-relaxed max-w-2xl mx-auto">
            つまり、<span className="font-bold text-factory-dark">「おしゃべり相手」から「一緒に働く仲間」</span>に進化したのがAIエージェントです。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Detailed Process ─── */

function ProcessSection() {
  const { ref, visible } = useReveal();
  const steps = [
    {
      num: "01",
      title: "やりたいことを言葉にする",
      desc: "難しく考えなくて大丈夫。「お客さんの予約を管理できるアプリが欲しい。カレンダー表示があって、スマホから使えるようにして」——これくらいで十分です。",
      icon: <LightbulbIcon />,
      color: "border-factory-yellow",
      bg: "bg-factory-yellow/10",
    },
    {
      num: "02",
      title: "AIエージェントに伝える",
      desc: "Claude CodeやCursorなどのツールを開いて、さっきの言葉をそのまま入力するだけ。専門用語は不要。日本語の普通の文章で伝わります。",
      icon: <ChatIcon />,
      color: "border-factory-pink",
      bg: "bg-factory-pink/10",
    },
    {
      num: "03",
      title: "AIが設計・コーディングする",
      desc: "ここが自動。AIがあなたの代わりにコードを書き、ファイルを作り、必要な部品を組み立てていきます。裏側でどんどんものが出来上がっていく。",
      icon: <GearIcon size={36} color="var(--factory-blue)" />,
      color: "border-factory-blue",
      bg: "bg-factory-blue/10",
    },
    {
      num: "04",
      title: "確認して修正を指示する",
      desc: "出来上がったものを見て、「ここの色を変えて」「この機能を追加して」と会話で調整。何度でもやり直せるので、完璧を目指さなくて大丈夫。",
      icon: <BoltIcon />,
      color: "border-factory-orange",
      bg: "bg-factory-orange/10",
    },
    {
      num: "05",
      title: "公開・運用する",
      desc: "完成したらWebに公開したり、スマホで使えるようにしたり。AIエージェントがデプロイまでサポートしてくれることも多いです。",
      icon: <GlobeIcon />,
      color: "border-factory-mint",
      bg: "bg-factory-mint/10",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 relative">
      <div className="absolute inset-0 pattern-dots" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            実際の作り方を
            <br />
            <span className="text-factory-blue">もう少し詳しく</span>
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i} className={`relative ${visible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: `${0.2 + i * 0.12}s` }}>
              {/* Timeline connector */}
              {i < steps.length - 1 && (
                <div className={`absolute left-7 top-full w-0.5 h-6 ${step.color} border-l-[3px] border-dashed`} />
              )}
              <div className={`${step.bg} p-6 md:p-8 rounded-2xl neu-border ${step.color} border-l-[6px] neu-shadow-sm mb-6`}>
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-1">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-black text-factory-dark/20" style={{ fontFamily: "var(--font-dela-gothic)" }}>{step.num}</span>
                      <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-dela-gothic)" }}>{step.title}</h3>
                    </div>
                    <p className="text-factory-dark/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Tools Section ─── */

function ToolsSection() {
  const { ref, visible } = useReveal();
  const tools = [
    {
      name: "Claude Code",
      desc: "会話するだけでアプリが作れるAIエージェント。このサイトもClaudeで作りました。ターミナル上で動き、ファイルの作成から公開まで全てサポート。",
      color: "bg-factory-yellow",
    },
    {
      name: "Cursor",
      desc: "コードエディタにAIが内蔵された開発ツール。画面上でコードが出来上がっていく様子が見えるので、プログラマーでなくても直感的に操作できる。",
      color: "bg-factory-pink",
    },
    {
      name: "v0 / bolt.new",
      desc: "WebのUIをAIが自動デザインしてくれるツール。「こんな見た目のサイトが欲しい」と伝えるだけで、デザインからコードまで一気に生成。",
      color: "bg-factory-blue",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-factory-dark text-white overflow-hidden">
      <div className="absolute top-10 left-10 opacity-[0.05]">
        <GearIcon size={120} color="white" className="animate-spin-slow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            どんな<span className="text-factory-yellow">ツール</span>を使うの？
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`${tool.color} text-factory-dark p-7 rounded-2xl neu-border neu-shadow-sm card-hover ${visible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <h3 className="text-xl mb-4 font-bold" style={{ fontFamily: "var(--font-dela-gothic)" }}>{tool.name}</h3>
              <p className="text-factory-dark/80 leading-relaxed text-sm">{tool.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            ツールは日々進化しています。大事なのは「どれが正解か」ではなく、<span className="text-factory-yellow font-bold">「まず触ってみること」</span>です。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Case Studies ─── */

function CaseStudiesSection() {
  const { ref, visible } = useReveal();
  const cases = [
    {
      title: "個人サロン経営者が作った予約管理アプリ",
      challenge: "紙の予約台帳とLINEでの手動管理が限界に。ダブルブッキングも頻発して、お客様に迷惑をかけてしまっていた。",
      action: "「LINEの予約をカレンダーで見られるようにして、重複チェックもしてほしい」とAIエージェントに伝えた。3日間の会話で基本機能が完成。",
      result: "予約管理の時間が1日30分→5分に。ダブルブッキングはゼロに。空いた時間で新メニューの開発ができるように。",
      quote: "え、マジで動いた！って声が出ました。自分でアプリ作れるなんて思ってなかった。",
      person: "個人サロン経営 / 40代女性",
      accent: "border-factory-pink",
      icon: <CalendarIcon />,
    },
    {
      title: "Web制作会社が内製化した業務ツール",
      challenge: "クライアントへの月次レポート作成に毎月20時間以上かかっていた。Googleアナリティクスからデータを手動で転記する作業が苦痛。",
      action: "「GA4のデータを自動で取得して、いい感じのレポートPDFにまとめてくれるツール」を依頼。1週間の開発で自動化に成功。",
      result: "レポート作成が月20時間→1時間に。外注していた分析ツールも不要になり、年間100万以上のコスト削減。",
      quote: "外注に出してた業務ツールを自分で作り直せた。年間100万以上の節約になってます。",
      person: "Web制作会社経営 / 30代男性",
      accent: "border-factory-blue",
      icon: <ChartIcon />,
    },
    {
      title: "コンサルタントが作ったサービスのプロトタイプ",
      challenge: "新しいコンサルサービスのアイデアはあるが、クライアントにうまく伝えられない。パワポの説明では限界があった。",
      action: "「このサービスを体験できるデモサイト」をAIエージェントと一緒に構築。実際に動くプロトタイプで提案。",
      result: "プロトタイプを見せた瞬間にクライアントが「これ欲しい」と即決。成約率が大幅に向上。",
      quote: "プログラミングは全くわかりません。でも今では自分のサービスのプロトタイプを作って人に見せてます。",
      person: "コンサルタント / 50代男性",
      accent: "border-factory-orange",
      icon: <GlobeIcon />,
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            実際に作った人の<span className="text-factory-coral">ストーリー</span>
          </h2>
        </div>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`bg-factory-cream p-8 md:p-10 rounded-2xl neu-border ${c.accent} border-l-[6px] neu-shadow-sm ${visible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                {c.icon}
                <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "var(--font-dela-gothic)" }}>
                  {c.title}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="inline-block bg-factory-dark text-white text-xs font-bold px-3 py-1 rounded-full mb-2">課題</span>
                  <p className="text-factory-dark/70 leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <span className="inline-block bg-factory-blue text-white text-xs font-bold px-3 py-1 rounded-full mb-2">やったこと</span>
                  <p className="text-factory-dark/70 leading-relaxed">{c.action}</p>
                </div>
                <div>
                  <span className="inline-block bg-factory-coral text-white text-xs font-bold px-3 py-1 rounded-full mb-2">結果</span>
                  <p className="text-factory-dark/80 leading-relaxed font-medium">{c.result}</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl neu-border">
                <QuoteMark className="mb-2 opacity-15" />
                <p className="text-base leading-relaxed italic mb-3">{c.quote}</p>
                <p className="text-sm text-factory-dark/50 font-bold">{c.person}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-factory-cream rounded-2xl neu-border neu-shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
      >
        <span className="text-base md:text-lg font-bold">{question}</span>
        <ChevronDown
          size={24}
          className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6 text-factory-dark/70 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const { ref, visible } = useReveal();
  const faqs = [
    {
      q: "プログラミングの知識は本当に不要ですか？",
      a: "はい、不要です。AIエージェントは日本語の指示で動きます。「予約管理アプリを作って」「色を青に変えて」のように、普段の言葉で伝えれば大丈夫です。ただし、プログラミングの基礎知識があると、より複雑なものが作れるようになります。",
    },
    {
      q: "どのくらいの時間で作れますか？",
      a: "簡単なツールなら数時間、本格的なアプリでも数日〜1週間程度です。従来の外注開発が数ヶ月かかることを考えると、圧倒的に速いです。もちろん、作りたいものの複雑さによって変わります。",
    },
    {
      q: "費用はどのくらいかかりますか？",
      a: "AIツールの利用料は月額2,000円〜5,000円程度。外注で数十万〜数百万かかるものが、この程度の費用で作れます。無料で使えるツールもあるので、まずはそこから始めるのがおすすめです。",
    },
    {
      q: "セキュリティは大丈夫ですか？",
      a: "AIが生成するコード自体は一般的な技術で書かれているので、適切なセキュリティ対策は必要です。ただし、個人情報を扱うような本格的なシステムの場合は、専門家のレビューを受けることをおすすめします。",
    },
    {
      q: "スマホだけで作れますか？",
      a: "一部のツール（v0やbolt.newなど）はブラウザ上で動作するので、スマホからでもアクセスは可能です。ただし、本格的な開発をするなら、パソコンを使う方が圧倒的に効率が良いです。",
    },
    {
      q: "作ったものを商用利用できますか？",
      a: "はい、できます。AIエージェントを使って作ったものの著作権はあなたにあります。自社のサービスとして提供したり、販売したりすることに制約はありません。",
    },
    {
      q: "AIが作ったコードの品質は信頼できますか？",
      a: "最新のAIエージェントが書くコードの品質は、年々向上しています。ただし、完璧ではないので、動作確認は必ず行いましょう。重要なシステムでは、専門家にレビューしてもらうことも選択肢です。",
    },
    {
      q: "どこから始めればいいですか？",
      a: "まずは無料で使えるツールに触ってみましょう。小さなもの——たとえば「今日のタスクを管理するアプリ」のような簡単なものから始めて、徐々にステップアップするのがおすすめです。",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 relative">
      <div className="absolute inset-0 pattern-grid" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            よくある<span className="text-factory-pink">質問</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${visible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.06}s` }}
            >
              <FAQItem question={faq.q} answer={faq.a} defaultOpen={i === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Reassurance Section ─── */

function ReassuranceSection() {
  const { ref, visible } = useReveal();
  const items = [
    {
      title: "失敗してもやり直せる",
      desc: "AIとの会話は何度でもやり直せます。「違う、こうして」と言えば即修正。コストはほぼゼロ。試行錯誤こそが上達への近道。",
      icon: <ShieldIcon />,
      color: "bg-factory-yellow",
    },
    {
      title: "小さく始められる",
      desc: "いきなり本格的なシステムを作る必要はありません。メモアプリ、簡単な計算ツール、自己紹介サイト——小さな成功体験から始めましょう。",
      icon: <StarShape size={36} color="var(--factory-mint)" />,
      color: "bg-factory-mint",
    },
    {
      title: "一人じゃない",
      desc: "AIエージェントは24時間365日、あなたの相談に乗ってくれるパートナー。「わからない」と言えば、丁寧に説明してくれます。",
      icon: <FactoryIcon className="w-9 h-9" />,
      color: "bg-factory-lavender",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            一歩踏み出すのが
            <br />
            <span className="text-factory-coral">不安な方へ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${item.color} p-7 rounded-2xl neu-border neu-shadow-sm card-hover ${visible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-dela-gothic)" }}>{item.title}</h3>
              <p className="text-factory-dark/70 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */

function CTASection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <FactoryIcon className="mx-auto mb-8 animate-float" />
          <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-dela-gothic)" }}>
            さあ、最初の一歩を
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-factory-coral">踏み出そう</span>
              <span className="absolute bottom-1 left-[-4px] right-[-4px] h-4 md:h-5 bg-factory-yellow/40 -skew-x-1" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-factory-dark/70 leading-relaxed mb-12 max-w-xl mx-auto">
            難しいことは考えなくて大丈夫。
            <br />
            まずは無料のAIツールに触れてみることから。
            <br />
            <span className="font-bold text-factory-dark">5分後にはあなたも「作る人」になっている。</span>
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-5 justify-center items-center transition-all duration-700 delay-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <a href="#" className="neu-btn inline-flex items-center gap-3 bg-factory-coral text-white font-bold text-lg md:text-xl px-10 py-5 rounded-2xl">
            無料で始める
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

export default function LearnMore() {
  return (
    <>
      <SiteHeader />
      <PageHero />
      <WhatIsSection />
      <ProcessSection />
      <ToolsSection />
      <CaseStudiesSection />
      <FAQSection />
      <ReassuranceSection />
      <ConveyorBelt />
      <CTASection />
      <Footer />
    </>
  );
}
