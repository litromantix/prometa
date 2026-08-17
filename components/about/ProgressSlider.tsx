"use client";

import Image from "next/image";
import { useState } from "react";

type ProgressSliderProps = {
  beforeSrc: string;
  beforeLabel: string;
  afterSrc: string;
  afterLabel: string;
};

export default function ProgressSlider({
  beforeSrc,
  beforeLabel,
  afterSrc,
  afterLabel,
}: ProgressSliderProps) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative aspect-4/3 w-full select-none overflow-hidden border border-white/10 bg-charcoal-900">
      <Image
        src={afterSrc}
        alt={afterLabel}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
      <span className="absolute top-4 right-4 bg-charcoal-950/70 px-3 py-1.5 text-xs uppercase tracking-widest text-cream-200">
        {afterLabel}
      </span>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeLabel}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute top-4 left-4 bg-charcoal-950/70 px-3 py-1.5 text-xs uppercase tracking-widest text-accent-400">
          {beforeLabel}
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        aria-label={`Compare ${beforeLabel} to ${afterLabel}`}
        className="absolute inset-x-4 bottom-4 w-[calc(100%-2rem)] accent-accent-500"
      />
    </div>
  );
}
