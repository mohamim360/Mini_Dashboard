import { FiFileText, FiUsers } from "react-icons/fi";
import {
  MdTrendingUp,
  MdOutlineDashboardCustomize,
} from "react-icons/md";

// Define navigation links
export const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Posts",
    route: "/posts",
  },
  {
    name: "Users",
    route: "/users",
  },
  {
    name: "Profile",
    route: "/profile",
  },
] as const;

// Sample stats data
export const stats = [
    {
      title: "Total Users",
      value: "2,543",
      change: "+12%",
      trend: "up",
      icon: FiUsers,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Active Posts",
      value: "1,234",
      change: "+8%",
      trend: "up",
      icon: FiFileText,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Growth Rate",
      value: "89.2%",
      change: "+23%",
      trend: "up",
      icon: MdTrendingUp,
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "Dashboard Views",
      value: "8,901",
      change: "+5%",
      trend: "up",
      icon: MdOutlineDashboardCustomize,
      gradient: "from-blue-500 to-purple-600",
    },
  ] as const;