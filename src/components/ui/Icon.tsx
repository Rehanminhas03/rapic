import { cn } from "@/lib/utils";

type IconName =
  | "search"
  | "arrow-right"
  | "arrow-up-right"
  | "phone"
  | "whatsapp"
  | "mail"
  | "pin"
  | "bed"
  | "bath"
  | "ruler"
  | "menu"
  | "close"
  | "play"
  | "check"
  | "shield"
  | "handshake"
  | "wallet"
  | "upload"
  | "bolt"
  | "compass"
  | "instagram"
  | "facebook"
  | "linkedin"
  | "x"
  | "youtube"
  | "car"
  | "dumbbell"
  | "waves"
  | "arrow-up"
  | "zap"
  | "bell"
  | "cpu"
  | "leaf"
  | "sun"
  | "wifi"
  | "wrench"
  | "star"
  | "quote"
  | "apple"
  | "android"
  | "sparkles";

const PATHS: Record<IconName, React.ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  "arrow-right": <path d="M5 12h14m-6-6 6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7m0 0H8m9 0v9" />,
  "arrow-up": <path d="M12 19V5m-7 7 7-7 7 7" />,
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  whatsapp: (
    <>
      <path d="M21 11.5a8.38 8.38 0 0 1-12.7 7.18L3 21l2.32-5.3A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.5 9.5c.4 1.4 1.6 2.6 3 3 .4.1.8 0 1.1-.2l.7-.5 1.5.6c.3.1.5.4.5.7 0 1.1-1 2-2 2-2.8 0-5-2.2-5-5 0-1 .9-2 2-2 .3 0 .6.2.7.5l.6 1.5-.5.7c-.2.3-.3.7-.2 1.1Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s-7-7.58-7-12a7 7 0 1 1 14 0c0 4.42-7 12-7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18V8m18 10v-6a3 3 0 0 0-3-3H8" />
      <path d="M3 14h18" />
      <circle cx="7" cy="11" r="2" />
    </>
  ),
  bath: (
    <>
      <path d="M4 12V6a2 2 0 0 1 4 0" />
      <path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <path d="M6 19v2m12-2v2" />
    </>
  ),
  ruler: <path d="m3 17 14-14 4 4L7 21Zm5-5 2 2m1-5 2 2m1-5 2 2" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  close: <path d="M6 6l12 12M6 18 18 6" />,
  play: <path d="M6 4v16l14-8L6 4Z" />,
  check: <path d="M4 12l5 5 11-12" />,
  shield: <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />,
  handshake: (
    <path d="M3 12 8 7l3 3 4-4 6 6-5 5-3-3-3 3-3-3-4 4Zm5-5 4 4" />
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18m-4 4h2" />
    </>
  ),
  upload: <path d="M12 16V4m-5 5 5-5 5 5M4 20h16" />,
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-2.5 5-5 2.5 2.5-5 5-2.5Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
    </>
  ),
  facebook: (
    <path d="M14 22v-8h3l1-4h-4V7a2 2 0 0 1 2-2h2V2h-3a5 5 0 0 0-5 5v3H7v4h3v8Z" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v8m0-11v.01M12 18v-5m0 5a3 3 0 0 1 6 0v5" />
    </>
  ),
  x: <path d="m4 4 16 16M20 4 4 20" />,
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 6 3-6 3V9Z" fill="currentColor" stroke="none" />
    </>
  ),
  car: (
    <>
      <path d="M5 17h14l-1.5-6a2 2 0 0 0-2-1.5h-7a2 2 0 0 0-2 1.5L5 17Z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </>
  ),
  dumbbell: (
    <path d="M3 9v6m4-9v12m10-12v12m4-9v6M7 12h10" />
  ),
  waves: (
    <path d="M3 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M3 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M3 7c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
  ),
  zap: <path d="m13 2-9 12h6l-1 8 9-12h-6l1-8Z" />,
  bell: (
    <>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9Z" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 9h6v6H9zM3 9v6m18-6v6M9 3h6m-6 18h6" />
    </>
  ),
  leaf: <path d="M21 3c-9 0-15 5-15 13a5 5 0 0 0 10 0c0-6-3-9-3-9M5 19c1-3 3-5 6-7" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3m0 14v3m10-10h-3M5 12H2m15.5-7.5-2 2m-9 9-2 2m13 0-2-2m-9-9-2-2" />
    </>
  ),
  wifi: <path d="M2 9c6-5 14-5 20 0M5 13c4-3 10-3 14 0M8 17c2-1.5 6-1.5 8 0M12 21h.01" />,
  wrench: (
    <path d="M14 6a4 4 0 0 1 5.66 5.66l-9 9-5.66-5.66 9-9Zm0 0 4 4" />
  ),
  star: (
    <path d="m12 2 3.09 6.26 6.91 1-5 4.87 1.18 6.88L12 17.77l-6.18 3.24L7 14.13l-5-4.87 6.91-1Z" />
  ),
  quote: (
    <path d="M7 6h4l-2 6H6V8a2 2 0 0 1 1-2Zm10 0h4l-2 6h-3V8a2 2 0 0 1 1-2Z" />
  ),
  apple: (
    <path d="M16 8c1-1 2-3 1-5-2 0-3 1-4 2-1 1-2 3-1 5 2 0 3-1 4-2Zm-7 1c3 0 4 2 6 2s4-2 6 0c0 5-3 11-6 11-2 0-2-1-4-1s-2 1-4 1c-3 0-6-6-6-11 0-3 2-5 5-5 2 0 2 1 3 1Z" />
  ),
  android: (
    <path d="M5 12h14v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6Zm3-6 1.5 3M16 6l-1.5 3M5 12a7 7 0 0 1 14 0M9 9h.01M15 9h.01" />
  ),
  sparkles: (
    <path d="M12 3v4m0 10v4m9-9h-4M7 12H3m13-7-2 2m-6 10-2 2m10 0-2-2M7 7 5 5" />
  ),
};

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  size?: number;
};

export function Icon({ name, className, strokeWidth = 1.6, size }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("inline-block", className)}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

export type { IconName };
