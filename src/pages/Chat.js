"use client"
import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"

const Chat = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Chat
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Real-time messaging and communication platform.
        </Typography>
      </Box>

      <Box
        sx={{
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px dashed",
          borderColor: "divider",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Chat interface coming soon...
        </Typography>
      </Box>
    </motion.div>
  )
}

export default Chat
