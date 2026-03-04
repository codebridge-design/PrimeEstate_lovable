"use client";

import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
const agent1 = "/images/agent-1.jpg";
const agent2 = "/images/agent-2.jpg";
const agent3 = "/images/agent-3.jpg";

const testimonials = [
  {
    quote:
      "PrimeEstate made finding our dream home effortless. Their attention to detail and understanding of our needs was unparalleled.",
    name: "Michael Roberts",
    title: "Homeowner, Miami",
    image: agent2,
  },
  {
    quote:
      "The level of professionalism and expertise the team showed was impressive. They sold our property above asking price in just two weeks.",
    name: "Sarah Jenkins",
    title: "Investor, New York",
    image: agent1,
  },
  {
    quote:
      "A truly premium experience. The curated list of properties saved us so much time. Highly recommended for luxury buyers.",
    name: "David Chen",
    title: "Entrepreneur, San Francisco",
    image: agent3,
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <h2
            className={cn(
              "font-serif text-3xl font-bold md:text-4xl opacity-0",
              isVisible && "animate-fade-in-up"
            )}
          >
            Client Testimonials
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                "rounded-lg border border-border bg-card p-6 opacity-0",
                isVisible && "animate-fade-in-up",
                `stagger-${index + 1}`
              )}
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="mt-4 text-muted-foreground italic">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
