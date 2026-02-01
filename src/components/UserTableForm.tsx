// components/UserTableForm.tsx
interface FormProps {
  label: string;
  color: "green" | "indigo";
  values: { name: string; email: string; company: string };
  onChange: (data: any) => void;
  onSubmit: () => void;
  isPending: boolean;
  disabled?: boolean;
}

export const UserTableForm = ({ label, color, values, onChange, onSubmit, isPending, disabled }: FormProps) => {
  const theme = color === "green" ? "green" : "indigo";
  
  return (
    <tr className={`${disabled ? "opacity-50" : ""} border-b border-slate-100`}>
      <td className="px-6 py-4 text-center">
        <span className={`flex items-center justify-center w-6 h-6 rounded-full bg-${theme}-100 text-${theme}-600 text-xs font-bold`}>
          {color === "green" ? "+" : "✎"}
        </span>
      </td>
      <td colSpan={3} className="px-6 py-4">
        <div className="flex flex-col md:flex-row gap-3">
          <input
            placeholder="Name"
            value={values.name}
            disabled={disabled}
            onChange={(e) => onChange({ ...values, name: e.target.value })}
            className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm"
          />
          <input
            placeholder="Email"
            value={values.email}
            disabled={disabled}
            onChange={(e) => onChange({ ...values, email: e.target.value })}
            className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm"
          />
          <input
            placeholder="Company"
            value={values.company}
            disabled={disabled}
            onChange={(e) => onChange({ ...values, company: e.target.value })}
            className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm"
          />
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={onSubmit}
          disabled={isPending || disabled}
          className={`bg-${theme}-600 text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-${theme}-700 transition-all disabled:bg-slate-300`}
        >
          {isPending ? "Processing..." : label}
        </button>
      </td>
    </tr>
  );
};