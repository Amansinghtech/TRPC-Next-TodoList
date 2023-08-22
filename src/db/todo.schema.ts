import { InferModel, eq } from 'drizzle-orm'
import { boolean, pgTable, serial, text, uuid } from 'drizzle-orm/pg-core'
import db from './client'
export const todoList = pgTable('todo_list', {
	id: uuid('id').primaryKey().defaultRandom().notNull(),
	title: text('title').notNull(),
	checked: boolean('checked').notNull().default(false),
})

export type TodoList = InferModel<typeof todoList>
export type NewTodoList = InferModel<typeof todoList, 'insert'>

export async function insertTodoList(todo: NewTodoList): Promise<TodoList[]> {
	return db.insert(todoList).values(todo).returning()
}

export async function getTodoList(): Promise<TodoList[]> {
	return db.select().from(todoList).execute()
}

export async function deleteTodoList(itemId: string): Promise<TodoList[]> {
	return db.delete(todoList).where(eq(todoList.id, itemId)).returning()
}

export async function updateTodoList(
	itemId: string,
	checked: boolean
): Promise<TodoList[]> {
	return db
		.update(todoList)
		.set({ checked })
		.where(eq(todoList.id, itemId))
		.returning()
}
