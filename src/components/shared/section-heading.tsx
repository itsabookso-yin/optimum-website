interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      <div className="mt-2 h-1 w-16 bg-[#0099CC] rounded-full" />
      {subtitle && (
        <p className="mt-3 text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
