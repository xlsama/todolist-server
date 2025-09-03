import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from '~/db/schema'
import { neon } from '@neondatabase/serverless'

const { databaseUrl } = useRuntimeConfig()

const sql = neon(databaseUrl)
const db = drizzle(sql, { schema })

export default db
