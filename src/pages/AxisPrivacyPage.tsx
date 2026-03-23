import { PageHeader } from "../components/PageHeader";

export function AxisPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <PageHeader title="Axis — Privacy Policy" />

      <div className="space-y-6 text-[#a0a0a0] leading-relaxed">
        <p className="text-sm">Last updated: March 23, 2026</p>

        <section>
          <h2 className="text-white font-semibold mb-2">Overview</h2>
          <p>
            Axis is a local-only markdown editor for macOS. Your privacy is
            fundamental to how Axis is built — the app is designed to work
            entirely on your device with no data ever leaving it.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold mb-2">Data Collection</h2>
          <p>
            Axis does not collect, transmit, or store any personal data. There
            are no accounts, no analytics, no tracking, and no network requests.
            All your files remain on your device.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold mb-2">Local Storage</h2>
          <p>
            Axis uses macOS UserDefaults solely to persist your app preferences
            (such as theme selection and window state). This data is stored
            locally on your device and is never transmitted.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold mb-2">File Access</h2>
          <p>
            Axis runs inside the macOS App Sandbox. It only accesses files and
            folders you explicitly open. Folder access is persisted between
            sessions using security-scoped bookmarks, a macOS system feature that
            requires your explicit consent.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold mb-2">Third Parties</h2>
          <p>
            Axis does not integrate with any third-party services, SDKs, or
            analytics platforms. There are no cookies, no advertising identifiers,
            and no external dependencies that transmit data.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold mb-2">Contact</h2>
          <p>
            If you have questions about this policy, contact us at{" "}
            <a
              href="mailto:admin@okik.io"
              className="text-white underline underline-offset-4 hover:text-[#a0a0a0] transition-colors"
            >
              admin@okik.io
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
