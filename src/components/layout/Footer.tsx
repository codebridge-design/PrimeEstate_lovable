"use client";

import Link from "next/link";
import { Home, Globe, Share2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Buy Property", href: "/properties" },
  { name: "Sell Your Home", href: "/properties" },
  { name: "Rent Luxury", href: "/properties" },
  { name: "Our Agents", href: "/about" },
];

const locations = [
  { name: "New York", href: "/properties" },
  { name: "Los Angeles", href: "/properties" },
  { name: "Miami", href: "/properties" },
  { name: "Chicago", href: "/properties" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/about" },
  { name: "Press", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-semibold">PrimeEstate</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Elevating the standard of luxury real estate with curated properties and exceptional service.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                aria-label="Globe"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
                aria-label="Share"
              >
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="mb-4 font-semibold">Locations</h3>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location.name}>
                  <Link
                    href={location.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to get the latest listings and market insights.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit" size="sm">
                Go
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 PrimeEstate Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
