import { todos } from '~/db/schema'
import { z } from 'zod'

export default eventHandler(async (event) => {
	const body = await readValidatedBody(
		event,
		z.object({
			title: z.string().min(1).max(120),
			description: z.string().optional(),
		}).parse,
	)

	const [row] = await db.insert(todos).values(body).returning()
	return row
})
