interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "spielbericht" | "vereinsnews" | "ankuendigung";
}

const variants: Record<string, string> = {
  default: "bg-gray-100 text-gray-700",
  spielbericht: "bg-blue-100 text-blue-700",
  vereinsnews: "bg-green-100 text-green-700",
  ankuendigung: "bg-amber-100 text-amber-700",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
