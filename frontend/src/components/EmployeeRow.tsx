// components/EmployeeRow.tsx
interface EmployeeRowProps {
  employee: any;
  isSelected: boolean;
  isDeleting: boolean;
  onSelect: () => void;
  onDelete: (id: string) => void;
}

export const EmployeeRow = ({ employee, isSelected, isDeleting, onSelect, onDelete }: EmployeeRowProps) => (
  <tr className="hover:bg-slate-50/50 transition-colors group">
    <td className="px-6 py-4 text-sm text-slate-400 font-mono">#{employee.id}</td>
    <td className="px-6 py-4 text-sm font-medium text-slate-700">{employee.name}</td>
    <td className="px-6 py-4 text-sm font-medium text-slate-700">{employee.job}</td>
    <td className="px-6 py-4 text-right">
      <button
        onClick={() => onDelete(employee.id)}
        disabled={isDeleting}
        className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-all disabled:opacity-50"
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </td>
    <td className="px-6 py-4 text-right">
      <input type="radio" checked={isSelected} onChange={onSelect} name="employe-edit" />
    </td>
  </tr>
);