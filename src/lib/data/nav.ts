import type { NavLink } from "../types";

export const PRIMARY_NAV: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SECONDARY_NAV: NavLink[] = [
  { href: "/upload", label: "Upload Property", cta: true },
  { href: "/login", label: "Login" },
];

export const FOOTER_LINKS = {
  Company: [
    { href: "/about", label: "About RAPIC" },
    { href: "/properties", label: "Browse Properties" },
    { href: "/contact", label: "Contact" },
    { href: "/upload", label: "List Your Property" },
  ],
  Discover: [
    { href: "/properties?sector=blue-area", label: "New Blue Area" },
    { href: "/properties?type=Apartment", label: "Luxury Apartments" },
    { href: "/properties?type=Office", label: "Premium Offices" },
    { href: "/properties?type=Villa", label: "Villas & Houses" },
  ],
  Resources: [
    { href: "#tips", label: "Rental Tips" },
    { href: "#trusted", label: "Trusted Landlords" },
    { href: "#mobile-app", label: "Mobile App" },
    { href: "/login", label: "Account Login" },
  ],
};
