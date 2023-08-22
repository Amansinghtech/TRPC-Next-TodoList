import { publicProcedure, router } from './trpc'
import { insertTodoList } from '@main/db/todo.schema'
import { z } from 'zod'

export const appRouter = router({
	hello: publicProcedure.query(async () => {
		return 'Hello, World!'
	}),
	addTodoItem: publicProcedure
		.input(z.string())
		.mutation(async ({ input }) => {
			insertTodoList({
				title: input,
			})
		}),
})

export type AppRouter = typeof appRouter
