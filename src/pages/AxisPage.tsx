import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";

export function AxisPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <PageHeader
        title="Axis"
        subtitle="A minimal markdown editor for macOS"
      />

      <div className="space-y-8">
        <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
          Distraction-free writing with keyboard-first navigation.
          <br />
          Private by design — all files stay on your device.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 pt-4">
          {[
            { title: "Keyboard-First", description: "Full markdown formatting, navigation, and file management without touching the mouse." },
            { title: "Distraction-Free", description: "Clean interface with toggleable sidebar, outline, and calendar panels." },
            { title: "Private by Design", description: "All files stay on your device. No accounts, no tracking, no network requests." },
            { title: "Native macOS", description: "Built with SwiftUI. Runs in App Sandbox with security-scoped bookmarks." },
          ].map((feature) => (
            <div key={feature.title} className="p-4 rounded-lg border border-border bg-bg-card">
              <h3 className="text-xs font-medium text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-border flex gap-4 text-xs">
        <Link
          to="/products/axis/privacy"
          className="text-text-muted hover:text-text transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          to="/products/axis/support"
          className="text-text-muted hover:text-text transition-colors"
        >
          Support
        </Link>
      </div>
    </div>
  );
}
