import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userFormSchema, type UserFormSchema } from "../schemas/userSchema";

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

export const UserTableForm = ({
  label,
  color,
  values,
  onChange,
  onSubmit,
  isPending,
  disabled,
}: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userFormSchema),
    values,
  });

  const onValidSubmit = () => {
    onSubmit();
  };
  const theme = color === "green" ? "green" : "indigo";

  const colorVariants = {
    green: "bg-green-600 hover:bg-green-700 shadow-green-100 text-white",
    indigo: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100 text-white",
  };

  return (
    <tr className={`${disabled ? "opacity-50" : ""} border-b border-slate-100`}>
      <td className="px-6 py-4 text-center">
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full bg-${theme}-100 text-${theme}-600 text-xs font-bold`}
        >
          {color === "green" ? "+" : "✎"}
        </span>
      </td>
      <td colSpan={3} className="px-6 py-4">
        <form id={`form-${label}`} onSubmit={handleSubmit(onValidSubmit)}>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <input
                id="name"
                type="text"
                {...register("name")}
                value={values.name}
                disabled={disabled}
                onChange={(e) => {
                  register("name").onChange(e);
                  onChange({ ...values, name: e.target.value });
                }}
                placeholder="Name"
                className={`flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm ${errors.name ? "border-red-500" : "border-slate-200"}`}
              />
              {errors.name && (
                <p className="text-[10px] text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Email"
                value={values.email}
                disabled={disabled}
                onChange={(e) => {
                  register("email").onChange(e);
                  onChange({ ...values, email: e.target.value });
                }}
                className={`flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm ${errors.email ? "border-red-500" : "border-slate-200"}`}
              />
              {errors.email && (
                <p className="text-[10px] text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <input
                id="company"
                type="text"
                {...register("company")}
                placeholder="Company"
                value={values.company}
                disabled={disabled}
                onChange={(e) => {
                  register("company").onChange(e);
                  onChange({ ...values, company: e.target.value });
                }}
                className={`flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm  ${errors.company ? "border-red-500" : "border-slate-200"}`}
              />
              {errors.company && (
                <p className="text-[10px] text-red-500 mt-1">
                  {errors.company.message}
                </p>
              )}
            </div>
          </div>
        </form>
      </td>
      <td className="px-6 py-4 text-right">
        <button
          type="submit"
          form={`form-${label}`}
          disabled={isPending || disabled}
          className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-md active:scale-95 disabled:bg-slate-300 disabled:shadow-none ${colorVariants[color]}`}
        >
          {isPending ? "Processing..." : label}
        </button>
      </td>
    </tr>
  );
};
