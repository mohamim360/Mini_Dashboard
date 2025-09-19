"use client"

import { links } from "@/lib/data";
import Link from "next/link";
import { JSX, useState } from "react";
import { FiHome, FiFileText, FiUsers } from "react-icons/fi";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

// Map link names to icons
const linkicons: Record<string, JSX.Element> = {
  Home: <FiHome className="text-lg" />,
  Posts: <FiFileText className="text-lg" />,
  Users: <FiUsers className="text-lg" />,
  Profile: <CgProfile className="text-lg" />
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <motion.aside
      animate={{ width: isOpen ? 125 : 78 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="h-screen"
    >
      <div className="h-full flex items-center w-full">
        <div className="flex flex-col items-center h-[88lvh] w-24 ml-4 mr-auto rounded-2xl border border-gray-700 bg-gray-900 shadow-lg">
          {/* Header */}
          <div className="w-full py-4 px-2 flex flex-col items-center justify-center border-b border-gray-700">
            <motion.div 
              className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <MdOutlineDashboardCustomize className="text-xl text-white" />
            </motion.div>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.h1 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white font-semibold mt-2 text-center text-xs whitespace-nowrap overflow-hidden tracking-wide leading-tight"
                >
                  <span>Mini <br/> Dashboard</span>
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          
          <nav className="flex-1 flex flex-col items-center py-4">
            <ul className="flex flex-col items-center gap-y-8 text-sm font-medium text-white">
              {links.map((link) => (
                <li key={link.route}>
                  <Link
                    href={link.route}
                    className="px-2 py-1 rounded hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    {linkicons[link.name]}
                    <AnimatePresence initial={false}>
                      {isOpen &&
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                          className="whitespace-nowrap overflow-hidden"
                        >
                          {link.name}
                        </motion.span>
                      }
                    </AnimatePresence>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl p-3 hover:bg-gray-800 rounded-full transition-colors"
          >
            {isOpen ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
          </button>
        </div>
      </div>
    </motion.aside>
  );
}

export default Sidebar;