import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { todos } from '~/db/schema'

export default eventHandler(async (event) => {
	const { id } = await getValidatedRouterParams(
		event,
		z.object({
			id: z.coerce.number(),
		}).parse,
	)

	return db.query.todos.findFirst({
		where: eq(todos.id, id),
	})
})
