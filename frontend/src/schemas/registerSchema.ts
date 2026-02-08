import z from "zod";

export const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Minimal 3 karakter" })
    .max(10, { message: "Maksimal 10 karakter" }),
  email: z.string().email({
    message: "Email harus mengandung @",
  }),
  password: z
    .string()
    .min(8, { message: "Minimal 8 karakter" })
    .regex(/[A-Z]/, {
        message: "Password harus mengandung minimal 1 huruf besar",
    })
    .regex(/[0-9]/,  "Password harus mengandung minimal 1 angka"),
    confirmPassword: z.string(),
    age: z.coerce.number<number>().min(18, { message: "Minimal 18 karakter" }),
    gender: z.enum(["male", "female"]),
    isPregnant: z.boolean().optional(),
  })
      .superRefine(({ password, confirmPassword }, ctx) => {
        if (confirmPassword !== password) {
          ctx.addIssue({
            code: "custom",
            message: "Password tidak cocok",
            path: ["confirmPassword"]
          });
        }
      });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
