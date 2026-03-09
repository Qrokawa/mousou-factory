"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FactoryIcon, StarShape } from "./icons";

export function useReveal() {
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

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-factory-cream/90 backdrop-blur-sm neu-border border-t-0 border-l-0 border-r-0">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <FactoryIcon className="w-10 h-10 [&>svg]{w-10 h-10}" />
          <span className="text-base font-bold text-factory-dark" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
            妄想実現ファクトリー
          </span>
        </Link>
        <Link href="/" className="neu-btn bg-factory-yellow text-factory-dark text-sm font-bold px-5 py-2 rounded-xl">
          トップに戻る
        </Link>
      </div>
    </header>
  );
}

export function ConveyorBelt() {
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

export function Footer() {
  return (
    <footer className="bg-factory-dark text-white py-12 px-4 neu-border border-b-0 border-l-0 border-r-0">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FactoryIcon />
          <span className="text-xl text-factory-yellow" style={{ fontFamily: "var(--font-kiwi-maru)" }}>
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
