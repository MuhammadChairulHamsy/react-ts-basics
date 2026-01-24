import { type RegisterFormSchema } from "../schemas/registerSchema";

interface UserCardProps {
  user: RegisterFormSchema;
  index: number;
}

export const UserCard = ({ user, index }: UserCardProps) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
      <div className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded w-fit mb-3">
        User #{index + 1}
      </div>
      <div className="space-y-1 text-sm">
        <p>
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Password:</span> {user.password}
        </p>
        <p>
          <span className="font-semibold">Age:</span> {user.age}
        </p>
      </div>
    </div>
  );
};
