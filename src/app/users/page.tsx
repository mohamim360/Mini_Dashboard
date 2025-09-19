"use client"

import { useFetch } from "@/hook/useFetch"
import Loader from "@/components/UI/loader"
import Error from "@/components/UI/error"
import { LuUsersRound } from "react-icons/lu"
import { useState } from "react";
import { User } from "@/lib/type"
import UserModal from "@/components/UI/user-modal"

function Users() {

  const { data: users, loading, error } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users")

  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  return (
    <div className="p-4 flex flex-col gap-4 mx-auto w-full h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b pb-2 mx-4">
        <div className="flex items-center gap-2">
          <LuUsersRound className="text-blue-600 text-2xl" />
          <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">Users</h1>
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex items-center justify-center h-[70vh]">
          <Loader />
        </div>
      )}

      {/* Error */}
      {error && <Error error={error} />}

      {/* Users Table */}
      {!loading && !error && users && (
        <div className="overflow-x-auto shadow rounded-xl w-full h-full">
          <table className="border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="px-6 py-3 text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-sm font-semibold">Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className="cursor-pointer hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3 border-b">{user.name}</td>
                  <td className="px-6 py-3 border-b">{user.email}</td>
                  <td className="px-6 py-3 border-b">{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      <UserModal selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

    </div>
  )
}

export default Users
