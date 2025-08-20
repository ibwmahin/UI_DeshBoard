"use client"
import { Box, Typography, Button } from "@mui/material"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()

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
        <Typography variant="h1" fontWeight={700} sx={{ fontSize: "8rem", mb: 2 }}>
          404
        </Typography>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/")}
          sx={{
            bgcolor: "white",
            color: "primary.main",
            borderRadius: 2,
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.9)",
            },
          }}
        >
          Go Back Home
        </Button>
      </motion.div>
    </Box>
  )
}

export default Error
