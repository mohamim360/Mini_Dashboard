"use client";

import { motion } from "framer-motion";
import {
  MdOutlineWavingHand
} from "react-icons/md";
import Link from "next/link";
import { stats } from "@/lib/data";
export default function Home() {

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="p-6 flex flex-col gap-6 mx-auto w-full h-full overflow-x-auto">
      {/* Welcome Section */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 mb-2">
          <MdOutlineWavingHand className="text-3xl" />
          <h1 className="text-3xl font-bold text-gray-800">Welcome back!</h1>
        </div>
        <p className="text-gray-600">Here&apos;s what&apos;s happening with your dashboard today.</p>
      </div>


      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -2 }}
              className="bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.gradient}`}>
                  <Icon className="text-white text-2xl" />
                </div>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-green-400 text-sm font-semibold bg-green-400/20 px-2 py-1 rounded-full"
                >
                  {stat.change}
                </motion.span>
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
              <p className="text-white text-2xl font-bold">{stat.value}</p>
            </motion.div>
          );
        })}
      </motion.div>

     
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Explore Your Dashboard
            </h2>
            <p className="text-white/90 mb-6">
              Navigate through different sections to view users, posts, and detailed analytics.
              Everything you need to manage your data in one place.
            </p>
            <Link className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              href="/posts"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}