"use client";

import React, { useEffect, useRef, useState } from "react";

// Polymorphic Reveal component with proper typing for any element type via `as` prop
// Avoids mismatches between HTML and SVG element props by inferring the right prop types.

type RevealOwnProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  delayMs?: number; // e.g. 0, 100, 200
  y?: number; // translateY when hidden
  once?: boolean;
  style?: React.CSSProperties;
};

// Compose polymorphic props: own props + element props (minus clashing keys)
export type RevealProps<T extends React.ElementType> = RevealOwnProps &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "style" | "ref">;

export default function Reveal<T extends React.ElementType = "div">({
  as,
  children,
  delayMs = 0,
  y = 16,
  once = true,
  style,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as React.ElementType;

  // We only need Element for IntersectionObserver; supports HTML/SVG/etc
  const ref = useRef<Element | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      // Casting because React doesn't easily infer `ref` element type across polymorphic components
      ref={ref as any}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translateY(${y}px)`,
        transition: `opacity 600ms ease ${delayMs}ms, transform 600ms ease ${delayMs}ms`,
        willChange: "opacity, transform",
        ...(style || {}),
      }}
      {...(rest as any)}
    >
      {children}
    </Tag>
  );
}
