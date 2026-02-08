import {prisma} from "../lib/prisma.js";

export const findAllEmployee = async () => {
    return await prisma.employes.findMany();
}  

