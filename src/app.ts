import fastify from 'fastify'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { randomUUID } from 'crypto'

import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()
app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
