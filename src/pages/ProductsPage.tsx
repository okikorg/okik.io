import { PageHeader } from "../components/PageHeader";
import { ProductCard } from "../components/ProductCard";

export function ProductsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <PageHeader title="Products" subtitle="Tools built for focus and clarity" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        <ProductCard
          name="Axis"
          description="A minimal markdown editor for macOS. Distraction-free writing with keyboard-first navigation, inline formatting, and full App Sandbox security."
          href="/products/axis"
        />
        <ProductCard
          name="Brain Dump"
          description="Your brain, searchable. A smarter way to capture, connect, and find your thoughts."
          href="/products/brain-dump"
        />
      </div>
    </div>
  );
}
