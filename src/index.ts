import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { roleRoute } from './Role/routes/RoleRoute'

const app = new Hono()
app.route('/role', roleRoute)

serve(app)
