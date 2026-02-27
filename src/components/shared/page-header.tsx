interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-[#000066] to-[#0099CC] py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-lg text-white/80">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
