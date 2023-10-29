const Badge = ({ children }: { children?: React.ReactNode }) => {
  return (
    <button className="bg-white flex rounded-full border border-slate-400 items-center px-4 py-2 gap-2 text-sm transition-all duration-200 ease-in-out hover:shadow-md">
      <span className="w-3 h-3 bg-purple-400 rounded-full" />
      <p className="font-semibold">{children}</p>
    </button>
  );
};

export default Badge;
