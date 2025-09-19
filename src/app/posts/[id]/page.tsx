"use client";

import { useFetch } from "@/hook/useFetch";
import Loader from "@/components/UI/loader"
import Error from "@/components/UI/error"

export default function Post({ params }: { params: { id: string } }) {
  const { data: post, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  return (
    	<div className="p-4 flex flex-col gap-4 mx-auto w-full h-full">

      	{loading &&
				<div className="flex items-center justify-center h-[70vh]">
					<Loader />
				</div>
			}
			{error && (
				<Error/>
			)}

      {post && (
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition w-full h-full">

    <h1 className="text-3xl font-extrabold text-gray-800 mb-3 leading-snug">
      {post.title}
    </h1>

    <div className="h-1 w-full bg-gradient-to-r from-gray-400 to-gray-200 rounded mb-4"></div>

    <p className="text-gray-600 text-base leading-relaxed">{post.body}</p>
  </div>
)}

    </div>

  );
}
