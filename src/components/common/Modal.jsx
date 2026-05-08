const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 text-xl"
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;