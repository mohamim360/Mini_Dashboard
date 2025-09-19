"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { linkIcons } from "@/lib/linkIcon";
import Image from "next/image";
import Loader from "@/components/UI/loader";
import { MdLogout, MdEmail, MdPerson, MdVerified } from "react-icons/md";
import { motion } from "framer-motion";

export default function Profile() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const error = status === "unauthenticated";

  const Icon = linkIcons["Users"];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <Loader />
      </div>
    );
  }
  // Sign In
  if (error || !session) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-4 m-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700"
        >
          <p className="text-lg text-gray-300 mb-6">
            You must be signed in to view this page.
          </p>
          <button
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
            onClick={() => signIn()}
          >
            Sign in with Google
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-4 mx-auto w-full h-full">
      <div className="flex items-center justify-between mb-6 border-b pb-2 mx-4">

        <div className="flex items-center gap-2">
          <div className="p-1 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
            <Icon className="text-white text-xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        </div>
        {/* sign out */}
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <MdLogout />
          <span className="hidden sm:inline">Sign out</span>
        </button>
      </div>

      <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
        {/* Profile Header with Gradient */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {session.user?.image && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full border-4 border-white/20 shadow-xl"
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                  <MdVerified className="text-white text-lg" />
                </div>
              </motion.div>
            )}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white mb-1">
                {session.user?.name}
              </h2>
              <p className="text-white/80">Google Account</p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6 space-y-6 lg:flex lg:gap-6 lg:space-y-0 ">
          {/* Email Section */}
          <div className="flex items-center justify-satrt gap-4 p-4 bg-gray-800 rounded-lg lg:flex-1">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <MdEmail className="text-blue-400 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email Address</p>
              <p className="text-white font-medium">{session.user?.email}</p>
            </div>
          </div>

          {/* Name Section */}
          <div className="flex items-center justify-satrt gap-4 p-4 bg-gray-800 rounded-lg lg:flex-1">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <MdPerson className="text-purple-400 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Full Name</p>
              <p className="text-white font-medium">{session.user?.name}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}