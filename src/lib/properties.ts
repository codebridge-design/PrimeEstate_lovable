const property1 = "/images/property-1.jpg";
const property2 = "/images/property-2.jpg";
const property3 = "/images/property-3.jpg";
const property4 = "/images/property-4.jpg";
const property5 = "/images/property-5.jpg";
const property6 = "/images/property-6.jpg";

export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  beds: number;
  baths: number;
  sqft: number;
  garage: number;
  image: string;
  images: string[];
  badge?: "NEW LISTING" | "FEATURED" | "SOLD";
  description: string;
  features: string[];
  agent: {
    name: string;
    title: string;
    image: string;
  };
}

export const properties: Property[] = [
  {
    id: "1",
    title: "The Parkview Penthouse",
    price: 5400000,
    address: "1234 Park Avenue",
    city: "Manhattan",
    state: "NY",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    garage: 2,
    image: property1,
    images: [property1, property2, property3, property4],
    badge: "NEW LISTING",
    description: "Experience the pinnacle of luxury living in this custom-built estate located in the prestigious Beverly Park. The Summit Villa offers an unparalleled blend of contemporary design and timeless elegance, featuring expansive glass walls that seamlessly integrate indoor and outdoor living spaces.\n\nThe gourmet chef's kitchen is equipped with top-of-the-line appliances and a massive marble island, perfect for entertaining. Retreat to the master suite, a sanctuary of relaxation with a fireplace, private terrace, and a spa-inspired bathroom. Outside, the meticulously landscaped grounds feature an infinity-edge pool, a sunken fire pit, and panoramic views of the city skyline.",
    features: [
      "Smart Home Technology",
      "Home Theater",
      "4-Car Garage",
      "Infinity Pool & Spa",
      "Wine Cellar (500 bottles)",
      "Gym & Wellness Room"
    ],
    agent: {
      name: "Sarah Jenkins",
      title: "Premier Agent",
      image: ""
    }
  },
  {
    id: "2",
    title: "Beverly Hills Estate",
    price: 8950000,
    address: "90210 Mulholland Dr",
    city: "Beverly Hills",
    state: "CA",
    beds: 6,
    baths: 7,
    sqft: 5800,
    garage: 3,
    image: property2,
    images: [property2, property1, property3, property4],
    badge: "FEATURED",
    description: "A masterpiece of modern architecture nestled in the prestigious Beverly Hills. This stunning estate offers unparalleled luxury with panoramic views of the city lights.",
    features: [
      "Smart Home Technology",
      "Private Cinema",
      "3-Car Garage",
      "Resort-Style Pool",
      "Chef's Kitchen",
      "Guest House"
    ],
    agent: {
      name: "Julian Thorne",
      title: "Managing Partner",
      image: ""
    }
  },
  {
    id: "3",
    title: "Skyline Loft",
    price: 3200000,
    address: "500 Lake Shore Dr",
    city: "Chicago",
    state: "IL",
    beds: 3,
    baths: 2.5,
    sqft: 2100,
    garage: 1,
    image: property3,
    images: [property3, property1, property2, property4],
    description: "Stunning penthouse loft with breathtaking views of Lake Michigan and the Chicago skyline. Modern finishes throughout with soaring ceilings and walls of glass.",
    features: [
      "Floor-to-Ceiling Windows",
      "Marble Floors",
      "Gourmet Kitchen",
      "Private Terrace",
      "Concierge Service",
      "Fitness Center"
    ],
    agent: {
      name: "Elena Rostova",
      title: "Head of Design",
      image: ""
    }
  },
  {
    id: "4",
    title: "Oceanfront Villa",
    price: 6750000,
    address: "45 Ocean Drive",
    city: "Miami Beach",
    state: "FL",
    beds: 5,
    baths: 5,
    sqft: 4500,
    garage: 2,
    image: property4,
    images: [property4, property1, property2, property3],
    description: "Direct oceanfront living at its finest. This stunning villa offers pristine beach access, tropical landscaping, and resort-style amenities.",
    features: [
      "Private Beach Access",
      "Oceanfront Pool",
      "Outdoor Kitchen",
      "Hurricane Impact Windows",
      "Smart Home System",
      "Boat Dock"
    ],
    agent: {
      name: "Sarah Jenkins",
      title: "Premier Agent",
      image: ""
    }
  },
  {
    id: "5",
    title: "Coastal Modern Home",
    price: 4100000,
    address: "88 Seaview Lane",
    city: "San Diego",
    state: "CA",
    beds: 4,
    baths: 3,
    sqft: 2800,
    garage: 2,
    image: property5,
    images: [property5, property1, property2, property3],
    badge: "SOLD",
    description: "Contemporary coastal living with spectacular sunset views. This architectural gem features seamless indoor-outdoor flow and premium finishes throughout.",
    features: [
      "Ocean Views",
      "Infinity Edge Pool",
      "Open Floor Plan",
      "Outdoor Living Room",
      "Wine Room",
      "Home Office"
    ],
    agent: {
      name: "Julian Thorne",
      title: "Managing Partner",
      image: ""
    }
  },
  {
    id: "6",
    title: "The Aspen Retreat",
    price: 12500000,
    address: "77 Mountain View Rd",
    city: "Aspen",
    state: "CO",
    beds: 8,
    baths: 9,
    sqft: 8200,
    garage: 4,
    image: property6,
    images: [property6, property1, property2, property3],
    description: "Ultimate mountain luxury retreat with ski-in/ski-out access. This magnificent estate offers unparalleled mountain views and world-class amenities.",
    features: [
      "Ski-In/Ski-Out Access",
      "Indoor Pool",
      "Spa & Sauna",
      "Chef's Kitchen",
      "Home Theater",
      "Multiple Fireplaces"
    ],
    agent: {
      name: "Elena Rostova",
      title: "Head of Design",
      image: ""
    }
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(p => p.id === id);
};
