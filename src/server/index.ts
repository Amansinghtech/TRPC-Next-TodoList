import { publicProcedure, router } from './trpc'
import { getTodoList, insertTodoList } from '@main/db/todo.schema'
import { z } from 'zod'

export const appRouter = router({
	hello: publicProcedure.query(async () => {
		return 'Hello, World!'
	}),

	getTodoList: publicProcedure.query(async () => {
		return await getTodoList()
	}),

	addTodoItem: publicProcedure
		.input(z.string())
		.mutation(async ({ input }) => {
			console.log('addTodoItem', input)
			let out = await insertTodoList({
				title: input,
			})
			console.log('addTodoItem', out)
		}),
})

export type AppRouter = typeof appRouter
