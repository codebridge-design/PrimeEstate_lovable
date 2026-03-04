"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-foreground py-16 md:py-24">
      <div className="container text-center">
        <h2
          className={cn(
            "font-serif text-3xl font-bold text-background md:text-4xl opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          Ready to Find Your Dream Home?
        </h2>
        <p
          className={cn(
            "mx-auto mt-4 max-w-xl text-background/80 opacity-0",
            isVisible && "animate-fade-in-up stagger-1"
          )}
        >
          Join our exclusive network of buyers and sellers. Let us guide you to
          the property you've always imagined.
        </p>
        <div
          className={cn(
            "mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0",
            isVisible && "animate-fade-in-up stagger-2"
          )}
        >
          <Button asChild size="lg">
            <Link href="/properties">Start Your Search</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-background/30 bg-transparent text-background hover:bg-background/10"
          >
            <Link href="/contact">Contact an Agent</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
