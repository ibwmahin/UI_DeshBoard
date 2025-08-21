"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import DashboardContent from "@/components/dashboard-content"

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar collapsed={sidebarCollapsed} currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <main className="flex-1 overflow-y-auto p-6">
            <DashboardContent currentPage={currentPage} />
          </main>
        </div>
      </div>
    </div>
  )
}
