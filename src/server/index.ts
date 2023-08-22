import { publicProcedure, router } from './trpc'
import {
	deleteTodoList,
	getTodoList,
	insertTodoList,
	updateTodoList,
} from '@main/db/todo.schema'
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
	deleteTodoItem: publicProcedure
		.input(z.string())
		.mutation(async ({ input }) => {
			return await deleteTodoList(input)
		}),

	updateTodoItem: publicProcedure
		.input(z.object({ id: z.string(), checked: z.boolean() }))
		.mutation(async ({ input }) => {
			let out = await updateTodoList(input.id, input.checked)
			return out
		}),
})

export type AppRouter = typeof appRouter
