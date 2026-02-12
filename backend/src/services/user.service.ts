import { prisma } from "../lib/prisma.js";
import { CreateUserInput, UpdateUserInput } from "../types/user.js";

export const findAllUser = async () => {
  return await prisma.users.findMany();
};

export const findUserById = async (id: number) => {
  return await prisma.users.findUnique({
    where: { id },
  });
};

export const createUser = async (data: CreateUserInput) => {
  return await prisma.users.create({
    data: data,
  });
};

export const updateUser = async (id: number, data: UpdateUserInput) => {
  return await prisma.users.update({
    where: { id },
    data: data,
  });
};

export const deleteUser = async (id: number) => {
  return await prisma.users.delete({
    where: { id },
  });
};
