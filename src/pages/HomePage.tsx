import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-text-muted mb-6 tracking-wider uppercase">
            Build. Write. Think.
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-text mb-6">
            Tools for{" "}
            <span className="text-accent">thought</span>.
          </h1>

          <p className="text-sm sm:text-base text-text-muted mb-12 max-w-lg mx-auto leading-relaxed">
            Software that stays out of your way.
            <br className="hidden sm:block" />
            Minimal tools for people who value focus over features.
          </p>

          <button
            onClick={() => {
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-xs text-text-muted border border-border-hover px-5 py-2.5 rounded-md hover:border-text-muted hover:text-text transition-colors"
          >
            See Products
          </button>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-text mb-4">
              Products
            </h2>
            <p className="text-sm text-text-muted max-w-lg mx-auto">
              Each tool does one thing well.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Axis */}
            <Link
              to="/products/axis"
              className="group block p-6 rounded-lg border border-border bg-bg-card hover:border-border-hover transition-[border-color] duration-75"
            >
              <h3 className="text-sm font-medium text-text mb-1">
                Axis
              </h3>
              <p className="text-xs text-text-muted mb-3">
                A minimal markdown editor for macOS.
              </p>
              <p className="text-xs text-text-faint leading-relaxed">
                Distraction-free writing with keyboard-first navigation. Private by design — all files stay on your device, no accounts, no tracking.
              </p>
            </Link>

            {/* Brain Dump */}
            <Link
              to="/products/brain-dump"
              className="group block p-6 rounded-lg border border-border bg-bg-card hover:border-border-hover transition-[border-color] duration-75"
            >
              <h3 className="text-sm font-medium text-text mb-1">
                Brain Dump
              </h3>
              <p className="text-xs text-text-muted mb-3">
                Your brain, searchable.
              </p>
              <p className="text-xs text-text-faint leading-relaxed">
                Capture everything. Remember nothing. Retrieve anything. The personal knowledge management tool for people who hate personal knowledge management.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
