import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerFormSchema,
  type RegisterFormSchema,
} from "../schemas/registerSchema";
import { UserCard } from "../components/UserCard";

const RHFPage = () => {
  const [userList, setUserList] = useState<RegisterFormSchema[]>([]);
  const [showPassowrd, setShowPassword] = useState(false);
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegister = (values: RegisterFormSchema) => {
    setUserList((prev) => [...prev, values]);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-10 space-y-5">
      <section className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-2xl font-bold mb-6">Register Form</h1>
        <form
          onSubmit={form.handleSubmit(handleRegister)}
          className="space-y-4"
        >
          <div className="flex flex-col">
            <label htmlFor="username" className="font-medium text-sm">
              Username
            </label>
            <input
              id="username"
              type="text"
              {...form.register("username")}
              className="border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="text-red-500 font-medium">
              {form.formState.errors.username?.message}
            </span>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...form.register("email")}
              className="border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="text-red-500 font-medium">
              {form.formState.errors.email?.message}
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="font-medium text-sm">
              Password
            </label>
            <input
              id="password"
              type={showPassowrd ? "text" : "password"}
              {...form.register("password")}
              className="border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <span className="text-red-500 font-medium">
              {form.formState.errors.password?.message}
            </span>

            <label htmlFor="password" className="font-medium text-sm">
              Repeat Password
            </label>
            <input
              id="password"
              type={showPassowrd ? "text" : "password"}
              {...form.register("confirmPassword")}
              className="border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="text-red-500 font-medium">
              {form.formState.errors.confirmPassword?.message}
            </span>

            <div className="flex flex-row gap-2">
              <label className="font-medium text-sm">
                <input
                  type="checkbox"
                  onChange={(event) => setShowPassword(event.target.checked)}
                />
                Show password
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="age" className="font-medium text-sm">
              Age
            </label>
            <input
              id="age"
              type="number"
              {...form.register("age")}
              className="border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="text-red-500 font-medium">
              {form.formState.errors.age?.message}
            </span>
          </div>

          <div className="flex flex-col">
            <select
              {...form.register("gender")}
              className="border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <span className="text-red-500 font-medium">
              {form.formState.errors.gender?.message}
            </span>
            {form.watch("gender") === "female" && (
              <label>
                Hamil?
                <input type="checkbox" {...form.register("isPregnant")} />
              </label>
            )}
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </section>

      <section className="max-w-4xl mx-auto w-full space-y-5">
        <h2 className="text-xl font-bold text-slate-800">
          Daftar Terdaftar {userList.length}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userList.map((user, index) => (
            <UserCard key={index} user={user} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RHFPage;
