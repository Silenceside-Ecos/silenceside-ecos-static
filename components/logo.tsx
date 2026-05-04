"use client";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer triangle - sacred geometry */}
      <path
        d="M60 10 L110 120 L10 120 Z"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Inner triangle */}
      <path
        d="M60 35 L90 100 L30 100 Z"
        stroke="url(#goldGradient)"
        strokeWidth="1"
        fill="none"
      />

      {/* Lotus petals */}
      <ellipse
        cx="60"
        cy="70"
        rx="20"
        ry="12"
        stroke="url(#goldGradient)"
        strokeWidth="1"
        fill="none"
      />
      <ellipse
        cx="60"
        cy="70"
        rx="12"
        ry="20"
        stroke="url(#goldGradient)"
        strokeWidth="1"
        fill="none"
      />

      {/* Center circle - soft pink */}
      <circle cx="60" cy="70" r="8" fill="url(#pinkGradient)" />

      {/* Entry/exit points */}
      <circle cx="25" cy="90" r="2.5" fill="url(#goldGradient)" />
      <circle cx="95" cy="90" r="2.5" fill="url(#goldGradient)" />
      <circle cx="60" cy="25" r="2.5" fill="url(#goldGradient)" />

      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D8C08A" />
          <stop offset="50%" stopColor="#BFA064" />
          <stop offset="100%" stopColor="#A8874A" />
        </linearGradient>
        <radialGradient id="pinkGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5E8E8" />
          <stop offset="100%" stopColor="#E8D5D5" />
        </radialGradient>
      </defs>
    </svg>
  );
}
