"use client"
import { Box, Typography, Button } from "@mui/material"
import { motion } from "framer-motion"
import { Build } from "@mui/icons-material"

const Maintenance = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        textAlign: "center",
        p: 3,
      }}
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Build sx={{ fontSize: "5rem", mb: 3 }} />
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Under Maintenance
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          We're currently performing scheduled maintenance. We'll be back shortly!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
          Thank you for your patience. Please check back in a few minutes.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "white",
            color: "primary.main",
            borderRadius: 2,
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.9)",
            },
          }}
        >
          Notify Me When Ready
        </Button>
      </motion.div>
    </Box>
  )
}

export default Maintenance
