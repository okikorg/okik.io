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
      className="block border border-[#1a1a1a] rounded-xl p-6 bg-[#0a0a0a] hover:border-[#333] transition-colors"
    >
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        {badge && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a1a] text-[#a0a0a0]">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-[#a0a0a0] leading-relaxed">{description}</p>
    </Link>
  );
}
