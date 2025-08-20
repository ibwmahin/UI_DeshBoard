"use client"
import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"

const Calendar = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Calendar
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Schedule and manage your events, meetings, and appointments.
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
          Calendar view coming soon...
        </Typography>
      </Box>
    </motion.div>
  )
}

export default Calendar
