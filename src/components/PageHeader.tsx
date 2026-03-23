interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-[#a0a0a0] text-lg">{subtitle}</p>
      )}
    </div>
  );
}
