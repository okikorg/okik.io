import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";

export function AxisPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <PageHeader
        title="Axis"
        subtitle="A minimal markdown editor for macOS"
      />

      <div className="space-y-10">
        <section>
          <h2 className="text-lg font-semibold mb-4">Features</h2>
          <ul className="space-y-3 text-[#a0a0a0]">
            <li className="flex items-start gap-3">
              <span className="text-white mt-0.5">&#x2022;</span>
              <span>Keyboard-first — full markdown formatting, navigation, and file management without touching the mouse</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-0.5">&#x2022;</span>
              <span>Distraction-free — clean interface with toggleable sidebar, outline, and calendar panels</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-0.5">&#x2022;</span>
              <span>Private by design — all files stay on your device, no accounts, no tracking, no network requests</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-0.5">&#x2022;</span>
              <span>Native macOS — built with SwiftUI, runs in App Sandbox with security-scoped bookmarks</span>
            </li>
          </ul>
        </section>

        <section className="flex gap-4 text-sm">
          <Link
            to="/products/axis/privacy"
            className="text-[#a0a0a0] hover:text-white transition-colors underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          <Link
            to="/products/axis/support"
            className="text-[#a0a0a0] hover:text-white transition-colors underline underline-offset-4"
          >
            Support
          </Link>
        </section>
      </div>
    </div>
  );
}
