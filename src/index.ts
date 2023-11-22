import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { roleRoute } from './Role/routes/RoleRoute'
import { font } from 'ascii-art'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('/*', cors({
    origin: 'http://localhost:5173',
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['POST', 'GET', 'PUT', 'DELETE'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
}))
app.route('/role', roleRoute)

serve(app, async () => {
    const title = await font('Attendance', 'Doom').toPromise()
    console.log(title)
    console.log('Server started on port 3000')
})
