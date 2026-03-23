import { Outlet, Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LiquidBackground } from "./LiquidBackground";

export function Layout() {

  return (
    <div className="min-h-screen flex flex-col relative">
      <LiquidBackground />
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex h-14 items-center justify-between">
          <Link
            to="/"
            className="text-sm font-light tracking-wide text-text hover:text-text-muted transition-colors"
          >
            okik
          </Link>

          <ThemeToggle />
        </div>
      </header>

      <main className="relative z-10 flex-1 pt-14">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-border py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <Link to="/" className="text-sm font-light tracking-wide text-text">
                okik
              </Link>
              <p className="text-xs text-text-muted max-w-xs">
                Tools for thought.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-medium text-text uppercase tracking-wider">
                Products
              </h4>
              <nav className="flex flex-col gap-2">
                <Link to="/products/axis" className="text-xs text-text-muted hover:text-text transition-colors">
                  Axis
                </Link>
                <Link to="/products/brain-dump" className="text-xs text-text-muted hover:text-text transition-colors">
                  Brain Dump
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-medium text-text uppercase tracking-wider">
                Legal
              </h4>
              <nav className="flex flex-col gap-2">
                <Link to="/products/axis/privacy" className="text-xs text-text-muted hover:text-text transition-colors">
                  Axis Privacy Policy
                </Link>
                <Link to="/products/axis/support" className="text-xs text-text-muted hover:text-text transition-colors">
                  Axis Support
                </Link>
              </nav>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-xs text-text-faint text-center">
              {new Date().getFullYear()} Okik
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
