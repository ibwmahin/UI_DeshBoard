"use client"

import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Box } from "@mui/material"

// Components
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"

// Pages
import Dashboard from "./pages/Dashboard"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import ForgotPassword from "./pages/auth/ForgotPassword"
import TwoStep from "./pages/auth/TwoStep"
import Error from "./pages/auth/Error"
import Maintenance from "./pages/auth/Maintenance"
import UIComponents from "./pages/UIComponents"
import Chat from "./pages/Chat"
import Calendar from "./pages/Calendar"
import Email from "./pages/Email"

// Theme Context
export const ThemeContext = React.createContext()

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Create theme based on dark mode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#5D87FF",
      },
      secondary: {
        main: "#49BEFF",
      },
      background: {
        default: darkMode ? "#2A3447" : "#f5f5f9",
        paper: darkMode ? "#2A3447" : "#ffffff",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: "0 0 20px rgba(0,0,0,0.05)",
          },
        },
      },
    },
  })

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        <CssBaseline />
        <Router>
          <Routes>
            {/* Auth Routes (without sidebar/navbar) */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/two-step" element={<TwoStep />} />
            <Route path="/auth/error" element={<Error />} />
            <Route path="/auth/maintenance" element={<Maintenance />} />

            {/* Main App Routes (with sidebar/navbar) */}
            <Route
              path="/*"
              element={
                <Box sx={{ display: "flex" }}>
                  <Sidebar open={sidebarOpen} onToggle={toggleSidebar} />
                  <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Navbar onToggleSidebar={toggleSidebar} />
                    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/ui-components" element={<UIComponents />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/email" element={<Email />} />
                      </Routes>
                    </Box>
                  </Box>
                </Box>
              }
            />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
