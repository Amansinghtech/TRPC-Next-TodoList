import { InferModel } from 'drizzle-orm'
import { serial, text, timestamp, pgTable } from 'drizzle-orm/pg-core'
import db from './client'

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name'),
	password: text('password'),
	role: text('role').$type<'admin' | 'customer'>(),
})

export type User = InferModel<typeof users>
export type NewUser = InferModel<typeof users, 'insert'>

export async function insertUser(user: NewUser): Promise<User[]> {
	return db.insert(users).values(user).returning()
}
