"use client"

import {
  Bars3Icon,
  BellIcon,
  MoonIcon,
  SunIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"

export default function Header({ sidebarCollapsed, setSidebarCollapsed, darkMode, setDarkMode }) {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showAppsDropdown, setShowAppsDropdown] = useState(false)

  const toggleNotifications = () => {
    if (showProfile) setShowProfile(false)
    if (showAppsDropdown) setShowAppsDropdown(false)
    setShowNotifications(!showNotifications)
  }

  const toggleProfile = () => {
    if (showNotifications) setShowNotifications(false)
    if (showAppsDropdown) setShowAppsDropdown(false)
    setShowProfile(!showProfile)
  }

  const toggleAppsDropdown = () => {
    if (showNotifications) setShowNotifications(false)
    if (showProfile) setShowProfile(false)
    setShowAppsDropdown(!showAppsDropdown)
  }

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-3 transition-colors duration-150">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
          >
            <Bars3Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-80 pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-150"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {/* Apps Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAppsDropdown}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-150"
              >
                <span>Apps</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {showAppsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Chat
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Calendar
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Email
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Kanban
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-150"
            >
              Chat
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-150"
            >
              Calendar
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-150"
            >
              Email
            </a>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150">
            <img src="/placeholder.svg?height=20&width=20" alt="UK" className="w-5 h-5" />
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-150"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform duration-150" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform duration-150" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={toggleNotifications}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 relative transition-colors duration-150"
            >
              <BellIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">3 new</span>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[
                    { name: "Roman", action: "Joined thes Team!", desc: "Congratulate him" },
                    { name: "New message", action: "received", desc: "Salma sent you new message" },
                    { name: "New Payment", action: "received", desc: "Check your earnings" },
                    { name: "Jolly", action: "completed tasks", desc: "Assign her new tasks" },
                    { name: "Roman", action: "Joined the Team!", desc: "Congratulatse him" },
                  ].map((notification, index) => (
                    <div
                      key={index}
                      className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-start space-x-3">
                        <img
                          src={`/placeholder.svg?height=40&width=40&query=user ${index}`}
                          alt="User"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {notification.name} {notification.action}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{notification.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <button className="w-full py-2 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900">
                    See all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={toggleProfile}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
            >
              <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="w-8 h-8 rounded-full" />
              <ChevronDownIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">User Profile</h3>

                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      alt="Mathew Anderson"
                      className="w-15 h-15 rounded-full"
                    />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Mathew Anderson</h4>
                      <p className="text-gray-500 dark:text-gray-400">Designer</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">info@modernize.com</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">My Profile</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Account Settings</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">My Inbox</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Messages & Email</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">My Tasks</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">To-do and Daily Tasks</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-2">Unlimited Access</h4>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium">Upgrade</button>
                  </div>

                  <button className="w-full py-2 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
