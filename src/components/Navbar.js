"use client"

import { useState, useContext } from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Typography,
  Divider,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material"
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Apps as AppsIcon,
  Chat as ChatIcon,
  CalendarToday,
  Email as EmailIcon,
  Notifications as NotificationsIcon,
  DarkMode,
  LightMode,
} from "@mui/icons-material"
import { ThemeContext } from "../App"

const Navbar = ({ onToggleSidebar }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const [notificationAnchor, setNotificationAnchor] = useState(null)
  const [profileAnchor, setProfileAnchor] = useState(null)
  const [appsAnchor, setAppsAnchor] = useState(null)

  const handleProfileClick = (event) => {
    setProfileAnchor(event.currentTarget)
  }

  const handleNotificationClick = (event) => {
    setNotificationAnchor(event.currentTarget)
  }

  const handleAppsClick = (event) => {
    setAppsAnchor(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setNotificationAnchor(null)
    setProfileAnchor(null)
    setAppsAnchor(null)
  }

  const notifications = [
    {
      id: 1,
      title: "Roman Joined the Team!",
      subtitle: "Congratulate him",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "9:08 AM",
    },
    {
      id: 2,
      title: "New message received",
      subtitle: "Salma sent you new message",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "11:56 AM",
    },
    {
      id: 3,
      title: "New Payment received",
      subtitle: "Check your earnings",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "4:39 AM",
    },
    {
      id: 4,
      title: "Jolly completed tasks",
      subtitle: "Assign her new tasks",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "1:12 AM",
    },
  ]

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: darkMode ? "#2A3447" : "white",
        color: darkMode ? "white" : "black",
        boxShadow: "0 0 20px rgba(0,0,0,0.05)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={onToggleSidebar} sx={{ color: "inherit" }}>
            <MenuIcon />
          </IconButton>

          {/* Search Bar */}
          <Box
            sx={{
              position: "relative",
              borderRadius: 2,
              backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "#f5f5f5",
              width: 300,
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              sx={{
                padding: (theme) => theme.spacing(0, 2),
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search here..."
              sx={{
                color: "inherit",
                "& .MuiInputBase-input": {
                  padding: (theme) => theme.spacing(1, 1, 1, 0),
                  paddingLeft: `calc(1em + ${40}px)`,
                  width: "100%",
                },
              }}
            />
          </Box>
        </Box>

        {/* Right Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Apps Dropdown */}
          <IconButton onClick={handleAppsClick} sx={{ color: "inherit" }}>
            <AppsIcon />
          </IconButton>

          {/* Quick Links */}
          <IconButton sx={{ color: "inherit" }}>
            <ChatIcon />
          </IconButton>
          <IconButton sx={{ color: "inherit" }}>
            <CalendarToday />
          </IconButton>
          <IconButton sx={{ color: "inherit" }}>
            <EmailIcon />
          </IconButton>

          {/* Language */}
          <IconButton sx={{ color: "inherit" }}>
            <img
              src="/placeholder.svg?height=20&width=30"
              alt="Language"
              style={{ width: 20, height: 15, borderRadius: 2 }}
            />
          </IconButton>

          {/* Theme Toggle */}
          <IconButton onClick={toggleTheme} sx={{ color: "inherit" }}>
            {darkMode ? <LightMode /> : <DarkMode />}
          </IconButton>

          {/* Notifications */}
          <IconButton onClick={handleNotificationClick} sx={{ color: "inherit" }}>
            <Badge badgeContent={5} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Profile */}
          <IconButton onClick={handleProfileClick}>
            <Avatar src="/placeholder.svg?height=32&width=32" sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Box>

        {/* Apps Menu */}
        <Menu
          anchorEl={appsAnchor}
          open={Boolean(appsAnchor)}
          onClose={handleClose}
          PaperProps={{
            sx: { width: 200, mt: 1 },
          }}
        >
          <MenuItem onClick={handleClose}>Chat</MenuItem>
          <MenuItem onClick={handleClose}>Calendar</MenuItem>
          <MenuItem onClick={handleClose}>Email</MenuItem>
          <MenuItem onClick={handleClose}>Contacts</MenuItem>
        </Menu>

        {/* Notifications Menu */}
        <Menu
          anchorEl={notificationAnchor}
          open={Boolean(notificationAnchor)}
          onClose={handleClose}
          PaperProps={{
            sx: { width: 360, mt: 1 },
          }}
        >
          <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6">Notifications</Typography>
            <Badge badgeContent="5 new" color="primary" />
          </Box>
          <Divider />
          <List sx={{ p: 0 }}>
            {notifications.map((notification) => (
              <ListItem key={notification.id} sx={{ py: 1 }}>
                <ListItemAvatar>
                  <Avatar src={notification.avatar} />
                </ListItemAvatar>
                <ListItemText primary={notification.title} secondary={notification.subtitle} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Button fullWidth variant="outlined">
              See all notifications
            </Button>
          </Box>
        </Menu>

        {/* Profile Menu */}
        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={handleClose}
          PaperProps={{
            sx: { width: 320, mt: 1 },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              User Profile
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Avatar src="/placeholder.svg?height=60&width=60" sx={{ width: 60, height: 60 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  Mathew Anderson
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Designer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  info@modernize.com
                </Typography>
              </Box>
            </Box>

            <MenuItem onClick={handleClose}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}>👤</Avatar>
                <Box>
                  <Typography variant="body2">My Profile</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Account Settings
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "secondary.main", width: 32, height: 32 }}>📧</Avatar>
                <Box>
                  <Typography variant="body2">My Inbox</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Messages & Email
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "success.main", width: 32, height: 32 }}>✓</Avatar>
                <Box>
                  <Typography variant="body2">My Tasks</Typography>
                  <Typography variant="caption" color="text.secondary">
                    To-do and Daily Tasks
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <Card sx={{ mt: 2, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h6" gutterBottom>
                  Unlimited Access
                </Typography>
                <Button variant="contained" sx={{ bgcolor: "rgba(255,255,255,0.2)" }}>
                  Upgrade
                </Button>
              </CardContent>
            </Card>

            <Button fullWidth variant="outlined" sx={{ mt: 2 }} onClick={handleClose}>
              Logout
            </Button>
          </Box>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
