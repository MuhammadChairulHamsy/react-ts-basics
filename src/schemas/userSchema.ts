import z from "zod";

export const userFormSchema = z.object({
  name: z.string().min(3, { message: "Minimal 3 karakter" }),
  email: z
    .string()
    .email({ message: "Email harus mengandung @" }),
  company: z.string().optional(),
});

export type UserFormSchema = z.infer<typeof userFormSchema>;