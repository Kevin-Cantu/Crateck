import { icons } from "lucide-react";

export const Icon = ({
  name,
  color,
  size,
  className,
}: {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  className?: string;
}) => {
  const LucideIcon = icons[name as keyof typeof icons];

  if (!LucideIcon) {
    // Fallback to a generic icon to avoid runtime errors if the name is invalid
    const Fallback = icons["Square"];
    return <Fallback color={color} size={size} className={className} />;
  }

  return <LucideIcon color={color} size={size} className={className} />;
};
