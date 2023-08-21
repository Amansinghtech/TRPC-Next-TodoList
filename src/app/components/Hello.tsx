'use client'
import { trpc } from '@main/trpc/client'

export default function HelloNode() {
	const { data, error, isLoading } = trpc.hello.useQuery()

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		console.log(error)
		return <div>Error: {error.message}</div>
	}

	return <div>Hello Node {data}</div>
}
