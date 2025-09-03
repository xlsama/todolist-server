import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	out: 'server/db/migrations',
	schema: 'server/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.NITRO_DATABASE_URL,
	},
})
