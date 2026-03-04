"use client";

import { Shield, Building, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Shield,
    title: "Trusted by Thousands",
    description:
      "Our reputation is built on trust and integrity. We have successfully closed thousands of deals for happy clients.",
  },
  {
    icon: Building,
    title: "Exclusive Listings",
    description:
      "Access to off-market properties and exclusive listings that you won't find on any other platform.",
  },
  {
    icon: Users,
    title: "Concierge Service",
    description:
      "From viewing to closing, our dedicated agents provide a seamless, white-glove experience tailored to you.",
  },
];

export const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <h2
            className={cn(
              "font-serif text-3xl font-bold md:text-4xl opacity-0",
              isVisible && "animate-fade-in-up"
            )}
          >
            Why Choose PrimeEstate
          </h2>
          <p
            className={cn(
              "mx-auto mt-2 max-w-2xl text-muted-foreground opacity-0",
              isVisible && "animate-fade-in-up stagger-1"
            )}
          >
            We are redefining the luxury real estate experience through
            innovation and service.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "text-center opacity-0",
                isVisible && "animate-fade-in-up",
                `stagger-${index + 2}`
              )}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
