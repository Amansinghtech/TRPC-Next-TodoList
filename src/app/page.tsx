export default function Home() {
	const todos = ['Buy groceries', 'Read a book', 'Go for a walk']

	return (
		<div className="min-h-screen bg-zinc-900 flex items-center justify-center">
			<div className="bg-zinc-800 rounded shadow-lg p-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 space-y-6">
				<h1 className="text-2xl font-semibold text-white mb-4">
					Todo App
				</h1>
				<ul>
					{todos.map((todo, index) => (
						<li
							key={index}
							className="flex justify-between items-center p-2 mb-2 bg-zinc-700 rounded"
						>
							<span className="text-white">{todo}</span>
							<button className="mr-2 text-red-500">
								Delete
							</button>
						</li>
					))}
				</ul>
				<div className="mb-4">
					<input
						type="text"
						placeholder="Enter a task..."
						className="w-full p-2 border border-zinc-600 rounded bg-zinc-900 text-white"
					/>
					<button className="mt-2 p-2 bg-green-800 text-white rounded w-full">
						Add Task
					</button>
				</div>
			</div>
		</div>
	)
}
