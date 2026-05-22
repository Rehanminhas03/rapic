import { Icon, type IconName } from "./Icon";
import { cn } from "@/lib/utils";

export function IconTile({
  name,
  className,
  size = "md",
  tone = "emerald",
}: {
  name: IconName;
  className?: string;
  size?: "sm" | "md" | "lg";
  tone?: "emerald" | "gold" | "cream";
}) {
  const sizing = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  }[size];
  const iconSize = { sm: 18, md: 22, lg: 26 }[size];
  const tones = {
    emerald:
      "bg-emerald-900/5 text-emerald-700 ring-1 ring-emerald-900/10",
    gold: "bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/30",
    cream: "bg-cream text-emerald-800 ring-1 ring-emerald-900/10",
  }[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-2xl",
        sizing,
        tones,
        className,
      )}
    >
      <Icon name={name} size={iconSize} />
    </span>
  );
}
