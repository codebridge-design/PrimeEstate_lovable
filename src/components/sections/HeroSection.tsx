"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const heroVilla = "/images/hero-villa.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroVilla}
          alt="Luxury modern villa"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-[80vh] flex-col justify-center py-20">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-bold leading-tight text-background sm:text-5xl md:text-6xl animate-fade-in-up">
            Experience Living at its Finest
          </h1>
          <p className="mt-6 text-lg text-background/90 sm:text-xl animate-fade-in-up stagger-2">
            Curated luxury properties for the discerning buyer. Find your
            sanctuary in the world's most coveted locations.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-in-up stagger-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by city, neighborhood, or address..."
                className="h-12 pl-10 bg-background/95 border-0"
              />
            </div>
            <Button size="lg" className="h-12">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
