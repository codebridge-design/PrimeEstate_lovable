"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Bed,
  Bath,
  Maximize,
  Car,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Check,
  Calculator,
  Grid,
  ChevronLeft,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getPropertyById, formatPrice, properties } from "@/lib/properties";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
const agent1 = "/images/agent-1.jpg";

interface PropertyDetailsProps {
  id: string;
}

const PropertyDetails = ({ id }: PropertyDetailsProps) => {
  const property = getPropertyById(id || "1") || properties[0];
  const { ref, isVisible } = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const monthlyPayment = Math.round(property.price * 0.00547);

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="border-b border-border bg-secondary/30 py-4">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link
              href="/properties"
              className="text-muted-foreground hover:text-foreground"
            >
              {property.city}
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-primary">{property.title}</span>
          </nav>
        </div>
      </section>

      {/* Property Header */}
      <section className="py-6">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <h1 className="font-serif text-2xl font-bold md:text-3xl animate-fade-in">
                {property.title}
              </h1>
              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>
                  {property.address}, {property.city}, {property.state}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                {formatPrice(property.price)}
              </p>
              <p className="text-sm text-muted-foreground">
                Est. ${monthlyPayment.toLocaleString()}/mo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-8">
        <div className="container">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="relative lg:col-span-2">
              <img
                src={property.images[currentImage]}
                alt={property.title}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === 0 ? property.images.length - 1 : prev - 1
                    )
                  }
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === property.images.length - 1 ? 0 : prev + 1
                    )
                  }
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-lg",
                    currentImage === index && "ring-2 ring-primary"
                  )}
                >
                  <img
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {index === 3 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/50">
                      <span className="flex items-center gap-2 text-sm font-medium text-background">
                        <Grid className="h-4 w-4" />
                        View All Photos
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="pb-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Specs Bar */}
              <div
                className={cn(
                  "grid grid-cols-2 gap-4 rounded-lg border border-border bg-card p-6 sm:grid-cols-4 opacity-0",
                  isVisible && "animate-fade-in-up"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Bed className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{property.beds}</p>
                    <p className="text-xs uppercase text-muted-foreground">
                      Beds
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Bath className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{property.baths}</p>
                    <p className="text-xs uppercase text-muted-foreground">
                      Baths
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Maximize className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">
                      {property.sqft.toLocaleString()}
                    </p>
                    <p className="text-xs uppercase text-muted-foreground">
                      Sqft
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <Car className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{property.garage}</p>
                    <p className="text-xs uppercase text-muted-foreground">
                      Garage
                    </p>
                  </div>
                </div>
              </div>

              {/* About */}
              <div
                className={cn(
                  "mt-8 opacity-0",
                  isVisible && "animate-fade-in-up stagger-1"
                )}
              >
                <h2 className="font-serif text-xl font-semibold">
                  About this home
                </h2>
                <p className="mt-4 whitespace-pre-line text-muted-foreground">
                  {showMore
                    ? property.description
                    : property.description.slice(0, 400) + "..."}
                </p>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="mt-2 font-medium text-primary hover:underline"
                >
                  {showMore ? "Read less" : "Read more"} ↓
                </button>
              </div>

              {/* Features */}
              <div
                className={cn(
                  "mt-8 border-t border-border pt-8 opacity-0",
                  isVisible && "animate-fade-in-up stagger-2"
                )}
              >
                <h2 className="font-serif text-xl font-semibold">
                  Features & Amenities
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {property.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div
                className={cn(
                  "mt-8 border-t border-border pt-8 opacity-0",
                  isVisible && "animate-fade-in-up stagger-3"
                )}
              >
                <h2 className="font-serif text-xl font-semibold">Location</h2>
                <div className="mt-4 aspect-video overflow-hidden rounded-lg bg-muted">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto h-12 w-12 text-muted-foreground/50" />
                      <p className="mt-2 text-muted-foreground">
                        {property.address}, {property.city}, {property.state}
                      </p>
                      <Button variant="outline" className="mt-4">
                        <MapPin className="mr-2 h-4 w-4" />
                        Explore Area
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Agent Card */}
            <div className="lg:col-span-1">
              <div
                className={cn(
                  "sticky top-24 rounded-lg border border-border bg-card p-6 opacity-0",
                  isVisible && "animate-fade-in-up stagger-1"
                )}
              >
                {/* Agent Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={agent1}
                    alt={property.agent.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground">Listed by</p>
                    <p className="font-semibold">{property.agent.name}</p>
                    <p className="text-xs text-primary">
                      ★ {property.agent.title}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                </div>

                {/* Contact Form */}
                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="tel" placeholder="Phone Number" />
                  <Textarea
                    placeholder={`I am interested in ${property.address}...`}
                    rows={4}
                  />
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Request a Tour
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By clicking Request a Tour, you agree to our Terms of Use
                    and Privacy Policy.
                  </p>
                </form>

                {/* Mortgage Calculator Link */}
                <div className="mt-6 border-t border-border pt-6">
                  <button className="flex w-full items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-secondary">
                    <div className="flex items-center gap-3">
                      <Calculator className="h-5 w-5 text-primary" />
                      <div className="text-left">
                        <p className="font-medium">Mortgage Calculator</p>
                        <p className="text-sm text-muted-foreground">
                          Est. Payment: ${monthlyPayment.toLocaleString()}/mo
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetails;
