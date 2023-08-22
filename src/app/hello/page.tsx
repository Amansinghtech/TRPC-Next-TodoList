import React from 'react'
import { serverClient } from '@main/trpc/serverClient'

// this component is rendered on the server
async function page() {
	let hello = await serverClient.hello()
	return <div>{hello}</div>
}

export default page
