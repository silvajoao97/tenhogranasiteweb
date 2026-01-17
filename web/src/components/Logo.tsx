"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

type LogoProps = {
  className?: string;
  srcCandidates?: string[];
  width?: number;
  height?: number;
};

export default function Logo({
  className,
  srcCandidates,
  width = 120,
  height = 120,
}: LogoProps) {
  const candidates = useMemo(
    () =>
      srcCandidates ?? [
        "/tenhograna-logo.png", // principal (PNG)
        "/tenhograna.png",      // fallback (PNG)
      ],
    [srcCandidates]
  );
  const [index, setIndex] = useState(0);
  const currentSrc = candidates[Math.min(index, candidates.length - 1)];

  return (
    <Image
      src={currentSrc}
      alt="Logo TenhoGrana"
      width={width}
      height={height}
      priority
      unoptimized
      className={className ?? "h-12 w-auto"}
      onError={() => {
        if (index < candidates.length - 1) setIndex(index + 1);
      }}
    />
  );
}
