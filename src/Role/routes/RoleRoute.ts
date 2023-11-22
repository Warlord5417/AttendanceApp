import { PrismaClient } from "@prisma/client";
import { RoleRepoPrismaImpl } from "../repo/RoleRepoPrismaImpl";
import { RoleServiceImpl } from "../services/RoleServiceImpl";
import { RoleController } from "./RoleController";
import { Context } from "hono";
import { RoleDoesNotExistError } from "../error/RoleDoesNotExistError";

export const roleRoute = new RoleController(
    new RoleServiceImpl(
        new RoleRepoPrismaImpl(
            new PrismaClient()
        )
    )
);

const service = roleRoute.getService()

roleRoute.post('/create', async (c: Context) => {
    try{
        const requestBody = await c.req.json()
        const role = await service.createRole(requestBody)
        return c.json(role)
    }
    catch(err){
        if(err instanceof RoleDoesNotExistError){
            c.status(400)
            return c.json({ message: err.message })
        }
        console.error(err)
        c.status(500)
        return c.json({ message: 'Server Error'})
    }
})