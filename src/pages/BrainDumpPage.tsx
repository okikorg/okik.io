import { PageHeader } from "../components/PageHeader";

export function BrainDumpPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <PageHeader
        title="Brain Dump"
        subtitle="Your brain, searchable"
      />

      <div className="space-y-6">
        <p className="text-[#a0a0a0] leading-relaxed max-w-2xl">
          A smarter way to capture, connect, and find your thoughts.
        </p>

        <a
          href="https://mybraindump.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-[#e0e0e0] transition-colors"
        >
          Visit mybraindump.io
        </a>
      </div>
    </div>
  );
}
