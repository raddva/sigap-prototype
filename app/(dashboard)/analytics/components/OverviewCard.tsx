type Props = {
  title: string;
  value: string;
  trend: string;
  icon: string;
};

export default function OverviewCard({
  title,
  value,
  trend,
  icon,
}: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-start justify-between mb-4">
        <span className="material-symbols-outlined text-blue-700">
          {icon}
        </span>

        <span className="text-sm text-green-600 font-medium">
          {trend}
        </span>
      </div>

      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="text-3xl font-bold mt-2">{value}</h3>
    </div>
  );
}