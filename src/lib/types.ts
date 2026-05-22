export type PropertyType =
  | "Apartment"
  | "Penthouse"
  | "Villa"
  | "Office"
  | "Commercial"
  | "Townhouse";

export type ListingPurpose = "Rent" | "Sale";

export type Property = {
  slug: string;
  title: string;
  type: PropertyType;
  purpose: ListingPurpose;
  sector: string;
  city: string;
  pricePerMonth: number;
  currency: "PKR";
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
  badges: string[];
  amenities: string[];
  description: string;
  longDescription: string;
  images: string[];
  videoUrl?: string;
  mapEmbedQuery: string;
  isFeatured?: boolean;
  isNewBlueArea?: boolean;
  agentNote?: string;
};

export type Sector = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  listings: number;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  cover: string;
  date: string;
};

export type Amenity = {
  id: string;
  label: string;
  icon: string;
};

export type NavLink = {
  href: string;
  label: string;
  cta?: boolean;
};
