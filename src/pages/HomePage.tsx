import { ProductCard } from "../components/ProductCard";

export function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-tight mb-4">okik</h1>
        <p className="text-xl text-[#a0a0a0]">Tools for thought</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <ProductCard
          name="Axis"
          description="A minimal markdown editor for macOS. Distraction-free writing with keyboard-first navigation."
          href="/products/axis"
        />
        <ProductCard
          name="Brain Dump"
          description="Your brain, searchable. A smarter way to capture and find your thoughts."
          href="/products/brain-dump"
        />
      </div>
    </div>
  );
}
