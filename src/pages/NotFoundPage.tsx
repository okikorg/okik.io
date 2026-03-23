import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-text-muted text-lg mb-8">Page not found</p>
      <Link
        to="/"
        className="text-text underline underline-offset-4 hover:text-text-muted transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
