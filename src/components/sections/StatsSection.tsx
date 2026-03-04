"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}

const StatItem = ({ value, suffix, label, isVisible }: StatItemProps) => {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="text-center">
      <p className="font-serif text-3xl font-bold text-primary sm:text-4xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  );
};

export const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const stats = [
    { value: 1000, suffix: "+", label: "Properties Sold" },
    { value: 500, suffix: "+", label: "Happy Clients" },
    { value: 15, suffix: "+", label: "Years Experience" },
  ];

  return (
    <section ref={ref} className="border-b border-border bg-secondary/50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};
