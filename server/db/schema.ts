import { boolean, integer, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	title: varchar({ length: 120 }).notNull(),
	description: text().default(''),
	completed: boolean().notNull().default(false),
	created_at: timestamp({ withTimezone: true }).notNull().defaultNow(),
	updated_at: timestamp({ withTimezone: true }).notNull().defaultNow(),
})
