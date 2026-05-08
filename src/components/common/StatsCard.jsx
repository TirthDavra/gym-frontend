const StatsCard = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {value}
          </h2>
        </div>

        <div className="bg-slate-100 p-3 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;