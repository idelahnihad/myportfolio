/**
 * Logo.tsx — Custom site logo (Assignment rubric item 2).
 * A color-filled hexagon with the owner's initials positioned inside,
 * drawn as an inline SVG so it scales crisply at any size and
 * requires no external image file or third-party artwork.
 */

import { personalInfo } from "@/data/portfolioData";

interface LogoProps {
  size?: number; // logo width/height in pixels (square)
}

export default function Logo({ size = 44 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={`${personalInfo.fullName} logo`}
    >
      {/* Gradient fill for the hexagon */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Color-filled hexagon (six-point polygon centered at 50,50) */}
      <polygon
        points="50,4 90,27 90,73 50,96 10,73 10,27"
        fill="url(#logoGradient)"
        stroke="#ffffff"
        strokeWidth="3"
      />

      {/* Owner's initials centered inside the hexagon */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontSize="34"
        fontWeight="700"
        fill="#ffffff"
        fontFamily="system-ui, sans-serif"
      >
        {personalInfo.initials}
      </text>
    </svg>
  );
}
