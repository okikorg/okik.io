import { PageHeader } from "../components/PageHeader";

export function AxisSupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <PageHeader title="Axis — Support" />

      <div className="space-y-8 text-text-muted leading-relaxed">
        <section>
          <h2 className="text-text font-semibold mb-2">Report an Issue</h2>
          <p>
            Found a bug or have a feature request? Open an issue on GitHub:
          </p>
          <a
            href="https://github.com/okikorg/Axis/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-accent underline underline-offset-4 hover:text-accent/70 transition-colors"
          >
            github.com/okikorg/Axis/issues
          </a>
        </section>

        <section>
          <h2 className="text-text font-semibold mb-2">Email</h2>
          <p>
            For general questions or support, reach out at{" "}
            <a
              href="mailto:admin@okik.io"
              className="text-accent underline underline-offset-4 hover:text-accent/70 transition-colors"
            >
              admin@okik.io
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-text font-semibold mb-2">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-text text-sm font-medium">Where are my files stored?</h3>
              <p className="text-sm mt-1">
                All files stay on your device. Axis runs in the macOS App Sandbox
                and only accesses folders you explicitly open.
              </p>
            </div>
            <div>
              <h3 className="text-text text-sm font-medium">Does Axis require an internet connection?</h3>
              <p className="text-sm mt-1">
                No. Axis works entirely offline with no network requests.
              </p>
            </div>
            <div>
              <h3 className="text-text text-sm font-medium">How do I reset my preferences?</h3>
              <p className="text-sm mt-1">
                Delete the app preferences by running{" "}
                <code className="bg-bg-card px-1.5 py-0.5 rounded text-xs border border-border">
                  defaults delete com.okik.axis
                </code>{" "}
                in Terminal.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
