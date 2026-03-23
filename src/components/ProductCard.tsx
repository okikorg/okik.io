import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  description: string;
  href: string;
  badge?: string;
}

export function ProductCard({ name, description, href, badge }: ProductCardProps) {
  return (
    <Link
      to={href}
      className="block border border-border rounded-xl p-6 bg-bg-card hover:border-border-hover transition-colors"
    >
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-lg font-semibold text-text">{name}</h3>
        {badge && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-bg-card text-text-muted border border-border">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </Link>
  );
}
