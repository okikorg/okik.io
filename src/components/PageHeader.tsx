interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold tracking-tight text-text">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-text-muted text-lg">{subtitle}</p>
      )}
    </div>
  );
}
