const Button = ({
  children,
  type = "button",
  loading = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`
        w-full
        bg-slate-900
        hover:bg-slate-800
        text-white
        py-3
        rounded-xl
        font-medium
        transition-all
        disabled:opacity-70
        disabled:cursor-not-allowed
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {loading
        ? "Please wait..."
        : children}
    </button>
  );
};

export default Button;