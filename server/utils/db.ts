import { drizzle } from 'drizzle-orm/node-postgres'
import * as schema from '~/db/schema'

const { databaseUrl } = useRuntimeConfig()

const db = drizzle(databaseUrl, { schema })

export default db
