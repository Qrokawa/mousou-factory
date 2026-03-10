"use client";

import { useState, useRef, useEffect } from "react";
import { useReveal, SiteHeader, Footer } from "../components/shared";
import {
  FactoryIcon, StarShape, CrossShape, CircleShape, GearIcon,
  ArrowRight, ChatIcon, BoltIcon, LightbulbIcon,
} from "../components/icons";

const SUPABASE_URL = "https://czybygjotlgvpjjwehdl.supabase.co";

/* ─── Chat Component ─── */

interface Message {
  role: "user" | "assistant";
  content: string;
}

function generateSessionId() {
  return `s_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "こんにちは！妄想実現ファクトリーへようこそ。\n\n「こんなもの作りたい」「AIで何ができるの？」など、なんでも気軽に聞いてくださいね！" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(generateSessionId);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/factory-chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          session_id: sessionId,
        }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "すみません、うまく回答できませんでした。もう一度お試しください。" }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "通信エラーが発生しました。しばらくしてからもう一度お試しください。" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-factory-cream rounded-3xl neu-border neu-shadow overflow-hidden">
      {/* Header */}
      <div className="bg-factory-dark px-6 py-4 flex items-center gap-3">
        <FactoryIcon className="w-8 h-8 [&>svg]{w-8 h-8}" />
        <div>
          <p className="text-factory-yellow font-bold text-sm" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            妄想実現ファクトリー
          </p>
          <p className="text-white/50 text-xs">AIアシスタント</p>
        </div>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/40 text-xs">オンライン</span>
        </span>
      </div>

      {/* Messages */}
      <div className="h-[400px] overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm md:text-base leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-factory-coral text-white rounded-br-md"
                  : "bg-white neu-border rounded-bl-md"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white neu-border px-4 py-3 rounded-2xl rounded-bl-md">
              <span className="flex gap-1.5">
                <span className="w-2 h-2 bg-factory-dark/30 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-factory-dark/30 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-factory-dark/30 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t-3 border-factory-dark p-4">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="メッセージを入力..."
            className="flex-1 bg-white px-4 py-3 rounded-xl neu-border text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-factory-coral/50"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="neu-btn bg-factory-coral text-white font-bold px-5 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRight />
          </button>
        </form>
      </div>
    </div>
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
          <span className="inline-block bg-factory-coral text-white px-5 py-2 rounded-full text-sm font-bold mb-6 neu-border border-factory-dark -rotate-1">
            無料で相談できます
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            あなたの<span className="text-factory-coral">妄想</span>、
            <br />
            聞かせてください
          </h1>
          <p className="text-lg md:text-xl text-factory-dark/70 leading-relaxed max-w-2xl mx-auto">
            「こんなの作れる？」「何から始めればいい？」
            <br className="hidden md:block" />
            どんな小さな疑問でもAIアシスタントがお答えします。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Chat Section ─── */

function ChatSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref} className="py-8 md:py-16 px-4 bg-white">
      <div className={`max-w-2xl mx-auto transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
        <ChatBot />
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
      desc: "「こんなの作りたい」を伝えるだけ。実現可能性やおすすめのアプローチを一緒に考えます。",
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
      title: "24時間いつでも相談OK",
      desc: "AIアシスタントだから、深夜でも早朝でも。思いついた瞬間に気軽に話しかけてください。",
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
            チャットで<span className="text-factory-orange">できること</span>
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

/* ─── Page ─── */

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <ContactHero />
      <ChatSection />
      <BenefitsSection />
      <Footer />
    </>
  );
}
