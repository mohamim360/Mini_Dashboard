"use client"

import { useFetch } from "@/hook/useFetch"
import Loader from "@/components/UI/loader"
import Error from "@/components/UI/error"
import { useState } from "react";
import { User } from "@/lib/type"
import UserModal from "@/components/UI/user-modal"
import { linkIcons } from "@/lib/linkIcon"

function Users() {

  const { data: users, loading, error } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users")

  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const Icon = linkIcons["Users"]

  return (
    <div className="p-4 flex flex-col gap-4 mx-auto w-full h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b pb-2 mx-4">
       <div className="flex items-center gap-2">
          <div className="p-1 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
            <Icon className="text-white text-xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
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
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto shadow rounded-xl">
            <table className="border-collapse w-full">
              <thead>
                <tr className="bg-gray-900 text-gray-100 text-left">
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

          {/* Mobile Cards */}
          <div className="md:hidden overflow-x-auto space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{user.email}</p>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-medium">Company:</span> {user.company.name}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Modal */}
      <UserModal selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

    </div>
  )
}

export default Users
