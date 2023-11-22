import { Context } from "hono";

export async function invalidJSONRequestBodyFilter(c: Context, next: Function){
    try{
        await c.req.json()
        await next()
    }
    catch(err){
        c.status(400)
        return c.json({ message: 'Invalid JSON request body'})
    }
}