import db from '~/utils/db'
import { desc } from 'drizzle-orm'
import { todos } from '~/db/schema'

export default eventHandler(() => {
	return db.query.todos.findMany({
		orderBy: [desc(todos.updated_at)],
	})
})
