"use client";
import React from "react"; // Import React if necessary
import { CogIcon, PlusIcon, UserIcon } from "@heroicons/react/20/solid";
import { IoLogOut, IoDesktop } from "react-icons/io5";
import { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("my-courses");
  const navItems = [
    {
      name: "My Profile",
      icon: UserIcon,
      key: "profile",
      link: "/Profile",
    },
    {
      name: "Dashboard",
      icon: IoDesktop,
      key: "dashboard",
      link: "/Dashboard",
    },
    {
      name: "My Courses",
      icon: IoDesktop,
      key: "my-courses",
      link: "/MyCourses",
    },
    {
      name: "Add Course",
      icon: PlusIcon,
      key: "add-course",
      link: "/AddCourses",
    },
    {
      name: "Settings",
      icon: CogIcon,
      key: "settings",
      link: "/Settings",
    },
    {
      name: "Logout",
      icon: IoLogOut,
      key: "logout",
      link: "/Logout",
    },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex-col p-6 hidden lg:block">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li
            key={item.key}
            className={`flex items-center p-2 rounded-lg ${
              activeTab === item.key
                ? "bg-yellow-500 text-black"
                : "hover:bg-gray-700"
            } cursor-pointer`}
            onClick={() => setActiveTab(item.key)}
          >
            <a href={item.link} className="flex items-center w-full">
              <item.icon className="h-6 w-6 mr-3" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
