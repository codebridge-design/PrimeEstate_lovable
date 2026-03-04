import Link from "next/link";
import { Heart, Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Property, formatPrice } from "@/lib/properties";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  const badgeColors = {
    "NEW LISTING": "bg-primary text-primary-foreground",
    FEATURED: "bg-primary text-primary-foreground",
    SOLD: "bg-muted-foreground text-background",
  };

  return (
    <Link
      href={`/property/${property.id}`}
      className={cn(
        "group block overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg",
        "card-tilt opacity-0 animate-fade-in-up",
        `stagger-${(index % 6) + 1}`
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {property.badge && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded px-2 py-1 text-xs font-medium uppercase",
              badgeColors[property.badge]
            )}
          >
            {property.badge}
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-background hover:text-primary"
          aria-label="Add to favorites"
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <p className="font-serif text-xl font-semibold text-primary">
          {formatPrice(property.price)}
        </p>
        <h3 className="mt-1 font-semibold text-foreground">{property.title}</h3>
        <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>
            {property.address}, {property.city}, {property.state}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
