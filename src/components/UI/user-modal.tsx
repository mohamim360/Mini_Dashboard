import { User } from "@/lib/type";
import { motion, AnimatePresence } from "framer-motion"
import { FaEnvelope, FaPhone, FaGlobe, FaBuilding, FaHome } from "react-icons/fa";

function UserModal({ selectedUser, setSelectedUser }: { selectedUser: User | null, setSelectedUser: (user: User | null) => void }) {
	return (
		<>
		<AnimatePresence>
        {selectedUser && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg mx-4 overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >

              {/* Modal Header */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-3">
                {selectedUser.name}
              </h2>

              {/* Modal Content */}
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-gray-600" />
                  <span className="font-semibold">Email:</span> {selectedUser.email}
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-gray-600" />
                  <span className="font-semibold">Phone:</span> {selectedUser.phone}
                </p>
                <p className="flex items-center gap-2">
                  <FaGlobe className="text-gray-600" />
                  <span className="font-semibold">Website:</span>{" "}
                  <a
                    href={`https://${selectedUser.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {selectedUser.website}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <FaBuilding className="text-gray-600" />
                  <span className="font-semibold">Company:</span> {selectedUser.company.name}
                </p>
                <p className="flex gap-2">
                  <FaHome className="text-gray-600" />
                  <span className="font-semibold">Address:</span>{" "}
                  {selectedUser.address.street}, {selectedUser.address.suite},{" "}
                  {selectedUser.address.city}, {selectedUser.address.zipcode}
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setSelectedUser(null)}
                  className="px-5 py-2 rounded-lg bg-gray-900 text-white font-medium shadow hover:bg-gray-700 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
		</>
	)
}
export default UserModal