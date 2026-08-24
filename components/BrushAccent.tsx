import React from 'react';
import Image from 'next/image';

interface BrushProps {
  className?: string;
  color?: string;
}

/**
 * Hand-drawn SVG Brush Underline Stroke
 */
export function BrushUnderline({ className = "w-36 h-3 text-[#00C853]", color }: BrushProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 280 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={color ? { color } : undefined}
    >
      <path 
        d="M3 11C48 3.5 125 1.5 277 7.5C215 13.5 105 15.5 3 11Z" 
        fill="currentColor" 
        opacity="0.85" 
      />
      <path 
        d="M12 14.5C75 8.5 175 6.5 265 10.5C195 15.5 85 16.5 12 14.5Z" 
        fill="currentColor" 
        opacity="0.45" 
      />
    </svg>
  );
}

/**
 * Organic Background Paint Splash Watermark
 */
export function PaintSplashBackground({ className = "w-72 h-72 text-[#00C853]/5", color }: BrushProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={color ? { color } : undefined}
    >
      {/* Central Organic Paint Splash */}
      <path 
        d="M120,30 Q145,8 165,35 Q185,62 172,92 Q188,122 162,148 Q136,174 100,166 Q62,182 38,152 Q12,122 26,86 Q8,52 44,36 Q82,18 120,30 Z" 
        opacity="0.7" 
      />
      {/* Paint Drops & Splatters */}
      <circle cx="178" cy="42" r="4.5" opacity="0.6" />
      <circle cx="188" cy="68" r="2.5" opacity="0.4" />
      <circle cx="192" cy="95" r="3.5" opacity="0.5" />
      <circle cx="28" cy="142" r="4" opacity="0.6" />
      <circle cx="18" cy="162" r="2.5" opacity="0.4" />
      <circle cx="45" cy="178" r="3" opacity="0.5" />
      <path d="M52,38 Q34,22 62,18 Q82,24 72,44 Z" opacity="0.5" />
    </svg>
  );
}

/**
 * Secondary Earthy Brown Paint Texture Accent
 */
export function EarthPaintStroke({ className = "w-28 h-2.5 text-[#8B4513]", color }: BrushProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 14" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={color ? { color } : undefined}
    >
      <path 
        d="M2 8C35 3 95 1 198 5C150 10 75 12 2 8Z" 
        fill="currentColor" 
        opacity="0.8" 
      />
    </svg>
  );
}

/**
 * Side Margin Neon Green Brush Vector — Left Edge
 */
export function SideBrushLeft({ className = "absolute -left-12 top-24 w-40 h-[650px] pointer-events-none z-0 hidden lg:block opacity-90" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Image 
        src="/assets/svg/neon-brush-stroke-left.svg" 
        alt="" 
        width={220} 
        height={700} 
        className="w-full h-full object-contain object-left" 
      />
    </div>
  );
}

/**
 * Side Margin Neon Green Brush Vector — Right Edge
 */
export function SideBrushRight({ className = "absolute -right-12 top-36 w-40 h-[650px] pointer-events-none z-0 hidden lg:block opacity-90" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Image 
        src="/assets/svg/neon-brush-stroke-right.svg" 
        alt="" 
        width={220} 
        height={700} 
        className="w-full h-full object-contain object-right" 
      />
    </div>
  );
}

