import {prisma} from "../lib/prisma.js";

export const findAllUser = async () => {
    return await prisma.users.findMany();
}