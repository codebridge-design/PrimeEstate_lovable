"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const FeaturedProperties = () => {
  const { ref, isVisible } = useScrollAnimation();
  const featured = properties.slice(0, 3);

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2
              className={cn(
                "font-serif text-3xl font-bold md:text-4xl opacity-0",
                isVisible && "animate-fade-in-up"
              )}
            >
              Featured Properties
            </h2>
            <p
              className={cn(
                "mt-2 text-muted-foreground opacity-0",
                isVisible && "animate-fade-in-up stagger-1"
              )}
            >
              Exclusive listings chosen for their unique character.
            </p>
          </div>
          <Link
            href="/properties"
            className={cn(
              "flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80 opacity-0",
              isVisible && "animate-fade-in-up stagger-2"
            )}
          >
            View All Properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isVisible &&
            featured.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};
