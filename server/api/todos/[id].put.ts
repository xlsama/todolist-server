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
	const body = await readValidatedBody(
		event,
		z.object({
			title: z.string().min(1).max(120).optional(),
			description: z.string().optional(),
			completed: z.boolean().optional(),
		}).parse,
	)

	const [row] = await db
		.update(todos)
		.set({ ...body, updated_at: new Date() })
		.where(eq(todos.id, id))
		.returning()
	return row
})
