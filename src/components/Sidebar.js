"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Avatar,
  Chip,
} from "@mui/material"
import {
  Dashboard as DashboardIcon,
  ShoppingCart,
  Web,
  Chat as ChatIcon,
  CalendarToday,
  Email as EmailIcon,
  ViewKanban,
  Person,
  Business,
  School,
  Note,
  ConfirmationNumber,
  Contacts,
  Receipt,
  Assignment,
  ExpandLess,
  ExpandMore,
  PowerSettingsNew,
} from "@mui/icons-material"
import { useNavigate, useLocation } from "react-router-dom"

const Sidebar = ({ open, onToggle }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState({})

  const drawerWidth = open ? 280 : 80

  // Navigation items
  const homeItems = [
    { text: "Analytical", icon: <DashboardIcon />, path: "/dashboard", active: true },
    { text: "eCommerce", icon: <ShoppingCart />, path: "/ecommerce" },
    { text: "Frontend pages", icon: <Web />, path: "/frontend", expandable: true },
  ]

  const appItems = [
    { text: "Chat", icon: <ChatIcon />, path: "/chat" },
    { text: "Calendar", icon: <CalendarToday />, path: "/calendar" },
    { text: "Email", icon: <EmailIcon />, path: "/email" },
    { text: "Kanban", icon: <ViewKanban />, path: "/kanban" },
    { text: "UserProfile", icon: <Person />, path: "/user-profile", badge: "New" },
    { text: "Ecommerce", icon: <Business />, path: "/ecommerce-app", badge: "New" },
    { text: "Contacts", icon: <Contacts />, path: "/contacts" },
    { text: "Courses", icon: <School />, path: "/courses" },
    { text: "Employee", icon: <Person />, path: "/employee" },
    { text: "Notes", icon: <Note />, path: "/notes" },
    { text: "Tickets", icon: <ConfirmationNumber />, path: "/tickets" },
    { text: "Contact List", icon: <Contacts />, path: "/contact-list" },
    { text: "Invoice", icon: <Receipt />, path: "/invoice", expandable: true },
    { text: "ToDo", icon: <Assignment />, path: "/todo" },
  ]

  const handleItemClick = (item) => {
    if (item.expandable) {
      setExpandedItems((prev) => ({
        ...prev,
        [item.text]: !prev[item.text],
      }))
    } else {
      navigate(item.path)
    }
  }

  const isActive = (path) => location.pathname === path

  const sidebarVariants = {
    open: { width: 280 },
    closed: { width: 80 },
  }

  return (
    <motion.div
      initial={false}
      animate={open ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#2A3447",
            color: "white",
            transition: "width 0.3s ease-in-out",
            overflowX: "hidden",
          },
        }}
      >
        {/* Logo */}
        <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              background: "linear-gradient(135deg, #5D87FF 0%, #49BEFF 100%)",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DashboardIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
                  Modernize
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        {/* HOME Section */}
        <Box sx={{ px: 2, py: 1 }}>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Typography variant="caption" sx={{ color: "#8A92A5", fontWeight: 600 }}>
                  HOME
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        <List sx={{ px: 1 }}>
          {homeItems.map((item) => (
            <React.Fragment key={item.text}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleItemClick(item)}
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    backgroundColor: item.active ? "#5D87FF" : "transparent",
                    "&:hover": {
                      backgroundColor: item.active ? "#5D87FF" : "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "white", minWidth: 40 }}>{item.icon}</ListItemIcon>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        style={{ display: "flex", alignItems: "center", width: "100%" }}
                      >
                        <ListItemText primary={item.text} sx={{ color: "white" }} />
                        {item.expandable && (expandedItems[item.text] ? <ExpandLess /> : <ExpandMore />)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          ))}
        </List>

        {/* APPS Section */}
        <Box sx={{ px: 2, py: 1, mt: 2 }}>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Typography variant="caption" sx={{ color: "#8A92A5", fontWeight: 600 }}>
                  APPS
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        <List sx={{ px: 1 }}>
          {appItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(item)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  backgroundColor: isActive(item.path) ? "#5D87FF" : "transparent",
                  "&:hover": {
                    backgroundColor: isActive(item.path) ? "#5D87FF" : "rgba(255,255,255,0.1)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "white", minWidth: 40 }}>{item.icon}</ListItemIcon>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      style={{ display: "flex", alignItems: "center", width: "100%" }}
                    >
                      <ListItemText primary={item.text} sx={{ color: "white" }} />
                      {item.badge && (
                        <Chip
                          label={item.badge}
                          size="small"
                          sx={{
                            backgroundColor: "#FF6B6B",
                            color: "white",
                            fontSize: "10px",
                            height: 20,
                          }}
                        />
                      )}
                      {item.expandable && (expandedItems[item.text] ? <ExpandLess /> : <ExpandMore />)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* User Profile at Bottom */}
        <Box sx={{ mt: "auto", p: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              p: 1,
              borderRadius: 2,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Avatar src="/placeholder.svg?height=40&width=40" sx={{ width: 40, height: 40 }} />
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  style={{ flex: 1 }}
                >
                  <Typography variant="body2" sx={{ color: "white", fontWeight: 600 }}>
                    Mathew
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#8A92A5" }}>
                    Designer
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>
            <PowerSettingsNew sx={{ color: "#8A92A5", cursor: "pointer" }} />
          </Box>
        </Box>
      </Drawer>
    </motion.div>
  )
}

export default Sidebar
