const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          border
          border-slate-300
          rounded-xl
          px-4
          py-3
          text-sm
          outline-none
          bg-white
          transition-all
          focus:border-slate-500
          focus:ring-4
          focus:ring-slate-200
        "
      />
    </div>
  );
};

export default Input;