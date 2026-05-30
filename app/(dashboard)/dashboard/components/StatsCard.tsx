interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
}: StatsCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {title}
        </span>

        <span className="material-symbols-outlined text-primary">
          {icon}
        </span>
      </div>

      <h3 className="text-3xl font-bold">
        {value}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}