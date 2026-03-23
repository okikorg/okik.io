import { PageHeader } from "../components/PageHeader";

export function BrainDumpPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <PageHeader
        title="Brain Dump"
        subtitle="Your brain, searchable"
      />

      <div className="space-y-8">
        <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
          Capture everything. Remember nothing. Retrieve anything.
          <br />
          The personal knowledge management tool for people who hate personal knowledge management.
        </p>

        <div className="inline-flex flex-wrap items-center gap-2 text-xs text-text-muted">
          <span className="px-3 py-1.5 rounded-md bg-bg-card border border-border">
            Dump
          </span>
          <span className="text-text-faint">&rarr;</span>
          <span className="px-3 py-1.5 rounded-md bg-bg-card border border-border">
            Forget
          </span>
          <span className="text-text-faint">&rarr;</span>
          <span className="px-3 py-1.5 rounded-md bg-bg-card border border-border">
            Ask
          </span>
          <span className="text-text-faint">&rarr;</span>
          <span className="px-3 py-1.5 rounded-md bg-accent-muted border border-accent/20 text-accent">
            Retrieve
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 pt-4">
          {[
            { title: "Capture", description: "Rich editor with slash commands, markdown, code blocks, tables, and images. Just dump and save." },
            { title: "Forget", description: "Move on with your life. Trust that it's stored safely. No guilt about not organizing." },
            { title: "Retrieve", description: "Ask in natural language. Pick your AI model. Enable deep analysis or web search for richer answers." },
            { title: "Memories", description: "Teach the AI about yourself. It remembers your preferences, context, and personality across chats." },
            { title: "Private by Default", description: "Encrypted and private. Your thoughts stay yours. No training on your data." },
            { title: "Minimal & Fast", description: "Dark and light themes. Keyboard-first design. No clutter, no distractions." },
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

        <div className="pt-4">
          <a
            href="https://mybraindump.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 border border-border-hover text-text text-sm rounded-md hover:border-text-muted transition-colors"
          >
            Visit mybraindump.io &rarr;
          </a>
        </div>

        <p className="text-xs text-text-faint pt-4">
          Stop organizing. Start asking.
        </p>
      </div>
    </div>
  );
}
