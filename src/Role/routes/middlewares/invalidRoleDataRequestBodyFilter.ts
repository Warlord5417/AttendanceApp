import { Context } from "hono";
import { z } from "zod";

export async function invalidRoleDataRequestBodyFilter(c: Context, next: Function){
    const RoleData = z.object({
        role: z.string(),
        description: z.string() 
    })
    const requestBody = await c.req.json()
    try{
        RoleData.parse(requestBody)
        await next()
    }
    catch(err){
        c.status(400)
        return c.json({ message: 'Invalid Role data'})
    }
}