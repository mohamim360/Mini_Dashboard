"use client"

import Card from "@/components/UI/card";
import Loader from "@/components/UI/loader"
import Error from "@/components/UI/error"
import { useFetch } from "@/hook/useFetch"
import { useState } from "react"
import { Post } from "@/lib/type";
import { linkIcons } from "@/lib/linkIcon";


function Posts() {

	const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts")

	const { data: posts, loading, error } = useFetch<Post[]>(url)

	const Icon = linkIcons["Posts"] 

	return (
		<div className="p-4 flex flex-col gap-4 mx-auto w-full h-full">
			{/* Header */}
			<div className="flex items-center justify-between mb-6 border-b pb-2 mx-4">
				
				<div className="flex items-center gap-2">
          <div className="p-1 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
            <Icon className="text-white text-xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Posts</h1>
        </div>

				{/*Simulate Error Button */}
				<button
					onClick={() => setUrl("https://jsonplaceholder.typicode.com/wrong-url")}
					className="px-5 py-2 rounded-lg bg-gradient-to-r bg-gray-900 text-white font-medium shadow hover:bg-gray-800"
				>
					Load More
				</button>
			</div>

			{/* Loader */}
			{loading &&
				<div className="flex items-center justify-center h-[70vh]">
					<Loader />
				</div>
			}

			{/* Error */}
			{error && (
				<Error error={error}/>
			)}

			{/* Posts Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-scroll">
				{posts?.map((post) => (
					<Card
						key={post.id}
						title={post.title}
						body={post.body}
						link={`/posts/${post.id}`}
					/>
				))}
			</div>
		</div>
	)
}
export default Posts