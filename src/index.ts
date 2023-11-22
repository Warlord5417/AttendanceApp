import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { roleRoute } from './Role/routes/RoleRoute'
import { font } from 'ascii-art'

const app = new Hono()
app.route('/role', roleRoute)

serve(app, async () => {
    const title = await font('Attendance', 'Doom').toPromise()
    console.log(title)
    console.log('Server started on port 3000')
})
