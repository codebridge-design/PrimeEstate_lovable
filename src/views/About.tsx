"use client";

import Link from "next/link";
import { Shield, Gem, Globe, Award, Trophy, Star, Medal } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
const aboutHero = "/images/about-hero.jpg";
const agent1 = "/images/agent-1.jpg";
const agent2 = "/images/agent-2.jpg";
const agent3 = "/images/agent-3.jpg";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Unwavering commitment to ethical standards.",
  },
  {
    icon: Gem,
    title: "Exclusivity",
    description: "Access to off-market premium listings.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting buyers and sellers worldwide.",
  },
];

const team = [
  {
    name: "Alexandra Vane",
    title: "Senior Broker",
    image: agent1,
  },
  {
    name: "Julian Thorne",
    title: "Managing Partner",
    image: agent2,
  },
  {
    name: "Elena Rostova",
    title: "Head of Design",
    image: agent3,
  },
];

const awards = [
  {
    icon: Trophy,
    title: "Best Luxury Agency 2023",
  },
  {
    icon: Award,
    title: "Global Excellence Award",
  },
  {
    icon: Star,
    title: "Top 100 Brokers",
  },
  {
    icon: Medal,
    title: "Interior Design Annual",
  },
];

const About = () => {
  const heroRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const teamRef = useScrollAnimation();
  const awardsRef = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Luxury interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div
          ref={heroRef.ref}
          className="container relative z-10 flex h-full flex-col items-center justify-center text-center"
        >
          <p
            className={cn(
              "text-sm uppercase tracking-widest text-primary opacity-0",
              heroRef.isVisible && "animate-fade-in"
            )}
          >
            Est. 1998
          </p>
          <h1
            className={cn(
              "mt-2 font-serif text-4xl font-bold text-background md:text-5xl lg:text-6xl opacity-0",
              heroRef.isVisible && "animate-fade-in-up stagger-1"
            )}
          >
            Redefining Luxury Living
          </h1>
          <p
            className={cn(
              "mx-auto mt-4 max-w-xl text-lg text-background/90 opacity-0",
              heroRef.isVisible && "animate-fade-in-up stagger-2"
            )}
          >
            Experience the pinnacle of real estate excellence. We curate not
            just homes, but the lifestyles you deserve.
          </p>
          <Button
            asChild
            size="lg"
            className={cn(
              "mt-8 opacity-0",
              heroRef.isVisible && "animate-fade-in-up stagger-3"
            )}
          >
            <Link href="/properties">View Our Listings</Link>
          </Button>
        </div>
      </section>

      {/* Heritage Section */}
      <section ref={storyRef.ref} className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div
                className={cn(
                  "border-l-4 border-primary pl-6 opacity-0",
                  storyRef.isVisible && "animate-fade-in-up"
                )}
              >
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Our Story
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
                  Heritage of Excellence
                </h2>
              </div>
              <div
                className={cn(
                  "mt-8 space-y-4 text-muted-foreground opacity-0",
                  storyRef.isVisible && "animate-fade-in-up stagger-1"
                )}
              >
                <p>
                  Founded on the principles of integrity and exclusivity,
                  PrimeEstate has been the bridge to the world's most coveted
                  properties for over two decades.
                </p>
                <p>
                  We don't simply facilitate transactions; we curate lifestyles.
                  Our deep-rooted industry connections and unwavering commitment
                  to quality allow us to uncover hidden gems before they hit the
                  market.
                </p>
              </div>
            </div>
            <div
              className={cn(
                "space-y-4 opacity-0",
                storyRef.isVisible && "animate-fade-in-up stagger-2"
              )}
            >
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef.ref} className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <p
              className={cn(
                "text-sm font-medium uppercase tracking-wider text-primary opacity-0",
                teamRef.isVisible && "animate-fade-in"
              )}
            >
              Our Experts
            </p>
            <h2
              className={cn(
                "mt-2 font-serif text-3xl font-bold md:text-4xl opacity-0",
                teamRef.isVisible && "animate-fade-in-up stagger-1"
              )}
            >
              Meet the Team
            </h2>
            <p
              className={cn(
                "mx-auto mt-4 max-w-2xl text-muted-foreground opacity-0",
                teamRef.isVisible && "animate-fade-in-up stagger-2"
              )}
            >
              The minds behind your next dream home. Our team combines decades
              of experience with a modern approach to luxury real estate.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={cn(
                  "text-center opacity-0",
                  teamRef.isVisible && "animate-fade-in-up",
                  `stagger-${index + 3}`
                )}
              >
                <div className="mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-primary">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section ref={awardsRef.ref} className="py-16 md:py-24">
        <div className="container">
          <h2
            className={cn(
              "text-center font-serif text-2xl font-bold md:text-3xl opacity-0",
              awardsRef.isVisible && "animate-fade-in"
            )}
          >
            Industry Recognition
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {awards.map((award, index) => (
              <div
                key={award.title}
                className={cn(
                  "text-center opacity-0",
                  awardsRef.isVisible && "animate-fade-in-up",
                  `stagger-${index + 1}`
                )}
              >
                <award.icon className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {award.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
