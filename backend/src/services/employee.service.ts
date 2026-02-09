import { prisma } from "../lib/prisma.js";
import { CreateEmployeeInput, UpdateEmployeeInput } from "../types/employee.js";

export const findAllEmployee = async () => {
  return await prisma.employes.findMany();
};

export const findEmployeeById = async (id: number) => {
  return await prisma.employes.findUnique({
    where: { id },
  });
};

export const createEmployee = async (data: CreateEmployeeInput) => {
  return await prisma.employes.create({
    data: data,
  });
};

export const updateEmployee = async (id: number, data: UpdateEmployeeInput) => {
  return await prisma.employes.update({
    where: { id },
    data: data,
  });
};

export const deleteEmployee = async (id: number) => {
  return await prisma.employes.delete({
    where: { id },
  });
};
