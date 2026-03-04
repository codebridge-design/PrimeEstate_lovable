"use client";

import { useState } from "react";
import { Search, MapPin, Home, Bed, ChevronLeft, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Properties = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [priceRange, setPriceRange] = useState([2000000, 10000000]);

  const formatSliderPrice = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(0)}M`;
    }
    return `$${(value / 1000).toFixed(0)}K`;
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="font-serif text-3xl font-bold md:text-4xl animate-fade-in">
            Find Your Dream Home
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card py-6">
        <div className="container">
          <div className="flex flex-wrap items-end gap-4">
            <div className="w-full sm:w-auto sm:flex-1">
              <label className="mb-2 block text-sm text-muted-foreground">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Select defaultValue="new-york">
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new-york">New York, NY</SelectItem>
                    <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                    <SelectItem value="miami">Miami, FL</SelectItem>
                    <SelectItem value="chicago">Chicago, IL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="w-full sm:w-auto sm:flex-1">
              <label className="mb-2 block text-sm text-muted-foreground">
                Type
              </label>
              <div className="relative">
                <Home className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Select defaultValue="all">
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="w-full sm:w-auto sm:flex-1">
              <label className="mb-2 block text-sm text-muted-foreground">
                Bedrooms
              </label>
              <div className="relative">
                <Bed className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Select defaultValue="any">
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="w-full sm:w-auto sm:flex-1 lg:w-64">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm text-muted-foreground">
                  Price Range
                </label>
                <span className="text-sm font-medium text-primary">
                  {formatSliderPrice(priceRange[0])} -{" "}
                  {formatSliderPrice(priceRange[1])}+
                </span>
              </div>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={500000}
                max={15000000}
                step={500000}
                className="mt-2"
              />
            </div>

            <Button className="w-full sm:w-auto">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section ref={ref} className="py-12">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {isVisible &&
              properties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  index={index}
                />
              ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button size="sm">1</Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <span className="px-2 text-muted-foreground">...</span>
            <Button variant="outline" size="sm">
              10
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
