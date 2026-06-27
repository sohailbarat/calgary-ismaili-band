"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value?: number;
  suffix?: string;
  label: string;
  displayText?: string;
  light?: boolean;
}

export function StatCounter({
  value,
  suffix = "",
  label,
  displayText,
  light = false,
}: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || displayText || value === undefined) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value, displayText]);

  const displayValue = displayText ?? `${count}${suffix}`;

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`font-serif text-4xl font-bold sm:text-5xl ${
          light ? "text-secondary" : "text-primary"
        }`}
      >
        {displayValue}
      </div>
      <p
        className={`mt-2 text-sm font-medium uppercase tracking-wider ${
          light ? "text-white/80" : "text-muted-foreground"
        }`}
      >
        {label}
      </p>
    </motion.div>
  );
}
