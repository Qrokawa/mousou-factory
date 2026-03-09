/* SVG Icon components shared across pages */

export function GearIcon({ size = 48, color = "var(--factory-yellow)", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M50 15 L55 25 L65 20 L63 32 L75 32 L68 42 L78 48 L68 52 L75 62 L63 58 L65 70 L55 65 L50 75 L45 65 L35 70 L37 58 L25 62 L32 52 L22 48 L32 42 L25 32 L37 32 L35 20 L45 25 Z" fill={color} stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="50" cy="45" r="10" fill="var(--factory-cream)" stroke="var(--factory-dark)" strokeWidth="2.5" />
    </svg>
  );
}

export function FactoryIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" className={className} aria-hidden="true">
      <rect x="12" y="8" width="10" height="24" rx="2" fill="var(--factory-coral)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <rect x="28" y="16" width="8" height="16" rx="2" fill="var(--factory-orange)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <circle cx="17" cy="6" r="4" fill="var(--factory-dark)" opacity="0.12" />
      <circle cx="22" cy="3" r="3" fill="var(--factory-dark)" opacity="0.08" />
      <rect x="4" y="32" width="64" height="32" rx="4" fill="var(--factory-yellow)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <path d="M4 36 L68 36" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <rect x="12" y="42" width="10" height="10" rx="2" fill="var(--factory-cream)" stroke="var(--factory-dark)" strokeWidth="2" />
      <rect x="31" y="42" width="10" height="10" rx="2" fill="var(--factory-cream)" stroke="var(--factory-dark)" strokeWidth="2" />
      <rect x="50" y="42" width="10" height="10" rx="2" fill="var(--factory-cream)" stroke="var(--factory-dark)" strokeWidth="2" />
      <rect x="28" y="54" width="16" height="12" rx="2" fill="var(--factory-blue)" stroke="var(--factory-dark)" strokeWidth="2" />
    </svg>
  );
}

export function LightbulbIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M20 4 C12 4 6 10 6 18 C6 23 9 27 13 29 L13 34 L27 34 L27 29 C31 27 34 23 34 18 C34 10 28 4 20 4Z" fill="var(--factory-yellow)" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="14" y="34" width="12" height="3" rx="1.5" fill="var(--factory-dark)" />
      <line x1="20" y1="0" x2="20" y2="2" stroke="var(--factory-orange)" strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="6" x2="32" y2="7.5" stroke="var(--factory-orange)" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="6" x2="8" y2="7.5" stroke="var(--factory-orange)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BoltIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M18 2 L6 18 H15 L13 30 L26 14 H17 Z" fill="var(--factory-orange)" stroke="var(--factory-dark)" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function StarShape({ size = 24, color = "var(--factory-yellow)", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 2 L13.5 9.5 L21 9.5 L15 14 L17 21.5 L12 17 L7 21.5 L9 14 L3 9.5 L10.5 9.5 Z" fill={color} stroke="var(--factory-dark)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function CrossShape({ size = 16, color = "var(--factory-pink)", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M8 1 L8 15 M1 8 L15 8" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function CircleShape({ size = 20, color = "var(--factory-blue)", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="8" fill="none" stroke={color} strokeWidth="3" />
    </svg>
  );
}

export function TriangleShape({ size = 18, color = "var(--factory-mint)", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" className={className} aria-hidden="true">
      <polygon points="9,2 16,16 2,16" fill={color} stroke="var(--factory-dark)" strokeWidth="1.5" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M6 16 H24 M18 10 L24 16 L18 22" fill="none" stroke="var(--factory-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <path d="M4 6 H32 V24 H16 L8 30 V24 H4 Z" fill="var(--factory-orange)" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="12" cy="15" r="2" fill="var(--factory-dark)" />
      <circle cx="18" cy="15" r="2" fill="var(--factory-dark)" />
      <circle cx="24" cy="15" r="2" fill="var(--factory-dark)" />
    </svg>
  );
}

export function CalendarIcon({ className = "" }: { className?: string }) {
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

export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <rect x="9" y="3" width="18" height="30" rx="4" fill="var(--factory-pink)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <rect x="12" y="7" width="12" height="18" rx="1" fill="var(--factory-cream)" />
      <circle cx="18" cy="29" r="2" fill="var(--factory-dark)" />
    </svg>
  );
}

export function GlobeIcon({ className = "" }: { className?: string }) {
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

export function ChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <rect x="3" y="3" width="30" height="30" rx="4" fill="var(--factory-mint)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <rect x="8" y="18" width="5" height="12" rx="1" fill="var(--factory-dark)" />
      <rect x="16" y="12" width="5" height="18" rx="1" fill="var(--factory-dark)" />
      <rect x="24" y="8" width="5" height="22" rx="1" fill="var(--factory-dark)" />
    </svg>
  );
}

export function BookIcon({ className = "" }: { className?: string }) {
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

export function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" className={className} aria-hidden="true">
      <path d="M0 20V12C0 5.4 2.8 1.6 8.4 0L10 2.8C7.2 4 5.6 6 5.2 8.8H10V20H0ZM16 20V12C16 5.4 18.8 1.6 24.4 0L26 2.8C23.2 4 21.6 6 21.2 8.8H26V20H16Z" fill="var(--factory-dark)" />
    </svg>
  );
}

export function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <path d="M18 3 L4 10 V20 C4 28 18 33 18 33 C18 33 32 28 32 20 V10 Z" fill="var(--factory-mint)" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M13 18 L16 21 L23 14" fill="none" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <circle cx="18" cy="18" r="14" fill="var(--factory-yellow)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <line x1="18" y1="10" x2="18" y2="18" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="18" x2="24" y2="22" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="18" cy="18" r="2" fill="var(--factory-dark)" />
    </svg>
  );
}

export function WalletIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <rect x="3" y="8" width="30" height="22" rx="4" fill="var(--factory-blue)" stroke="var(--factory-dark)" strokeWidth="2.5" />
      <rect x="22" y="15" width="11" height="8" rx="2" fill="var(--factory-cream)" stroke="var(--factory-dark)" strokeWidth="2" />
      <circle cx="27" cy="19" r="2" fill="var(--factory-dark)" />
      <path d="M8 8 V6 C8 4.5 9.5 3 11 3 H28" fill="none" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ToolIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className={className} aria-hidden="true">
      <path d="M22 6 C19 3 14 3 11 6 C8.5 8.5 8 12 9.5 15 L4 27 L9 32 L21 26.5 C24 28 27.5 27.5 30 25 C33 22 33 17 30 14 Z" fill="var(--factory-pink)" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="22" cy="14" r="3" fill="var(--factory-cream)" stroke="var(--factory-dark)" strokeWidth="2" />
    </svg>
  );
}

export function ChevronDown({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path d="M5 7 L10 13 L15 7" fill="none" stroke="var(--factory-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
