import { LuUsersRound } from "react-icons/lu";

function Users() {
	return (
		<div className="p-4 flex flex-col gap-4 mx-auto w-full h-full">

			<div className="flex items-center justify-between mb-6 border-b pb-2 mx-4">
				
				<div className="flex items-center gap-2">
					<LuUsersRound className="text-blue-600 text-2xl" />
					<h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">Users</h1>
				</div>
			</div>

			</div>
	)
}
export default Users