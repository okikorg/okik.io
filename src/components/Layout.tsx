import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b border-[#1a1a1a] px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight">
            okik
          </Link>
          <div className="flex gap-6 text-sm text-[#a0a0a0]">
            <Link to="/products" className="hover:text-white transition-colors">
              Products
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-[#1a1a1a] px-6 py-6">
        <div className="max-w-5xl mx-auto text-center text-sm text-[#a0a0a0]">
          &copy; {new Date().getFullYear()} Okik. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
